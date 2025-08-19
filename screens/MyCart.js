import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, NativeBaseProvider, Text, VStack, Toast, Button, Stack, Input, Select } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';
import { API_KEY, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID } from '../auth_provider/Config';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import { darkColor, darkGrey, fontBold, lightColor, MainStyle, successColor, warningColor } from '../assets/MainStyle';
import CheckBox from '@react-native-community/checkbox';

const CartScreen = ({ navigation }) => {

    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [allCart, setAllCart] = React.useState([]);
    const [controls, setControls] = React.useState("");

    const [successOrder, setSuccessOrder] = React.useState(false);

    const [isPending, setIsPending] = React.useState(false);
    const [isKYC, setIsKYC] = React.useState(false);

    const [balance, setBalance] = React.useState("");

    const [tdsBlock, setTdsBlock] = React.useState("");

    const [msg, setmsg] = React.useState("");
    const [tdsmsg, setTdsMsg] = React.useState("");

    const [announcementPop, setAnnouncementPop] = React.useState(false);
    const [announcementPop1, setAnnouncementPop1] = React.useState(false);
    const [announcementPop2, setAnnouncementPop2] = React.useState(false);
    const [announcementPop3, setAnnouncementPop3] = React.useState(false);

    const [contractorMessage, setContractorMessage] = React.useState("");

    const [check, setCheck] = React.useState(false);

    const [showAdd, setShowAdd] = React.useState(false);

    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [landMark, setLandMark] = React.useState("");
    const [ao, setAo] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [rmo, setRmo] = React.useState("");
    const [state, setState] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [city, setCity] = React.useState("");
    const [pinCode, setPinCode] = React.useState("");

    const [stateList, setStateList] = React.useState([]);
    const [districtList, setDistrictList] = React.useState([]);

    const [myAddress, setMyAddress] = React.useState("");

    const [submitType, setSubmitType] = React.useState("");

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(true);

            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });

            getAllData();
            //getAllAddress();
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
                fetch(`${BASE_URL}/mycart`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("mycart:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setLoading(false);
                            setAllCart(responseJson.row_items);
                            setControls(responseJson.control);
                            setBalance(responseJson.tds_sufficiency.balance);
                            setTdsBlock(responseJson.tds_sufficiency);
                            getAllAddress();
                            getState();
                            if (responseJson.contractor_pan_alert == 1) {
                                setAnnouncementPop(true);
                                setAnnouncementPop1(true);
                                setContractorMessage(responseJson.contractor_pan_alert_message);
                            }
                            if (responseJson.is_approved == 2) {
                                setIsKYC(true);
                            } else if (responseJson.is_approved == 0) {
                                setIsPending(true);
                            }
                        } else {
                            setLoading(false);
                            setAllCart([]);
                            setControls("");
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

    const getAllAddress = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                fetch(`${BASE_URL}/get_all_address`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_all_address:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setLoading(false);
                            setMyAddress(responseJson.address_list.alternate_addresses);
                        } else {
                            setLoading(false);
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

    const updateKYC = () => {
        navigation.replace('UpdateKYC');
    }

    const updateQty = (qty, cartId, productId) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("cart_id", cartId);
                formdata.append("product_id", productId);
                formdata.append("quantity", qty);
                console.log(formdata);
                fetch(`${BASE_URL}/update_quantity`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        //console.log("update Cart:", responseJson);
                        if (responseJson.status == 'success') {
                            Toast.show({ description: responseJson.message });
                            setLoading(true);
                            getAllData();
                        } else {
                            if (responseJson.msg_code == "msg_1000") {
                                Toast.show({ description: responseJson.message });
                                setTimeout(function () {
                                    setLoading(false);
                                    AsyncStorage.clear();
                                    navigation.navigate('Login');
                                }, 1000);
                            } else {
                                setLoading(false);
                                Alert.alert(
                                    t("Sorry") + "!",
                                    responseJson.message,
                                    [
                                        {
                                            text: t("Ok"), onPress: () => { }
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Update Cart Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Login');
            }
        });
    }

    const removeCart = (cartId, productId) => {
        Alert.alert(
            t("Warning"),
            t("Do you want to Remove Item from cart") + "?",
            [
                { text: t("Cancel"), onPress: () => { return null } },
                {
                    text: t("Yes"), onPress: () => {
                        AsyncStorage.getItem('userToken').then(val => {
                            if (val != null) {
                                let formdata = new FormData();
                                formdata.append("token", JSON.parse(val).token);
                                formdata.append("APIkey", `${API_KEY}`);
                                formdata.append("orgId", JSON.parse(val).orgId);
                                formdata.append("cart_id", cartId);
                                formdata.append("product_id", productId);
                                fetch(`${BASE_URL}/removecart`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                    body: formdata
                                })
                                    .then((response) => response.json())
                                    .then((responseJson) => {
                                        //console.log("Remove Cart:", responseJson);
                                        if (responseJson.bstatus == 1) {
                                            setLoading(true);
                                            getAllData();
                                        } else {
                                            Toast.show({ description: responseJson.message });
                                            setTimeout(function () {
                                                setLoading(false);
                                                if (responseJson.msg_code == "msg_1000") {
                                                    AsyncStorage.clear();
                                                    navigation.navigate('Login');
                                                }
                                            }, 1000);
                                        }
                                    })
                                    .catch((error) => {
                                        setLoading(false);
                                        //console.log("Remove Cart Error:", error);
                                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                                    });
                            } else {
                                setLoading(false);
                                AsyncStorage.clear();
                                navigation.navigate('Login');
                            }
                        });
                    }
                },
            ],
            { cancelable: false }
        )
    }

    const onPlaceOrder = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("cartId", controls.cart_id);
                console.log(formdata);
                fetch(`${BASE_URL}/place_order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Order Placed:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setSuccessOrder(true);
                            setmsg(responseJson.message);
                            setTdsMsg(responseJson.tds_deduction_msg);
                            getAllData();
                        } else {
                            if (responseJson.msg_code == "msg_1000") {
                                Toast.show({ description: responseJson.message });
                                setTimeout(function () {
                                    setLoading(false);
                                    AsyncStorage.clear();
                                    navigation.navigate('Login');
                                }, 1000);
                            } else {
                                setLoading(false);
                                Alert.alert(
                                    t("Sorry") + "!",
                                    responseJson.message,
                                    [
                                        {
                                            text: t("Ok"), onPress: () => { }
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Order Placed Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Login');
            }
        });
    }

    const onContinue = () => {
        setSuccessOrder(false);
        navigation.replace('Home');
    }

    const announcedYes = () => {
        setAnnouncementPop2(true);
        setAnnouncementPop1(false);
    }

    const onYes = () => {
        setAnnouncementPop2(false);
        setAnnouncementPop(false);
        navigation.navigate('PanUplode');
    }

    const onNo = () => {
        setAnnouncementPop2(false);
        setAnnouncementPop3(true);
    }

    const onOK = () => {
        if (!check) {
            Toast.show({ description: t("Please Check Declearation") });
        } else {
            setAnnouncementPop3(false);
            setAnnouncementPop(false);
        }
    }

    const openAdd = () => {
        setShowAdd(true);
        setSubmitType("Add");
    }

    const onSelectState = (val) => {
        setState(val);
        setDistrict("");
        setLoading(true);
        getCity(val);
    }

    const getState = () => {
        let formdata = new FormData();
        formdata.append("stateId", "");
        fetch(`${BASE_URL}/get_state_city_list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("get_state_city_list:", responseJson);
                setLoading(false);
                if (responseJson.bstatus === 1) {
                    setStateList(responseJson.states);
                }
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    const getCity = (stateid) => {
        let formdata = new FormData();
        formdata.append("stateId", stateid);
        fetch(`${BASE_URL}/get_state_city_list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("get_state_city_list:", responseJson);
                setLoading(false);
                if (responseJson.bstatus === 1) {
                    setDistrictList(responseJson.city_list);
                }
            })
            .catch((error) => {
                setLoading(false);
            });
    }

    const openEdit = () => {
        setShowAdd(true);
        setAddress1(myAddress.line1);
        setAddress2(myAddress.line2);
        setState(myAddress.state_id);
        setDistrict(myAddress.city_id);
        setPinCode(myAddress.post_code);
        setSubmitType("Edit");
        getCity(myAddress.state_id);
    }

    const closeAdd = () => {
        setShowAdd(false);
        setAddress1("");
        setAddress2("");
        setState("");
        setDistrict("");
        setPinCode("");
        setSubmitType("");
    }

    const onSave = () => {
        if (address1.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 1") });
        } else if (address2.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 2") });
        } else if (state == "") {
            Toast.show({ description: t("Please select State") });
        } else if (district == "") {
            Toast.show({ description: t("Please select District") });
        } else if (pinCode.trim() == "") {
            Toast.show({ description: t("Please enter Pincode") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("add_address_line1", address1);
                    formdata.append("add_address_line2", address2);
                    formdata.append("add_address_line3", "");
                    formdata.append("add_state", state);
                    formdata.append("add_city", district);
                    formdata.append("add_pincode", pinCode);
                    console.log(formdata);
                    fetch(`${BASE_URL}/add_new_ship_address`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("add_new_ship_address:", responseJson);
                            if (responseJson.bstatus == 1) {
                                setShowAdd(false);
                                getAllData();
                                Toast.show({ description: responseJson.message });
                            } else {
                                Toast.show({ description: responseJson.message });
                                if (responseJson.msg_code == "msg_1000") {
                                    setTimeout(function () {
                                        setLoading(false);
                                        AsyncStorage.clear();
                                        navigation.navigate('Login');
                                    }, 1000);
                                } else {
                                    setLoading(false);
                                }
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            //console.log("Order Placed Error:", error);
                            Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                        });
                } else {
                    setLoading(false);
                    AsyncStorage.clear();
                    navigation.navigate('Login');
                }
            });
        }
    }

    const onEdit = () => {
        if (address1.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 1") });
        } else if (address2.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 2") });
        } else if (state == "") {
            Toast.show({ description: t("Please select State") });
        } else if (district == "") {
            Toast.show({ description: t("Please select District") });
        } else if (pinCode.trim() == "") {
            Toast.show({ description: t("Please enter Pincode") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("add_address_line1", address1);
                    formdata.append("add_address_line2", address2);
                    formdata.append("add_address_line3", "");
                    formdata.append("add_state", state);
                    formdata.append("add_city", district);
                    formdata.append("add_pincode", pinCode);
                    formdata.append("address_id", myAddress.add_id);
                    formdata.append("table_name", myAddress.ref_table);
                    console.log(formdata);
                    fetch(`${BASE_URL}/update_ship_address`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("update_ship_address:", responseJson);
                            if (responseJson.bstatus == 1) {
                                setShowAdd(false);
                                Toast.show({ description: responseJson.message });
                                getAllData();
                            } else {
                                Toast.show({ description: responseJson.message });
                                if (responseJson.msg_code == "msg_1000") {
                                    setTimeout(function () {
                                        setLoading(false);
                                        AsyncStorage.clear();
                                        navigation.navigate('Login');
                                    }, 1000);
                                } else {
                                    setLoading(false);
                                }
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            //console.log("Order Placed Error:", error);
                            Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                        });
                } else {
                    setLoading(false);
                    AsyncStorage.clear();
                    navigation.navigate('Login');
                }
            });
        }
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("My Cart")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        {allCart.length == 0 && (
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
                        {allCart.map((item, index) =>
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', paddingLeft: 20, paddingRight: 20, paddingVertical: 20 }}
                            >
                                <HStack space="4">
                                    <Box style={styles.productimage}>
                                        <Image source={item.productImage ? { uri: item.baseUrl + item.productImage[0].product_image } : require('../assets/images/noimage.jpg')} style={{ width: 100, height: 90 }} resizeMode='contain' />
                                    </Box>
                                    <VStack style={styles.productdetails} space="1">
                                        <Text fontSize='sm' fontWeight="bold">{item.productName}</Text>
                                        <Text marginY="1" fontWeight="bold" fontSize='lg' color={darkColor}>{item.pricePoints} {t("points")}</Text>
                                        <HStack space={1} alignItems="center" justifyContent="space-between">
                                            <HStack space={1} style={{ alignItems: 'center' }}>
                                                {/* <TouchableOpacity onPress={() => updateQty(Number(item.quantity) - 1, item.cart_id, item.product_id)}>
                                                    <Icon name="remove-circle" size={26} color="#111111" />
                                                </TouchableOpacity> */}
                                                <Text style={{ width: 50, textAlign: 'center', backgroundColor: '#cccccc', borderRadius: 15, overflow: 'hidden' }} fontSize='md' fontWeight="medium">{item.quantity}</Text>
                                                {/* <TouchableOpacity onPress={() => updateQty(Number(item.quantity) + 1, item.cart_id, item.product_id)}>
                                                    <Icon name="add-circle" size={26} color="#111111" />
                                                </TouchableOpacity> */}
                                            </HStack>
                                            <TouchableOpacity onPress={() => removeCart(item.cart_id, item.product_id)}>
                                                <Icon name="trash" size={22} color="#f04e23" />
                                            </TouchableOpacity>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </LinearGradient>
                        )}
                    </VStack>
                </ScrollView>
            </VStack>
            <VStack backgroundColor={"#eeeeee"} padding={5} width="100%">
                <VStack justifyContent="space-between" alignContent="center">
                    {myAddress != "" && (
                    <VStack marginBottom={5} space={2}>
                        <HStack space={1} justifyContent={'space-between'} alignItems="center">
                            <Text color="#111111" fontSize="sm">{t("Address Line 1")}:</Text>
                            <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.line1}</Text>
                        </HStack>
                        {myAddress.line2 != "" && (
                            <HStack space={1} justifyContent={'space-between'} alignItems="center">
                                <Text color="#111111" fontSize="sm">{t("Address Line 2")}:</Text>
                                <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.line2}</Text>
                            </HStack>
                        )}
                        {myAddress.line3 != "" && (
                            <HStack space={1} justifyContent={'space-between'} alignItems="center">
                                <Text color="#111111" fontSize="sm">{t("Address Line 3")}:</Text>
                                <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.line3}</Text>
                            </HStack>
                        )}
                        <HStack space={1} justifyContent={'space-between'} alignItems="center">
                            <Text color="#111111" fontSize="sm">{t("Country")}:</Text>
                            <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.country}</Text>
                        </HStack>
                        <HStack space={1} justifyContent={'space-between'} alignItems="center">
                            <Text color="#111111" fontSize="sm">{t("State")}:</Text>
                            <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.state}</Text>
                        </HStack>
                        <HStack space={1} justifyContent={'space-between'} alignItems="center">
                            <Text color="#111111" fontSize="sm">{t("City")}:</Text>
                            <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.city}</Text>
                        </HStack>
                        <HStack space={1} justifyContent={'space-between'} alignItems="center">
                            <Text color="#111111" fontSize="sm">{t("Pincode")}:</Text>
                            <Text color="#111111" fontSize="sm" fontWeight="bold">{myAddress.post_code}</Text>
                        </HStack>
                    </VStack>
                    )}
                    {myAddress != "" ?
                        <Button onPress={() => openEdit()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Edit Shipping Address")}</Text>
                        </Button>
                        :
                        <Button onPress={() => openAdd()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Add Shipping Address")}</Text>
                        </Button>
                    }
                </VStack>
            </VStack>
            {controls != "" && (
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    {tdsBlock.is_tds_block == 1 && (
                    <HStack justifyContent={'space-evenly'} alignItems={'center'} borderColor={orgDetails.color} borderWidth={8} backgroundColor={lightColor} borderRadius={40} overflow={'hidden'} padding={1} marginBottom={4}>
                        <VStack alignItems={'center'}>
                            <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Order Value Points")}:</Text>
                            <Text color="#111111" fontSize="md" fontWeight="bold">{balance.total_point_spent_amount}</Text>
                        </VStack>
                        <VStack alignItems={'center'}>
                            <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Total TDS Point")}:</Text>
                            <Text color="#111111" fontSize="md" fontWeight="bold">{balance.total_tds_point}</Text>
                        </VStack>
                        <VStack alignItems={'center'}>
                            <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Grossup Value")}:</Text>
                            <Text color="#111111" fontSize="md" fontWeight="bold">{balance.grossup_value}</Text>
                        </VStack>
                    </HStack>
                    )}
                    <HStack justifyContent="space-between" alignContent="center">
                        <VStack>
                            <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Grand Total")}:</Text>
                            <HStack space={1} alignItems="center">
                                <Text color="#111111" fontSize="xl" fontWeight="bold">{controls.grandtotal_in_point}</Text>
                                <Text color="#111111" fontSize="sm" fontWeight="bold">{t("Points")}</Text>
                            </HStack>
                        </VStack>
                        <Button onPress={() => onPlaceOrder()} width={160} backgroundColor={orgDetails.color} borderRadius={30}>
                            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Checkout")}</Text>
                        </Button>
                    </HStack>
                </VStack>
            )}
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
            {successOrder && (
                <View style={styles.spincontainer}>
                    <LinearGradient
                        colors={["#f0f2e5", "#ffffff"]}
                        start={{ x: 0.5, y: 0 }}
                        style={{ width: 300, borderRadius: 15, overflow: 'hidden' }}
                    >
                        <VStack space={1} w="100%" paddingX="10" paddingY="10" alignItems="center" justifyContent="center">
                            <Icon name="checkmark-done-circle-outline" size={100} color="#111111"></Icon>
                            <Text mt={8} fontSize="xl" fontWeight="bold" color="#111111">{t("Thank You")}</Text>
                            <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{tdsmsg}</Text>
                            <Button size="sm" style={{ backgroundColor: '#111111', width: 100, borderRadius: 10, overflow: 'hidden' }} onPress={() => onContinue()} marginY={4}>
                                <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Continue")}</Text>
                            </Button>
                        </VStack>
                    </LinearGradient>
                </View>
            )}
            {announcementPop && (
                <View style={styles.spincontainer}>
                    <LinearGradient
                        colors={["#f0f2e5", "#ffffff"]}
                        start={{ x: 0.5, y: 0 }}
                        style={{ width: 300, borderRadius: 15, overflow: 'hidden' }}
                    >
                        {announcementPop1 && (
                            <VStack space={1} w="100%" paddingX="5" paddingY="10" alignItems="center" justifyContent="center">
                                <Text mt={8} mb={5} fontSize="2xl" fontWeight="bold" color="#111111">{t("Annoumcement")}</Text>
                                <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{contractorMessage}</Text>
                                <Button size="sm" style={{ backgroundColor: '#111111', width: 100, borderRadius: 10, overflow: 'hidden' }} onPress={() => announcedYes()} marginY={4}>
                                    <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Yes")}</Text>
                                </Button>
                            </VStack>
                        )}
                        {announcementPop2 && (
                            <VStack space={1} w="100%" paddingX="5" paddingY="10" alignItems="center" justifyContent="center">
                                <Icon name="document-attach-outline" size={100} color="#111111"></Icon>
                                <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{t("Do you want to upload PAN")}?</Text>
                                <HStack space={3}>
                                    <Button size="sm" style={{ backgroundColor: '#111111', width: 100, borderRadius: 10, overflow: 'hidden' }} onPress={() => onYes()} marginY={4}>
                                        <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Yes")}</Text>
                                    </Button>
                                    <Button size="sm" style={{ backgroundColor: '#111111', width: 100, borderRadius: 10, overflow: 'hidden' }} onPress={() => onNo()} marginY={4}>
                                        <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("NO")}</Text>
                                    </Button>
                                </HStack>
                            </VStack>
                        )}
                        {announcementPop3 && (
                            <VStack space={1} w="100%" paddingX="5" paddingY="10" alignItems="center" justifyContent="center">
                                <Icon name="document-attach-outline" size={100} color="#111111"></Icon>
                                <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>{t("Do you want to upload PAN. Yes/No")}</Text>
                                <HStack space={3} marginTop={3} paddingX={5} alignItems="center">
                                    <CheckBox value={check} onValueChange={() => setCheck(!check)} tintColors={{ true: successColor }} />
                                    <Text width="85%" fontSize="xs" color={darkColor}>{t("I declare I don’t have PAN")}</Text>
                                </HStack>
                                <Button size="sm" style={{ backgroundColor: '#111111', width: 100, borderRadius: 10, overflow: 'hidden' }} onPress={() => onOK()} marginY={4}>
                                    <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Ok")}</Text>
                                </Button>
                            </VStack>
                        )}
                    </LinearGradient>
                </View>
            )}
            {showAdd && (
                <View style={styles.spincontainer}>
                    <LinearGradient
                        colors={["#f0f2e5", "#ffffff"]}
                        style={{ borderRadius: 30, overflow: 'hidden', width: '80%' }}
                    >
                        <ScrollView>
                            <VStack padding={5}>
                                <Stack borderColor="#bbbbbb" borderBottomWidth={1} mb="4" pb="3"><Text color={darkColor} fontSize="16" fontWeight="bold" textAlign="center">{t("Add Address")}</Text></Stack>
                                <Stack space={3}>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={address1} onChangeText={(text) => setAddress1(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 1") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={address2} onChangeText={(text) => setAddress2(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 2") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Select State") + " *"}
                                            InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={state}
                                            onValueChange={value => onSelectState(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            {stateList.map((item, index) =>
                                                <Select.Item key={index} label={item.name} value={item.id} />
                                            )}
                                        </Select>
                                    </View>
                                    {state != "" && (
                                        <View style={MainStyle.inputbox}>
                                            <Select variant="unstyled" size="md" placeholder={t("Select District") + " *"}
                                                InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                                selectedValue={district}
                                                onValueChange={value => setDistrict(value)}
                                                _selectedItem={{
                                                    backgroundColor: '#eeeeee',
                                                    endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                                }}>
                                                {districtList.map((item, index) =>
                                                    <Select.Item key={index} label={item.name} value={item.id} />
                                                )}
                                            </Select>
                                        </View>
                                    )}
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={pinCode} keyboardType='number-pad' maxLength={6} onChangeText={(text) => setPinCode(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Pincode") + " *"} />
                                    </View>
                                </Stack>
                                {submitType == "Add" ?
                                    <Button size="sm" style={{ backgroundColor: successColor, marginTop: 30, borderRadius: 30, overflow: 'hidden', height: 45 }} onPress={() => onSave()}>
                                        <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Save")}</Text>
                                    </Button>
                                    :
                                    <Button size="sm" style={{ backgroundColor: successColor, marginTop: 30, borderRadius: 30, overflow: 'hidden', height: 45 }} onPress={() => onEdit()}>
                                        <Text color="#ffffff" fontSize="sm" fontWeight="medium">{t("Edit Save")}</Text>
                                    </Button>
                                }
                            </VStack>
                        </ScrollView>
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
                        onPress={() => closeAdd()}
                    >
                        <Text color={lightColor} fontSize="sm">{t('Cancel')}</Text>
                    </TouchableOpacity>
                </View>
            )}
            {loading && (
                <View style={styles.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={darkColor} />
                </View>
            )}
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    bgimage: { flex: 1, justifyContent: 'center' },
    solidBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: '#111111', borderRadius: 10, overflow: 'hidden' },
    productbox: { borderRadius: 15, width: '96%', margin: '2%', backgroundColor: '#f6f6f6', padding: 15, borderColor: '#ffffff', borderWidth: 2, elevation: 10, shadowColor: '#666666', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.4, shadowRadius: 10, overflow: 'hidden' },
    productimage: { borderColor: '#dddddd', backgroundColor: '#ffffff', borderWidth: 1, borderRadius: 10, width: '38%', height: 90, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    productdetails: { width: '58%' },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default CartScreen;
