import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, StatusBar, Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, hashKey, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, baseColorC, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

const InfluencerDetailsScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { influencerId } = route.params;

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [profileData, setProfileData] = React.useState("");
    const [addressData, setAddressData] = React.useState("");
    const [workingAddressData, setWorkingAddressData] = React.useState("");

    const [profilePic, setProfilePic] = React.useState("");
    const { isOpen, onOpen, onClose } = useDisclose();

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const today = new Date();

    const [points, setPoints] = React.useState("");
    const [userId, setUserId] = React.useState("");

    const [zoomImage, setZoomImage] = React.useState(false);
    const [imagePath, setImagePath] = React.useState("");

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
                formdata.append("influncer_id", influencerId);
                fetch(`${BASE_URL}/influncer_details`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("my_influncer:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setProfileData(responseJson.deatils);
                            //setPoints(responseJson.available_point);
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

    const openImage = (path) => {
        console.log(path);
        setImagePath(path);
        setTimeout(function () {
            setZoomImage(true);
        }, 500);
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Influencer Details")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        <Box alignSelf={'center'} borderWidth={5} borderColor={orgDetails.color} borderRadius={100} overflow="hidden" size={130} backgroundColor="#ffffff" zIndex={9}>
                            <Avatar size="full"
                                source={
                                    profileData?.profile_image
                                        ? { uri: profileData.profile_image }
                                        : require('../assets/images/avatar.png')
                                }
                            />
                        </Box>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden', marginTop: -90 }}
                        >
                            <VStack padding={5} space={2}>
                                <HStack backgroundColor={orgDetails.color} borderRadius={30} overflow={'hidden'} py={3} paddingX={5} alignItems="center" justifyContent={'space-between'} marginTop={20} marginBottom={5}>
                                    <Text fontSize="md" fontWeight="bold" color={orgDetails.name == "Zuari" ? darkColor : lightColor}>
                                        {t("Influemcer ID")}
                                    </Text>
                                    <Text fontSize="md" fontWeight="bold" color={orgDetails.name == "Zuari" ? darkColor : lightColor}>
                                        {influencerId}
                                    </Text>
                                </HStack>
                                {[
                                    { label: 'Name', value: profileData.name },
                                    { label: 'Mobile', value: profileData.mobile },
                                    { label: 'Category', value: profileData.category },
                                    { label: 'DOB', value: profileData.dob },
                                    { label: 'Email', value: profileData.email },
                                    { label: 'Address Line 1', value: profileData.address_line_1 },
                                    { label: 'Address Line 2', value: profileData.address_line_2 },
                                    { label: 'Region', value: profileData.region },
                                    { label: 'RMO', value: profileData.rmo },
                                    { label: 'AO', value: profileData.ao },
                                    { label: 'State', value: profileData.state },
                                    { label: 'District', value: profileData.district },
                                    { label: 'Sub District', value: profileData.sub_district },
                                    { label: 'Pin Code', value: profileData.pin },
                                    { label: 'Maritial Status', value: profileData.maritialstatus },
                                    { label: 'Anniversary', value: profileData.anniversary },
                                    { label: 'Aadhar Number', value: profileData.aadhaar_number },
                                    { label: 'PAN Number', value: profileData.pan_number },
                                    { label: 'PAN status', value: profileData.pan_availability },
                                    { label: 'Aadhar Image Front', value: profileData.aadhaar_front, isImage: true },
                                    { label: 'Aadhar Image Back', value: profileData.aadhaar_back, isImage: true },
                                    { label: 'PAN Image', value: profileData.pan, isImage: true },
                                ].map((item, index) => (
                                    <Stack key={index}>
                                        {item.value && (
                                            <HStack justifyContent="space-between" alignItems="center">
                                                <Text fontSize="sm" color={darkGrey} fontFamily={fontSemiBold}>{item.label}:</Text>

                                                {item.isImage ? (
                                                    <Pressable onPress={() => openImage(item.value)}>
                                                        <Image
                                                            source={{ uri: item.value }}
                                                            style={{ width: 70, height: 70, borderRadius: 8, marginVertical: 10, backgroundColor: greyColor }}
                                                            resizeMode="contain"
                                                        />
                                                    </Pressable>
                                                ) : (
                                                    <Text fontSize="sm" fontFamily={fontBold} color={darkColor} textAlign="right">
                                                        {item.value}
                                                    </Text>
                                                )}
                                            </HStack>
                                        )}
                                    </Stack>
                                ))}
                            </VStack>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
            </VStack>
            {zoomImage && (
                <VStack flex={1} style={{ backgroundColor: "rgba(0,0,0,0.85)", zIndex: 99, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: imagePath }} style={{ width: '90%', height: 400, marginBottom: 20, resizeMode: 'contain' }} />
                    <TouchableOpacity onPress={() => setZoomImage(false)}>
                        <Icon name="close-circle-outline" size={32} color="#ffffff" />
                    </TouchableOpacity>
                </VStack>
            )}
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

export default InfluencerDetailsScreen;