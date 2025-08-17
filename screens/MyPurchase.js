import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Divider, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, StatusBar, Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, baseColorC, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

const MyPurchaseScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [purchaseList, setPurchaseList] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);


    const { isOpen, onOpen, onClose } = useDisclose();
    const [loadMoreShow, setLoadMoreShow] = React.useState(0);

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
            if (val) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("pageNumber", "1");
                fetch(`${BASE_URL}/my_sale_report`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("My Purchase Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setPurchaseList(responseJson.sale_details || []);
                            setTotalPages(responseJson.total_pages || 1);
                            setPageNumber(1);
                        } else {
                            Toast.show({description: responseJson.message});

                            if (responseJson.msg_code === "msg_1000") {
                                AsyncStorage.clear();
                                navigation.replace('Intro');
                            }
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            }
        });
    };

    const loadMore = async () => {
        const nextPage = pageNumber + 1;
        setLoading(true);

        AsyncStorage.getItem('userToken').then(val => {
            if (val) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("pageNumber", nextPage);
                fetch(`${BASE_URL}/my_sale_report`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("LoadMore Purchase Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setPurchaseList(prev => [...prev, ...(responseJson.sale_details || [])]);
                            setPageNumber(nextPage);
                            setTotalPages(responseJson.total_pages || totalPages);
                        } else {
                            setPageNumber(1);
                        }
                    })
                    .catch(() => {
                        setLoading(false);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            }
        });
    };

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("My Purchases")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        {purchaseList.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden' }}
                            >
                                <VStack padding={5}>
                                    <HStack justifyContent="space-between" marginBottom={2} backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={15} overflow={'hidden'}>
                                        <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                            Bags Sold
                                        </Text>
                                        <Text fontSize="sm" color={darkColor} fontWeight="bold">
                                            {item.tonnage_sold || "0"} Bags
                                        </Text>
                                    </HStack>
                                    <Stack paddingX={3}>
                                        {[
                                            { label: 'Product', value: item.product_name },
                                            { label: 'Claimed Quantity', value: `${item.claimed_quantity} ${item.unit_name}` },
                                            { label: 'Unit Price', value: item.unit_price },
                                            { label: 'Category', value: item.category },
                                            { label: 'Dealer Name', value: item.puchased_from },
                                            { label: 'Dealer Code', value: item.dealer_code },
                                            { label: 'Site Address', value: item.site_address || "N/A" },
                                            { label: 'Date', value: item.sale_date },
                                            { label: 'Reason', value: item.comments },
                                            { label: 'Status', value: item.status }
                                        ].map((field, idx) => (
                                            <Stack key={idx}>
                                                {field.value != '' && (
                                                    <HStack justifyContent="space-between" marginTop={2}>
                                                        <Text color={darkGrey}>{field.label}:</Text>
                                                        <Text
                                                            fontWeight="bold"
                                                            textAlign="right"
                                                            color={
                                                                field.label === 'Status'
                                                                    ? (field.value.toLowerCase() === 'approved' ? successColor : dangerColor)
                                                                    : darkColor
                                                            }
                                                        >
                                                            {field.value}
                                                        </Text>
                                                    </HStack>
                                                )}
                                            </Stack>
                                        ))}
                                    </Stack>
                                </VStack>
                            </LinearGradient>
                        ))}
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

export default MyPurchaseScreen;