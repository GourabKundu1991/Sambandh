import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useEffect, useCallback } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import { AccessToken, API_KEY, APIkey, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseDarkColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import RenderHtml, { RenderHTML } from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
const ProductDetailsScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [cartcount, setCartCount] = React.useState("");

    const [orgDetails, setOrgDetails] = React.useState('');

    const [prodData, setProdData] = React.useState("");

    const [prodImage, setProdImage] = React.useState("");


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);

            setProdData(route.params.details);
            setProdImage(route.params.details.BaseUrl + route.params.details.ProductImage)

            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });

            countCart();
        });
        return unsubscribe;
    }, []);

    const countCart = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                fetch(`${BASE_URL}/cart_count`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("cart_count:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setCartCount(responseJson.cart_count);
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
    };

    const AddToCard = (type) => {
        setLoading(true);
        console.log(prodData);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("prod_id", prodData.productId);
                formdata.append("price_in_points", prodData.pricePoints);
                formdata.append("prod_name", prodData.productName);
                formdata.append("price", prodData.pricePoints)
                formdata.append("quantity", 1);
                console.log(formdata);
                fetch(`${BASE_URL}/addcart`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("addcart:", responseJson);
                        Toast.show({ description: t(responseJson.message) });
                        if (responseJson.bstatus == 1) {
                            countCart();
                            if (type == "Redeem") {
                                navigation.navigate("Cart");
                            }
                        } else {
                            setLoading(false);
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
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Product Details")} themeColor={orgDetails.color} navigation={navigation} cartcount={cartcount} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        <View style={{ backgroundColor: '#eeeeee', borderWidth: 5, borderColor: '#eeeeee' }}>
                            <Image source={{ uri: prodImage }} width={'100%'} height={230} style={{ borderRadius: 5, overflow: 'hidden' }} resizeMode="contain" />
                        </View>
                        <Text fontSize='lg' textAlign={'center'} color={darkColor}>{prodData.productName}</Text>
                        <Text fontWeight="bold" textAlign={'center'} fontSize='xl' color={orgDetails.color}>{prodData.pricePoints} {t("Points")}</Text>
                        <VStack space={4} mb={10} px={4}>
                            <Box
                                bg="#F1F1F1"
                                borderRadius={12}
                                px={4}
                                py={3}
                                width="100%"
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Text fontWeight="semibold" fontSize="md" color="gray.600">
                                    Item Code:
                                </Text>
                                <Text fontWeight="bold" fontSize="20" color="black">
                                    {prodData.ProductCode}
                                </Text>
                            </Box>
                            <Box bg="#F1F1F1" borderRadius={12} px={4} py={3} width="100%">
                                <Text fontWeight="semibold" fontSize="md" color="gray.600">
                                    Description:
                                </Text>
                                <RenderHTML contentWidth={width} baseStyle={{ color: '#444444', fontSize: 14 }} source={{ html: prodData.ProductDesc }} />
                            </Box>
                        </VStack>
                    </VStack>
                </ScrollView>
                <HStack justifyContent={'space-evenly'} backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <Button variant={'outline'} borderColor={orgDetails.color} onPress={() => AddToCard("Add")} width={'45%'} borderRadius={30}>
                        <Text color={orgDetails.color} fontFamily={fontBold} fontSize="md">{t("Add to Cart")}</Text>
                    </Button>
                    <Button onPress={() => AddToCard("Redeem")} width={'45%'} backgroundColor={orgDetails.color} borderRadius={30}>
                        <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Buy Now")}</Text>
                    </Button>
                </HStack>
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

export default ProductDetailsScreen;