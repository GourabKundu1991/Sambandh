import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, NativeBaseProvider, Text, VStack, Toast, Stack, Actionsheet, useDisclose, Select, Button, Slider, Pressable, Divider, TextArea, Input } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import RangeSlider from 'react-native-range-slider-expo/src/RangeSlider';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import { baseColor, dangerColor, darkColor, fontRegular, fontSemiBold, greyColor, lightColor, MainStyle, successColor, warningColor, fontBold, darkGrey } from '../assets/MainStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';


const PurchaseDetailsScreen = ({ navigation, route }) => {

    const { saleId, ApproveArr, RejectArr } = route.params;

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [orgDetails, setOrgDetails] = React.useState('');

    const [purchaseData, setPurchaseData] = React.useState("");
    const [reasonPopup, setReasonPopup] = React.useState(false);
    const [reasonStatus, setReasonStatus] = React.useState("");
    const [reasonList, setReasonList] = React.useState([]);
    const [comment, setComment] = React.useState('');
    const [selectedReason, setSelectedReason] = React.useState('');
    const [audit, setAudit] = React.useState("");

    const [showBagUpdatePopup, setShowBagUpdatePopup] = React.useState(false);
    const [newBagQty, setNewBagQty] = React.useState('');

    const [userType, setUserType] = React.useState("");

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

            console.log("ApproveArr: ", ApproveArr);
            console.log("RejectArr: ", RejectArr);

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
                formdata.append("sale_id", saleId);
                fetch(`${BASE_URL}/sale_details`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("sale_details Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setPurchaseData(responseJson.sale_data);
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
                        Toast.show("Sorry! Something went wrong. Maybe network request failed.");
                    });
            }
        });
    };

    const openReasonPop = (type) => {
        setReasonPopup(true);
        setReasonStatus(type);
        setSelectedReason("");
        if (type == "Approve") {
            setReasonList(ApproveArr);
        } else {
            setReasonList(RejectArr);
        }
        setAudit("");
    }

    const closeReasonPop = () => {
        setReasonPopup(false);
        setReasonStatus("");
        setSelectedReason("");
        setReasonList([]);
        setComment("");
        setAudit("");
    }

    const handleRejectReasons = () => {
        if (selectedReason == '') {
            Toast.show({ description: t("Please select Reason Type") });
        } else {
            AsyncStorage.getItem('userToken').then(val => {
                if (val) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("sale_id", saleId);
                    formdata.append("reason_id", selectedReason);
                    formdata.append("other_text", comment);
                    formdata.append("audited", audit);
                    fetch(`${BASE_URL}/approve_sale`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then(response => response.json())
                        .then(responseJson => {
                            console.log("approve_sale Response:", responseJson);
                            if (responseJson.bstatus === 1) {
                                Toast.show({description: responseJson.message});
                                closeReasonPop();
                                setTimeout(function () {
                                    setLoading(false);
                                    navigation.goBack();
                                }, 1000);
                            } else {
                                setLoading(false);
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
        }
    };

    const onBagUpdate = () => {
        if (newBagQty.trim() == '') {
            Toast.show({ description: t("Please Enter New Quantity (Bags)") });
        } else if (Number(purchaseData.claimed_quantity) <= newBagQty) {
            Toast.show({ description: t("New bag quantity should be less than previous claimed bag quantity") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("sale_id", saleId);
                    formdata.append("quantity", newBagQty);
                    fetch(`${BASE_URL}/update_sale_quantity`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then(response => response.json())
                        .then(responseJson => {
                            console.log("update_sale_quantity Response:", responseJson.message);
                            if (responseJson.bstatus == 1) {
                                Toast.show({description: responseJson.message});
                                closeBagPop();
                                getAllData();
                            } else {
                                setLoading(false);
                                Toast.show({description: responseJson.message});
                                if (responseJson.msg_code === "msg_1000") {
                                    AsyncStorage.clear();
                                    navigation.replace('Intro');
                                }
                            }
                        })
                        .catch(() => {
                            setLoading(false);
                            Toast.show("Sorry! Something went wrong. Maybe network request failed.");
                        });
                }
            });
        }
    }

    const closeBagPop = () => {
        setShowBagUpdatePopup(false);
        setNewBagQty("");
    }



    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Purchase Details")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={8}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5} space={6}>
                                <HStack justifyContent="space-between" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                    <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                        {t("Bags Sold")}
                                    </Text>
                                    <HStack alignpurchaseDatas={'center'} space={2}>
                                        <Text fontSize="sm" color={darkColor} fontWeight="bold">{purchaseData.tonnage_sold} Bag(s)</Text>
                                        <Pressable onPress={() => setShowBagUpdatePopup(true)} backgroundColor={successColor} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, overflow: 'hidden' }}><Icon name="pencil" size={14} color={lightColor} /></Pressable>
                                    </HStack>

                                </HStack>
                                <Stack paddingX={1} space={2}>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Name')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.Contact_Name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Influencer ID')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.ID}</Text>
                                    </HStack>
                                    <Pressable onPress={() => Linking.openURL(`tel:${purchaseData.ph_number}`)}>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontRegular} color={darkGrey}>{t("Influencer Phone")}:</Text>
                                            <HStack alignpurchaseDatas={'center'} space={2}>
                                                <View backgroundColor={orgDetails.color} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, overflow: 'hidden' }}><Icon name="call" size={14} color={orgDetails.name == "Zuari" ? darkColor : lightColor} /></View>
                                                <Text fontFamily={fontBold} color={orgDetails.color}>{purchaseData.ph_number}</Text>
                                            </HStack>
                                        </HStack>
                                    </Pressable>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Product')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.Product}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Claimed Quantity')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.claimed_quantity + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Unit Price')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.unit_price}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Enrolling Officer')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.officer_Name + " (" + purchaseData.officerExternalId + ")"}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Category')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.category}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Dealer Name')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.dealer_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('MTD Purchase')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.MTD + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Site Address')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.site_address}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Purchase Date')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{moment(purchaseData.Sale_Date).format("DD-MM-YYYY")}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Created Date')}:</Text>
                                        <Text width={150} fontFamily={fontBold} color={darkColor} textAlign="right">{moment(purchaseData.Sale_Registered_On).format("DD-MM-YYYY")}</Text>
                                    </HStack>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5} space={6}>
                                <HStack justifyContent="center" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                    <Text fontSize="md" color={darkGrey} fontFamily={fontBold}>
                                        {t("Counter Sales")}
                                    </Text>
                                </HStack>
                                <Stack paddingX={1} space={2}>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Last Month Approved Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.dealer_last_month_approved_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('MTD Approved Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.dealer_MTD_approved_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5} space={6}>
                                <HStack justifyContent="center" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                    <Text fontSize="md" color={darkGrey} fontFamily={fontBold}>
                                        {t("Influencer Sales")}
                                    </Text>
                                </HStack>
                                <Stack paddingX={1} space={2}>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Last Month Pending Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.influencer_last_month_pending_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('Last Month Approved Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.influencer_last_month_approved_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('MTD Pending Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.influencer_MTD_pending_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontRegular} color={darkGrey}>{t('MTD Approved Tertiary Sales')}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor} textAlign="right">{purchaseData.influencer_MTD_approved_tertiary_sales + " " + purchaseData.unit_name}</Text>
                                    </HStack>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
                <HStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%" justifyContent={'space-evenly'} alignItems={'center'}>
                    <Button onPress={() => { openReasonPop("Reject") }} width={'45%'} backgroundColor={dangerColor} borderRadius={30}>
                        <Text color={lightColor} fontFamily={fontBold} fontSize="md">{userType == "TR" ? t("Not Verify") : t("Reject")}</Text>
                    </Button>
                    <Button onPress={() => { openReasonPop("Approve") }} width={'45%'} backgroundColor={successColor} borderRadius={30}>
                        <Text color={lightColor} fontFamily={fontBold} fontSize="md">{userType == "TR" ? t("Verify") : t("Approve")}</Text>
                    </Button>
                </HStack>
            </VStack>
            {reasonPopup && (
                <View style={MainStyle.spincontainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        colors={["#ffffff", "#f0f2e5"]}
                        style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
                    >
                        <VStack space={8} padding={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Stack space={3} width={'100%'}>
                                <Text fontSize={'md'} textAlign={'center'} style={{ fontFamily: fontBold, marginVertical: 10 }}>
                                    {t("Reason for ") + reasonStatus}
                                </Text>
                                <View style={MainStyle.inputbox}>
                                    <Select
                                        size="md"
                                        selectedValue={selectedReason}
                                        onValueChange={value => {
                                            setSelectedReason(value);
                                        }}
                                        placeholder="Select Reason Type *"
                                        dropdownCloseIcon={
                                            <Icon name="chevron-down-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                        }
                                        dropdownOpenIcon={
                                            <Icon name="chevron-up-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                        }
                                        _selectedItem={{
                                            bg: '#FFFFFF',
                                            endIcon: (
                                                <Icon name="checkmark-circle" size={20} style={{ width: 25 }} color={successColor} />
                                            ),
                                        }}
                                        borderRadius={30}
                                        px={4}
                                    >
                                        {reasonList.map((item, index) => (
                                            <Select.Item key={index} label={item.reasons} value={item.id} />
                                        ))}
                                    </Select>
                                </View>
                                {(reasonStatus == "Approve" && userType != "TR") && (
                                    <View style={MainStyle.inputbox}>
                                        <Select
                                            size="md"
                                            selectedValue={audit}
                                            onValueChange={value => {
                                                setAudit(value);
                                            }}
                                            placeholder="Purchase Audited"
                                            dropdownCloseIcon={
                                                <Icon name="chevron-down-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                            }
                                            dropdownOpenIcon={
                                                <Icon name="chevron-up-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                            }
                                            _selectedItem={{
                                                bg: '#FFFFFF',
                                                endIcon: (
                                                    <Icon name="checkmark-circle" size={20} style={{ width: 25 }} color={successColor} />
                                                ),
                                            }}
                                            borderRadius={30}
                                            px={4}
                                        >
                                            <Select.Item label={'Yes'} value={'Yes'} />
                                            <Select.Item label={'No'} value={'No'} />
                                        </Select>
                                    </View>
                                )}
                                <View style={MainStyle.inputbox}>
                                    <Input multiline={true} textAlignVertical='top' height={100} size="md" variant="unstyled" placeholder={t('Enter Comments')} onChangeText={text => setComment(text)} />
                                </View>
                            </Stack>
                            <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => handleRejectReasons()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Submit')}</Text>
                            </Button>
                        </VStack>
                    </LinearGradient>
                    <TouchableOpacity
                        style={{
                            textAlign: 'center',
                            zIndex: 1,
                            borderWidth: 1,
                            paddingHorizontal: 40,
                            paddingVertical: 5,
                            borderColor: lightColor,
                            borderRadius: 30,
                            marginTop: 30
                        }}
                        onPress={() => closeReasonPop()}
                    >
                        <Text color={lightColor} fontSize="sm">{t('Cancel')}</Text>
                    </TouchableOpacity>
                </View>
            )}

            {showBagUpdatePopup && (
                <View style={MainStyle.spincontainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        colors={["#ffffff", "#f0f2e5"]}
                        style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
                    >
                        <VStack space={8} padding={5} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Stack space={5} width={'100%'}>
                                <Text fontSize={'md'} textAlign={'center'} fontFamily={fontBold}>
                                    {t("Please Update Bag Quantity")}
                                </Text>
                                <Text fontSize={'lg'} color={orgDetails.color} textAlign={'center'} style={{ fontFamily: fontBold }}>
                                    {t("Claimed Quantity")} : {purchaseData.claimed_quantity} Bags
                                </Text>
                                <View style={MainStyle.inputbox}>
                                    <Input size="md" variant="unstyled" keyboardType='number-pad' placeholder={t('New Quantity (Bags) *')} onChangeText={text => setNewBagQty(text)} />
                                </View>
                                <Text fontSize={'xs'} color={dangerColor} textAlign={'center'} fontFamily={fontBold}>
                                    {t("*** New bag quantity should be less than previous claimed bag quantity")}.
                                </Text>
                            </Stack>
                            <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => onBagUpdate()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Submit')}</Text>
                            </Button>
                        </VStack>
                    </LinearGradient>
                    <TouchableOpacity
                        style={{
                            textAlign: 'center',
                            zIndex: 1,
                            borderWidth: 1,
                            paddingHorizontal: 40,
                            paddingVertical: 5,
                            borderColor: lightColor,
                            borderRadius: 30,
                            marginTop: 30
                        }}
                        onPress={() => closeBagPop()}
                    >
                        <Text color={lightColor} fontSize="sm">{t('Cancel')}</Text>
                    </TouchableOpacity>
                </View>
            )}
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

/* const styles = StyleSheet.create({}); */

export default PurchaseDetailsScreen;