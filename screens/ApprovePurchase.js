import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, NativeBaseProvider, Text, VStack, Toast, Stack, Actionsheet, useDisclose, Select, Button, Slider, Divider, Radio } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, Linking, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import RangeSlider from 'react-native-range-slider-expo/src/RangeSlider';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import { baseColor, dangerColor, darkColor, fontRegular, fontSemiBold, greyColor, lightColor, MainStyle, successColor, warningColor, fontBold, darkGrey } from '../assets/MainStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const ApprovePurchaseScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [orgDetails, setOrgDetails] = React.useState('');

    const [dataFound, setDataFound] = React.useState("");

    const [isLoadMore, setIsLoadMore] = React.useState(true);
    const [allProducts, setAllProducts] = React.useState([]);
    const [inCart, setInCart] = React.useState("");
    const [allCategory, setAllCategory] = React.useState([]);

    const [canRedeem, setCanRedeem] = React.useState(0);
    const [canSubmitKYC, setCanSubmitKYC] = React.useState(0);
    const [canSubmitKYCText, setCanSubmitKYCText] = React.useState("");

    const [loadMoreShow, setLoadMoreShow] = React.useState(0);
    const [selected, setSelected] = React.useState('All');
    const [value, setValue] = React.useState('all');
    const [purchaseData, setPurchaseData] = React.useState([]);


    const [purchaseList, setPurchaseList] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [approveData, SetApproveData] = React.useState([]);
    const [rejectData, SetRejectData] = React.useState([]);

    const [userType, setUserType] = React.useState("");

    const [typeId, setTypeId] = React.useState("");
    const [typeList, setTypeList] = React.useState([]);
    const [verifyTr, setVerifyTr] = React.useState("");


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);

            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });

            AsyncStorage.getItem('userToken').then(valUser => {
                if (valUser != null) {
                    setUserType(JSON.parse(valUser).user_type);
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
            getAllData(typeId, verifyTr);
            AsyncStorage.getItem('userToken').then(val => {
                console.log(val);
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    fetch(`${BASE_URL}/pre_registration`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("pre_registration:", responseJson);
                            if (responseJson.bstatus == 1) {
                                setLoading(false);
                                setTypeList(responseJson.contractors_category);
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                        });
                }
            });
        });
        return unsubscribe;
    }, []);

    const getAllData = (cateId, TrId) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("pageNumber", "1");
                formdata.append("trViewTransaction", userType == "TR" ? "1" : "");
                formdata.append("verifiedByTr", TrId);
                formdata.append("influencerTypeId", cateId);
                fetch(`${BASE_URL}/sale_approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("sale_approval Response:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setPurchaseList(responseJson.sale_data);
                            setTotalPages(responseJson.total_pages);
                            SetApproveData(responseJson.accept_reasons);
                            SetRejectData(responseJson.reject_reasons);
                            setPageNumber(1);
                        } else {
                            Toast.show({ description: responseJson.message });
                            setPurchaseList(responseJson.sale_data);
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
                fetch(`${BASE_URL}/sale_approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("sale_approval Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setPurchaseList(prev => [...prev, ...(responseJson.sale_details || [])]);
                            setPageNumber(nextPage);
                            setTotalPages(responseJson.total_pages);
                        } else {
                            Toast.show({ description: responseJson.message });
                            setPageNumber(1);
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

    const onSelectType = (val) => {
        setTypeId(val);
        setLoading(true);
        getAllData(val, verifyTr);
    }

    const onSelectTR = (val) => {
        setVerifyTr(val);
        setLoading(true);
        getAllData(typeId, val);
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={userType == "TR" ? t("Verify Purchase") : t("Approve Purchase")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        {userType == "Officer" && (
                            <LinearGradient
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', paddingLeft: 20, paddingRight: 20, paddingVertical: 20 }}
                            >
                                <VStack space={2}>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Infulencer Category")}
                                            InputLeftElement={<Icon name="options-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={typeId}
                                            onValueChange={value => onSelectType(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            <Select.Item label="All" value="" />
                                            {typeList.map((item, index) => (
                                                <Select.Item key={index} label={item.name} value={item.id} />
                                            ))}
                                        </Select>
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Filter By")}
                                            InputLeftElement={<Icon name="options-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={verifyTr}
                                            onValueChange={value => onSelectTR(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            <Select.Item label="All" value="" />
                                            <Select.Item label="Verified by TR" value="1" />
                                        </Select>
                                    </View>
                                </VStack>
                            </LinearGradient>
                        )}
                        {purchaseList.length == 0 && (
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
                        {purchaseList.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden' }}
                            >
                                <VStack padding={5} space={6}>
                                    <HStack justifyContent="space-between" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                        <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                            {t("Bags Sold")}
                                        </Text>
                                        <Text fontSize="sm" color={darkColor} fontWeight="bold">
                                            {item.tonnage_sold || "0"} Bag(s)
                                        </Text>
                                    </HStack>
                                    <Stack paddingX={3} space={2}>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Name')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.Contact_Name}</Text>
                                        </HStack>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Influencer ID')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.ID}</Text>
                                        </HStack>
                                        <Pressable onPress={() => Linking.openURL(`tel:${item.ph_number}`)}>
                                            <HStack justifyContent="space-between">
                                                <Text fontFamily={fontRegular} color={darkGrey}>{t("Influencer Phone")}:</Text>
                                                <HStack alignItems={'center'} space={2}>
                                                    <View backgroundColor={orgDetails.color} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, overflow: 'hidden' }}><Icon name="call" size={14} color={orgDetails.name == "Zuari" ? darkColor : lightColor} /></View>
                                                    <Text fontFamily={fontBold} color={orgDetails.color}>{item.ph_number}</Text>
                                                </HStack>
                                            </HStack>
                                        </Pressable>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Product')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.Product}</Text>
                                        </HStack>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Claimed Quantity')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.claimed_quantity + " " + item.unit_name}</Text>
                                        </HStack>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Unit Price')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.unit_price}</Text>
                                        </HStack>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t('Enrolling Officer')}:</Text>
                                            <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{item.officer_Name + " (" + item.officerExternalId + ")"}</Text>
                                        </HStack>
                                    </Stack>
                                    <Button style={[MainStyle.solidbtn, { backgroundColor: darkColor, height: 40 }]} onPress={() => navigation.navigate("PurchaseDetails", { saleId: item.sale_id, ApproveArr: approveData, RejectArr: rejectData })}>
                                        <Text color={lightColor} fontFamily={fontBold} fontSize="sm">{t('Details')}</Text>
                                    </Button>
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
    bgimage: { flex: 1, justifyContent: 'center' },
    solidBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: '#111111', borderRadius: 10 },
    outlineBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: 'none', borderRadius: 10 },
    inputbox: { backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: 12, width: '100%', overflow: 'hidden', marginVertical: 7 },
    noti: { color: '#ffffff', width: 18, height: 18, borderRadius: 20, position: 'absolute', top: -5, right: -3, fontSize: 11, lineHeight: 18, paddingTop: 1, textAlign: 'center', overflow: 'hidden' },
    productbox: { position: 'relative', borderRadius: 15, width: '44%', marginHorizontal: '3%', marginBottom: '6%', backgroundColor: '#f6f6f6', padding: 15, borderColor: '#ffffff', borderWidth: 2, elevation: 10, shadowColor: '#666666', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, overflow: 'hidden' },
    productimage: { borderColor: '#dddddd', backgroundColor: '#ffffff', marginBottom: 10, borderWidth: 1, borderRadius: 10, width: '100%', height: 90, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default ApprovePurchaseScreen;