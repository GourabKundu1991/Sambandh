import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterComponents from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ComplaintListScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [complaintList, setComplaintList] = React.useState([]);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);

            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });

            AsyncStorage.getItem('language').then(val => {
                if (val != null) {
                    setLanguage(val);
                    i18n
                        .changeLanguage(val)
                        .then(() => console.log(val))
                        .catch(err => console.log(err));
                }
            });
            getAllData();
        });
        return unsubscribe;
    }, []);

    const getAllData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("pageNumber", 1);
                fetch(`${BASE_URL}/get_complaints`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_complaints:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setLoading(false);
                            setComplaintList(responseJson.conplaints);
                        } else {
                            setLoading(false);
                            Toast.show({ description: responseJson.message });
                            if (responseJson.msg_code === "msg_1000") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Verify OTP Error:", error);
                        Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
                    });
            }
        });
    };

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("My Complaints")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        {complaintList.length == 0 && (
                            <LinearGradient
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', paddingLeft: 20, paddingRight: 20, paddingVertical: 20 }}
                            >
                                <VStack justifyContent={'center'} alignItems={'center'} height={400} padding={10} space={3}>
                                    <Icon name="hourglass-outline" size={80} color={orgDetails.color} />
                                    <Text fontSize="xl" color={darkColor} fontFamily={fontBold}>
                                        {t("Result Not Found")}
                                    </Text>
                                    <Text fontSize="sm" color={darkGrey} fontFamily={fontBold} textAlign={'center'}>
                                        {t("Whoops... This information is not available for a moment")}
                                    </Text>
                                </VStack>
                            </LinearGradient>
                        )}
                        {complaintList.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', padding: 15 }}
                            >
                                <VStack space={3}>
                                    <HStack justifyContent="space-between" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                        <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                            {t("Complain ID")}
                                        </Text>
                                        <Text fontSize="sm" color={darkColor} fontWeight="bold">
                                            {item.complain_id}
                                        </Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                        <VStack paddingX={3} width={'100%'} space={1}>
                                            <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                                {t("Product Name")}: {item.product_name}
                                            </Text>
                                            <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                                {t("status")}: {item.status}
                                            </Text>
                                            <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                                {t("Category Name")}: {item.category_name}
                                            </Text>
                                            <VStack marginY={2} justifyContent="space-between" backgroundColor={'#eeeeee'} paddingY={3} paddingX={5} borderRadius={10} overflow={'hidden'}>
                                                <Text fontSize="sm" color={darkGrey} textAlign={'center'} fontFamily={fontBold}>
                                                    {t("Complain Description")}:
                                                </Text>
                                                <Text fontSize="sm" color={darkColor} textAlign={'center'} fontWeight="bold">
                                                    {item.complain_description}
                                                </Text>
                                            </VStack>
                                            <VStack marginY={2} justifyContent="space-between" backgroundColor={'#eeeeee'} paddingY={3} paddingX={5} borderRadius={10} overflow={'hidden'}>
                                                <Text fontSize="sm" color={darkGrey} textAlign={'center'} fontFamily={fontBold}>
                                                    {t("Complain Remarks")}:
                                                </Text>
                                                <Text fontSize="sm" color={darkColor} textAlign={'center'} fontWeight="bold">
                                                    {item.complain_remarks}
                                                </Text>
                                            </VStack>
                                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                                <Stack style={{ width: '48%' }} space={2}>
                                                    <HStack alignItems="center" space={0}>
                                                        <Icon name="attach-outline" size={18} color="#666666" />
                                                        <Text color="#666666" fontSize="sm" textTransform="capitalize">{t("Image 1")}</Text>
                                                    </HStack>
                                                    <View style={[MainStyle.inputbox, { position: 'relative' }]}>
                                                        <Image source={item.image1 != "" ? { uri: item.image1 } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 100 }} />
                                                    </View>
                                                </Stack>
                                                <Stack style={{ width: '48%' }} space={2}>
                                                    <HStack alignItems="center" space={0}>
                                                        <Icon name="attach-outline" size={18} color="#666666" />
                                                        <Text color="#666666" fontSize="sm" textTransform="capitalize">{t("Image 2")}</Text>
                                                    </HStack>
                                                    <View style={[MainStyle.inputbox, { position: 'relative' }]}>
                                                        <Image source={item.image2 != "" ? { uri: item.image2 } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 100 }} />
                                                    </View>
                                                </Stack>
                                            </HStack>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </LinearGradient>
                        ))}
                        {pageNumber > totalPages && (
                            <HStack paddingY="3" paddingX="6" justifyContent="center">
                                <Button variant="outline" size="sm" rounded={30} onPress={loadMore} borderColor="gray.400">
                                    <Text color="gray.600">{t("Load More")}</Text>
                                </Button>
                            </HStack>
                        )}
                    </VStack>
                </ScrollView>
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

export default ComplaintListScreen;