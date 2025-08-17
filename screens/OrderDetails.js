import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions, TouchableOpacity, Alert } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseDarkColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import RenderHtml from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const OrderDetailsScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [cartcount, setCartCount] = React.useState("");
    const [step1, setStep1] = React.useState(true);
    const [step2, setStep2] = React.useState(false);

    const [mypropsdata, setMypropsData] = React.useState(route.params);

    const [orgDetails, setOrgDetails] = React.useState('');


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });
        });
        return unsubscribe;
    }, []);

    const CancelOrder = (orderId, Itemid) => {
        Alert.alert(
            t("Warning"),
            t("Are you sure to cancel this order") + "?",
            [
                {
                    text: t("Close"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Sure"), onPress: () => {
                        setLoading(true);
                        AsyncStorage.getItem('userToken').then(val => {
                            if (val) {
                                let formdata = new FormData();
                                formdata.append("APIkey", `${API_KEY}`);
                                formdata.append("token", JSON.parse(val).token);
                                formdata.append("orgId", JSON.parse(val).orgId);
                                formdata.append("orderId", orderId);
                                formdata.append("itemId", Itemid);
                                formdata.append("status", "Cancelled");
                                fetch(`${BASE_URL}/cancel_order`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                    body: formdata
                                })
                                    .then(response => response.json())
                                    .then(responseJson => {
                                        setLoading(false);
                                        console.log("Cancel Response:", responseJson);
                                        if (responseJson.bstatus === 1) {
                                            Toast.show({ description: responseJson.message });
                                            navigation.goBack();
                                        } else {
                                            Toast.show({ description: responseJson.message });
                                            setTimeout(function () {
                                                setLoading(false);
                                                if (responseJson.msg_code == "msg_1000") {
                                                    AsyncStorage.clear();
                                                    navigation.navigate('Intro');
                                                }
                                            }, 1000);
                                        }
                                    })
                                    .catch((error) => {
                                        setLoading(false);
                                        //console.log("Error:", error);
                                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                                    });
                            } else {
                                setLoading(false);
                                AsyncStorage.clear();
                                navigation.navigate('Intro');
                            }
                        });
                    }
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Order Details")} themeColor={orgDetails.color} navigation={navigation} cartcount={cartcount} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        <Box bg="#F1F1F1" borderRadius={12} px={4} py={3} justifyContent="space-between" alignItems="center">
                            <VStack space={2} width={'100%'}>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.600">Order Number:</Text>
                                    <Text fontFamily={fontBold} fontSize={'xl'} color={darkColor}>{route.params.OrderID}</Text>
                                </HStack>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.600">Order Item Id:</Text>
                                    <Text fontFamily={fontBold} fontSize={'lg'} color={darkColor}>{route.params.OrderItemID}</Text>
                                </HStack>
                            </VStack>
                        </Box>
                        <Image source={{ uri: mypropsdata.productimage }} style={{ width: '100%', height: 300, borderRadius: 30, overflow: 'hidden', borderWidth: 3, borderColor: greyColor }} resizeMode="contain" />
                        <Text fontWeight="bold" fontSize='xl' textAlign={'center'} color={darkColor}>{route.params.productname}</Text>
                        <Text fontWeight="bold" fontSize='2xl' textAlign={'center'} color={baseColor}>{mypropsdata.pricePoint ? mypropsdata.pricePoint : ""} {t("Points")}</Text>
                        <Box bg="#F1F1F1" borderRadius={12} px={4} py={3} justifyContent="space-between" alignItems="center">
                            <VStack space={2} width={'100%'}>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.600">Order Quantity:</Text>
                                    <Text fontFamily={fontBold} fontSize={'lg'} color={darkColor}>{route.params.quantity}</Text>
                                </HStack>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.600">Order Date:</Text>
                                    <Text fontFamily={fontBold} fontSize={'lg'} color={darkColor}>{route.params.OrderDate}</Text>
                                </HStack>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Text fontWeight="semibold" fontSize="sm" color="gray.600">Order Status:</Text>
                                    <Text fontFamily={fontBold} fontSize={'lg'} color={darkColor}>{route.params.status}</Text>
                                </HStack>
                            </VStack>
                        </Box>
                    </VStack>
                </ScrollView>
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <HStack justifyContent="space-between" alignContent="center">
                        <VStack>
                            <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Total Points")}:</Text>
                            <HStack space={1} alignItems="center">
                                <Text color="#111111" fontSize="xl" fontWeight="bold">{route.params.totalPoints}</Text>
                                <Text color="#111111" fontSize="sm" fontWeight="bold">{t("Points")}</Text>
                            </HStack>
                        </VStack>
                        <Button disabled={route.params.status != "Open"} style={{opacity: route.params.status == "Open" ? 1 : 0.5}} onPress={() => CancelOrder(route.params.OrderID, route.params.OrderItemID)} width={160} backgroundColor={dangerColor} borderRadius={30}>
                            <Text color={lightColor} fontFamily={fontBold} fontSize="md">{t("Cancel Order")}</Text>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
});

export default OrderDetailsScreen;