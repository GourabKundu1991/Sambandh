import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actionsheet, Box, Button, Checkbox, HStack, Input, NativeBaseProvider, Pressable, Radio, Select, Stack, Text, Toast, useDisclose, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, StatusBar, View, ScrollView, Keyboard, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID } from '../auth_provider/Config';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { darkColor, fontBold, lightColor, MainStyle, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import MultiSelect from 'react-native-multiple-select';

const RegisterInfluencerScreen = ({ navigation }) => {

    const { t } = useTranslation();

    const [loading, setLoading] = React.useState(false);
    const { isOpen, onOpen, onClose } = useDisclose();

    const [orgDetails, setOrgDetails] = React.useState('');

    const [contactGeo, setContactGeo] = React.useState("");
    const [districtList, setDistrictList] = React.useState([]);
    const [subDistrictList, setsubDistrictList] = React.useState([]);
    const [categoryList, setCategoryList] = React.useState([]);

    const [firstName, setFirstName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [dob, setDOB] = React.useState("");
    const [maritalStatus, setMaritalStatus] = React.useState("");
    const [anniversary, setAnniversary] = React.useState("");
    const [profileImage, setProfileImage] = React.useState("");

    const [address1, setAddress1] = React.useState("");
    const [address2, setAddress2] = React.useState("");
    const [landMark, setLandMark] = React.useState("");
    const [ao, setAo] = React.useState("");
    const [region, setRegion] = React.useState("");
    const [rmo, setRmo] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [subdistrict, setSubDistrict] = React.useState("");
    const [city, setCity] = React.useState("");
    const [pinCode, setPinCode] = React.useState("");

    const [category, setCategory] = React.useState("");
    const [monthlyLifting, setMonthlyLifting] = React.useState("");

    const [aadhaarCard, setAadhaarCard] = React.useState("");
    const [aadhaarFrontImage, setAadhaarFrontImage] = React.useState("");
    const [aadhaarBackImage, setAadhaarBackImage] = React.useState("");
    const [panCard, setPanCard] = React.useState("");
    const [panImage, setPanImage] = React.useState("");


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isAnniversaryDatePickerVisible, setAnniversaryDatePickerVisibility] = useState(false);
    const [dateType, setDateType] = React.useState("");

    const showDatePicker = (val) => {
        setDateType(val);
        if (val == "dob") {
            setDatePickerVisibility(true);
        } else {
            setAnniversaryDatePickerVisibility(true);
        }
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        if (dateType == "dob") {
            setDOB(date);
        } else {
            setAnniversary(date);
        }
    };

    const [isStateOpen, setIsStateOpen] = React.useState(false);
    const [statePicker, setStatePicker] = React.useState("");

    const onStateOpen = (val) => {
        setIsStateOpen(true);
        setStatePicker(val);
    }
    const onStateClose = () => {
        setIsStateOpen(false);
    }

    const onSelectState = (details) => {
        onStateClose();
        if (statePicker == "primary") {
            setDistrict("");
            setState(details);
            setDistrictList(details.district_list);
        } else {
            setDistrictPer("");
            setStatePer(details);
            setDistrictListPer(details.district_list);
        }
    }

    const [searchDealer, setSearchDealer] = React.useState("");
    const [searchAltDealer, setSearchAltDealer] = React.useState("");
    const [isDealerOpen, setIsDealerOpen] = React.useState(false);
    const [dealerTypr, setDealerType] = React.useState("");

    const [dealer, setDealer] = React.useState("");
    const [dealerList, setDealerList] = React.useState([]);
    const [counter, setCounter] = React.useState([]);
    const [counterList, setCounterList] = React.useState([]);

    const onDealerOpen = (valType, val, valId, exception) => {
        setDealerType(val);
        getDealerList(valType, valId, exception);
    }
    const onDealerClose = () => {
        setIsDealerOpen(false);
    }

    const onDealerCancel = (type) => {
        setSearchDealer("");
        setSearchAltDealer("");
        if (type == "primary") {
            setPrimaryDealer("");
            setSecondDealer("");
            setThirdDealer("");
        } else if (type == "second") {
            setSecondDealer("");
            setThirdDealer("");
        } else if (type == "thrid") {
            setThirdDealer("");
        } else if (type == "alt_primary") {
            setAltPrimaryDealer("");
            setAltSecondDealer("");
            setAltThirdDealer("");
        } else if (type == "alt_second") {
            setAltSecondDealer("");
            setAltThirdDealer("");
        } else if (type == "alt_thrid") {
            setAltThirdDealer("");
        }
    }

    const [isPicker, setIsPicker] = React.useState(false);
    const [imageType, setImageType] = React.useState("");

    const onPickerOpen = (val) => {
        onOpen();
        setImageType(val);
    }

    const openProfilePicker = (type) => {
        onClose();
        if (type == "library") {
            launchImageLibrary(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 1500,
                    maxWidth: 1500,
                },
                (response) => {
                    //console.log(response);
                    if (response.assets != undefined) {
                        if (imageType == "AadhaarFrontImage") {
                            setAadhaarFrontImage(response.assets[0].base64);
                        } else if (imageType == "AadhaarBackImage") {
                            setAadhaarBackImage(response.assets[0].base64);
                        } else if (imageType == "PanImage") {
                            setPanImage(response.assets[0].base64);
                        } else if (imageType == "ProfileImage") {
                            setProfileImage(response.assets[0].base64);
                        }
                    }
                },
            )
        } else if (type == "camera") {
            launchCamera(
                {
                    mediaType: 'photo',
                    includeBase64: true,
                    maxHeight: 1500,
                    maxWidth: 1500,
                },
                (response) => {
                    //console.log(response.assets);
                    if (response.assets != undefined) {
                        if (imageType == "AadhaarFrontImage") {
                            setAadhaarFrontImage(response.assets[0].base64);
                        } else if (imageType == "AadhaarBackImage") {
                            setAadhaarBackImage(response.assets[0].base64);
                        } else if (imageType == "PanImage") {
                            setPanImage(response.assets[0].base64);
                        } else if (imageType == "ProfileImage") {
                            setProfileImage(response.assets[0].base64);
                        }
                    }
                },
            )
        }
    }

    const [registrationType, setRegistrationType] = React.useState("");



    useEffect(() => {
        AsyncStorage.getItem('loginType').then(valColor => {
            if (valColor != null) {
                setOrgDetails(JSON.parse(valColor));
            }
        });
        setLoading(true);
        getAllData(district, dealer);
    }, [])

    const getAllData = (distId, delId) => {
        AsyncStorage.getItem('userToken').then(val => {
            console.log(val);
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("district", distId);
                formdata.append("dealer_id", delId);
                console.log(formdata);
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
                            setContactGeo(responseJson.contact_geo);
                            setCategoryList(responseJson.contractors_category);
                            setDistrictList(responseJson.district);
                            setDealerList(responseJson.dealer_list);
                            setCounterList(responseJson.secondary_dealer_list);
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

    const onSelectDistrict = (valDist) => {
        setDistrict(valDist);
        getAllData(valDist, dealer);
        setSubDistrict("");
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).org_id);
                formdata.append("districtId", valDist);
                fetch(`${BASE_URL}/get_sub_district`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_sub_district:", responseJson);
                        if (responseJson.status == 'success') {
                            setLoading(false);
                            setsubDistrictList(responseJson.sub_district);
                        } else {
                            setsubDistrictList([]);
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
                        //console.log("state_district_wise_pincode_list Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            }
        })
    }

    const onSelectDealer = (value) => {
        setCounter("");
        setDealer(value);
        getAllData(district, value)
    }

    const onCheckSubmit = () => {
        Keyboard.dismiss();
        if (firstName.trim() == "") {
            Toast.show({ description: t("Please enter First Name") });
        } else if (lastName.trim() == "") {
            Toast.show({ description: t("Please enter Last Name") });
        } else if (mobile.trim() == "") {
            Toast.show({ description: t("Please enter Monile Number") });
        } else if (gender == "") {
            Toast.show({ description: t("Please select Gender") });
        } else if (dob == "") {
            Toast.show({ description: t("Please select Date of Birth") });
        } else if (maritalStatus == "") {
            Toast.show({ description: t("Please select Marital Status") });
        } else if (maritalStatus == "Married" && anniversary == "") {
            Toast.show({ description: t("Please enter Date of Anniversary") });
        } else if (profileImage == "") {
            Toast.show({ description: t("Please attach Profile Image") });
        } else if (address1.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 1") });
        } else if (address2.trim() == "") {
            Toast.show({ description: t("Please enter Address Line 2") });
        } else if (district == "") {
            Toast.show({ description: t("Please select District") });
        } else if (subdistrict == "") {
            Toast.show({ description: t("Please select Sub District") });
        } else if (city.trim() == "") {
            Toast.show({ description: t("Please enter City") });
        } else if (pinCode.trim() == "") {
            Toast.show({ description: t("Please enter Pincode") });
        } else if (category == "") {
            Toast.show({ description: t("Please select Category") });
        } else if (monthlyLifting.trim() == "") {
            Toast.show({ description: t("Please enter Monthly Consumption") });
        } else if (aadhaarCard.trim() == "") {
            Toast.show({ description: t("Please enter Aadhaar Card Number") });
        } else if (aadhaarFrontImage == "") {
            Toast.show({ description: t("Please attach Aadhaar Front Image") });
        } else if (aadhaarBackImage == "") {
            Toast.show({ description: t("Please attach Aadhaar Back Image") });
        } else if (panCard.trim() != "" && panImage == "") {
            Toast.show({ description: t("Please Attach Pan Image") });
        } else {
            onSubmit();
            setLoading(true);
        }
    }

    const onSubmit = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("first_name", firstName);
                formdata.append("middle_name", middleName);
                formdata.append("last_name", lastName);
                formdata.append("gender", gender);
                formdata.append("mobile", mobile);
                formdata.append("dob", moment(dob).format("YYYY-MM-DD"));
                formdata.append("marital_status", maritalStatus);
                formdata.append("wedding_anniversary", (anniversary != "" ? moment(anniversary).format("YYYY-MM-DD") : ""));
                formdata.append("profileImage", profileImage);
                formdata.append("address_line1", address1);
                formdata.append("address_line2", address2);
                formdata.append("addLine3", landMark);
                formdata.append("district_id", district);
                formdata.append("sub_district_id", subdistrict);
                formdata.append("city", city);
                formdata.append("post_code", pinCode);

                formdata.append("category", category);
                formdata.append("primary_dealer_id", dealer);
                formdata.append("dealer_id", counter);
                formdata.append("avgMonthlyLifting", monthlyLifting);

                formdata.append("aadhar_card_number", aadhaarCard);
                formdata.append("aadhaarImage", aadhaarFrontImage);
                formdata.append("aadharImgBack", aadhaarBackImage);
                formdata.append("pan_card_number", panCard);
                formdata.append("panImage", panImage);
                console.log(formdata);
                fetch(`${BASE_URL}/registration`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Registration:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Toast.show({ description: responseJson.message });
                            setTimeout(function () {
                                setLoading(false);
                                navigation.goBack();
                            }, 1000);
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
                        console.log("Registration Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Login');
            }
        });
        /*  } */
    }


    const dobdate = new Date();
    const year = dobdate.getFullYear();
    const month = dobdate.getMonth();
    const day = dobdate.getDate();

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Register Influencer")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={6}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5}>
                                <Stack borderColor="#bbbbbb" borderBottomWidth={1} mb="4" pb="3"><Text color={darkColor} fontSize="16" fontWeight="bold" textAlign="center">{t("Personal Details")}</Text></Stack>
                                <Stack space={3}>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setFirstName(text)} variant="unstyled" InputLeftElement={<Icon name="person-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("First Name") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setMiddleName(text)} variant="unstyled" InputLeftElement={<Icon name="person-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Middle Name")} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setLastName(text)} variant="unstyled" InputLeftElement={<Icon name="person-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Last Name") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setMobile(text)} keyboardType='number-pad' maxLength={10} variant="unstyled" InputLeftElement={<Icon name="phone-portrait-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Contact Number") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Select size="md" placeholder={t("Select Gender") + " *"}
                                            InputLeftElement={<Icon name="male-female-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={gender}
                                            onValueChange={value => setGender(value)}
                                            variant='unstyled'
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            <Select.Item label="Male" value="m" />
                                            <Select.Item label="Female" value="f" />
                                        </Select>
                                    </View>
                                    <Pressable style={MainStyle.inputbox} onPress={() => showDatePicker("dob")}>
                                        <HStack paddingY={Platform.OS == "ios" ? "1.5" : "2.5"}>
                                            <Icon name="calendar-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, marginRight: 10, textAlign: 'center' }} />
                                            <Text color={dob != "" ? "#111111" : "#999999"} fontSize="sm">{dob != "" ? moment(dob).format("DD MMMM, YYYY") : t("Date of Birth") + " *"}</Text>
                                        </HStack>
                                    </Pressable>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Marital Status *")}
                                            InputLeftElement={<Icon name="male-female-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={maritalStatus}
                                            onValueChange={value => setMaritalStatus(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            <Select.Item label="Married" value="Married" />
                                            <Select.Item label="Single" value="Single" />
                                        </Select>
                                    </View>
                                    {maritalStatus == "Married" && (
                                        <Pressable style={MainStyle.inputbox} onPress={() => showDatePicker("anniversary")}>
                                            <HStack paddingY={Platform.OS == "ios" ? "1.5" : "2.5"}>
                                                <Icon name="calendar-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, marginRight: 10, textAlign: 'center' }} />
                                                <Text color={anniversary != "" ? "#111111" : "#999999"} fontSize="sm">{anniversary != "" ? moment(anniversary).format("DD MMMM, YYYY") : t("Date of Anniversary")}</Text>
                                            </HStack>
                                        </Pressable>
                                    )}
                                    <HStack alignItems="center" mt="2" space={0}>
                                        <Icon name="attach-outline" size={22} color="#666666" />
                                        <Text color="#666666" fontSize="md" textTransform="capitalize">{t("Profile Image")} *</Text>
                                    </HStack>
                                    <View style={MainStyle.inputbox}>
                                        <Image source={profileImage != "" ? { uri: 'data:image/jpeg;base64,' + profileImage } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 160 }} />
                                        <Pressable onPress={() => onPickerOpen("ProfileImage")} bg={warningColor} position="absolute" bottom="3" right="3" width="50" height="50" justifyContent="center" alignItems="center" borderRadius="30" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Pressable>
                                    </View>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5}>
                                <Stack borderColor="#bbbbbb" borderBottomWidth={1} mb="4" pb="3"><Text color={darkColor} fontSize="16" fontWeight="bold" textAlign="center">{t("Business Details")}</Text></Stack>
                                <Stack space={3}>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setAddress1(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 1") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setAddress2(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Address Line 2") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={contactGeo.region} readOnly variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Reghion")} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={contactGeo.rmo} readOnly variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("RMO")} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" value={contactGeo.ao} readOnly variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("AO")} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Select District") + " *"}
                                            InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={district}
                                            onValueChange={value => onSelectDistrict(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            {districtList.map((item, index) =>
                                                <Select.Item key={index} label={item.name} value={item.id} />
                                            )}
                                        </Select>
                                    </View>
                                    {district != "" && (
                                        <View style={MainStyle.inputbox}>
                                            <Select variant="unstyled" size="md" placeholder={t("Select District") + " *"}
                                                InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                                selectedValue={subdistrict}
                                                onValueChange={value => setSubDistrict(value)}
                                                _selectedItem={{
                                                    backgroundColor: '#eeeeee',
                                                    endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                                }}>
                                                {subDistrictList.map((item, index) =>
                                                    <Select.Item key={index} label={item.name} value={item.id} />
                                                )}
                                            </Select>
                                        </View>
                                    )}
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setCity(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("City") + " *"} />
                                    </View>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" keyboardType='number-pad' maxLength={6} onChangeText={(text) => setPinCode(text)} variant="unstyled" InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Pincode") + " *"} />
                                    </View>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5}>
                                <Stack borderColor="#bbbbbb" borderBottomWidth={1} mb="4" pb="3"><Text color={darkColor} fontSize="16" fontWeight="bold" textAlign="center">{t("Dealer Details")}</Text></Stack>
                                <Stack space={3}>
                                    <View style={MainStyle.inputbox}>
                                        <Select variant="unstyled" size="md" placeholder={t("Select Category") + " *"}
                                            InputLeftElement={<Icon name="options-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                            selectedValue={category}
                                            onValueChange={value => setCategory(value)}
                                            _selectedItem={{
                                                backgroundColor: '#eeeeee',
                                                endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                            }}>
                                            {categoryList.map((item, index) =>
                                                <Select.Item key={index} label={item.name} value={item.id} />
                                            )}
                                        </Select>
                                    </View>
                                    {dealerList != "" && (
                                        <View style={MainStyle.inputbox}>
                                            <Select variant="unstyled" size="md" placeholder={t("Select District") + " *"}
                                                InputLeftElement={<Icon name="location-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />}
                                                selectedValue={dealer}
                                                onValueChange={value => onSelectDealer(value)}
                                                _selectedItem={{
                                                    backgroundColor: '#eeeeee',
                                                    endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                                }}>
                                                {dealerList.map((item, index) =>
                                                    <Select.Item key={index} label={item.name_with_external} value={item.contact_id} />
                                                )}
                                            </Select>
                                        </View>
                                    )}
                                    {counterList != "" && (
                                        <View style={MainStyle.inputbox}>
                                            <MultiSelect
                                                hideTags
                                                items={counterList}
                                                uniqueKey="contact_id"
                                                onSelectedItemsChange={(text) => setCounter(text)}
                                                selectedItems={counter}
                                                selectText="Select Counter"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor={successColor}
                                                selectedItemIconColor={successColor}
                                                itemTextColor="#000000"
                                                displayKey="company_name"
                                                searchInputStyle={{ color: '#CCC' }}
                                                submitButtonColor={orgDetails.color}
                                                submitButtonText="Done"
                                                styleDropdownMenuSubsection={{ height: 50, top: 5, paddingLeft: 15, borderWidth: 1, borderColor: "#dddddd", borderRadius: 30 }}
                                                styleListContainer={{ maxHeight: 250, overflow: 'scroll' }}
                                            />
                                        </View>
                                    )}
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" keyboardType='number-pad' onChangeText={(text) => setMonthlyLifting(text)} variant="unstyled" InputLeftElement={<Icon name="cash-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Monthly Comsumption (in Bags)") + " *"} />
                                    </View>
                                </Stack>
                            </VStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5}>
                                <Stack borderColor="#bbbbbb" borderBottomWidth={1} mb="4" pb="3"><Text color={darkColor} fontSize="16" fontWeight="bold" textAlign="center">{t("KYC Details")}</Text></Stack>
                                <Stack space={3}>
                                    <View style={MainStyle.inputbox}>
                                        <Input size="md" onChangeText={(text) => setAadhaarCard(text)} keyboardType='number-pad' maxLength={12} variant="unstyled" InputLeftElement={<Icon name="card-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Aadhaar Card No.") + " *"} />
                                    </View>
                                    <HStack alignItems="center" mt="3" space={0}>
                                        <Icon name="attach-outline" size={22} color="#666666" />
                                        <Text color="#666666" fontSize="md" textTransform="capitalize">{t("Attach Aadhaar Front Image")} *</Text>
                                    </HStack>
                                    <View style={MainStyle.inputbox}>
                                        <Image source={aadhaarFrontImage != "" ? { uri: 'data:image/jpeg;base64,' + aadhaarFrontImage } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 160 }} />
                                        <Pressable onPress={() => onPickerOpen("AadhaarFrontImage")} bg={warningColor} position="absolute" bottom="3" right="3" width="50" height="50" justifyContent="center" alignItems="center" borderRadius="30" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Pressable>
                                    </View>
                                    <HStack alignItems="center" mt="3" space={0}>
                                        <Icon name="attach-outline" size={22} color="#666666" />
                                        <Text color="#666666" fontSize="md" textTransform="capitalize">{t("Attach Aadhaar Back Image")} *</Text>
                                    </HStack>
                                    <View style={MainStyle.inputbox}>
                                        <Image source={aadhaarBackImage != "" ? { uri: 'data:image/jpeg;base64,' + aadhaarBackImage } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 160 }} />
                                        <Pressable onPress={() => onPickerOpen("AadhaarBackImage")} bg={warningColor} position="absolute" bottom="3" right="3" width="50" height="50" justifyContent="center" alignItems="center" borderRadius="30" overflow="hidden">
                                            <Icon name="camera" size={26} color="#ffffff" />
                                        </Pressable>
                                    </View>
                                    <View style={[MainStyle.inputbox, { marginTop: 15 }]}>
                                        <Input size="md" onChangeText={(text) => setPanCard(text)} variant="unstyled" maxLength={10} InputLeftElement={<Icon name="card-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Pan Card No.")} />
                                    </View>
                                    {panCard != "" && (
                                        <View>
                                            <HStack alignItems="center" mt="3" mb="3" space={0}>
                                                <Icon name="attach-outline" size={22} color="#666666" />
                                                <Text color="#666666" fontSize="md" textTransform="capitalize">{t("Attach Pan Image")} *</Text>
                                            </HStack>
                                            <View style={MainStyle.inputbox}>
                                                <Image source={panImage != "" ? { uri: 'data:image/jpeg;base64,' + panImage } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 160 }} />
                                                <Pressable onPress={() => onPickerOpen("PanImage")} bg={warningColor} position="absolute" bottom="3" right="3" width="50" height="50" justifyContent="center" alignItems="center" borderRadius="30" overflow="hidden">
                                                    <Icon name="camera" size={26} color="#ffffff" />
                                                </Pressable>
                                            </View>
                                        </View>
                                    )}
                                </Stack>
                            </VStack>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <Button onPress={() => onCheckSubmit()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                        <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Submit")}</Text>
                    </Button>
                </VStack>
            </VStack >
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Text color="#666666" fontSize="md" textAlign="center">{t("Select Image Source")}</Text>
                    <Actionsheet.Item onPress={() => openProfilePicker("library")}>{t("Load from Library")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("camera")}>{t("Use Camera")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("cancel")}>{t("Cancel")}</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date(moment().subtract(100, "years"))}
                maximumDate={new Date(moment().subtract(18, "years"))}
            />
            <DateTimePickerModal
                isVisible={isAnniversaryDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider >
    )
}

const styles = StyleSheet.create({});

export default RegisterInfluencerScreen;
