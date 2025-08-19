import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Dimensions, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, baseColorB, baseColorC, baseDarkColor, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import i18n from '../assets/language/i18n';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import CheckBox from '@react-native-community/checkbox';

const HomeScreen = ({ navigation, route }) => {

    const BannerWidth = Dimensions.get('window').width;
    const BannerHeight = 220;

    const [orgDetails, setOrgDetails] = React.useState('');

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');
    const { width, height } = Dimensions.get('window');

    const [allBanners, setAllBanners] = React.useState([]);
    const [homeMenu, setHomeMenu] = React.useState([]);

    const [profileData, setProfileData] = React.useState("");
    const [points, setPoints] = React.useState("");

    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");
    const [customerCareNumber, setCustomerCareNumber] = React.useState("");

    const [totalMemberCounts, setTotalMemberCounts] = React.useState([]);

    const [termsPop, setTermsPop] = React.useState(false);

    const [agreedDoc, setAgreedDoc] = React.useState(false);
    const [termsCheck, setTermsCheck] = React.useState(false);

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
                    i18n.changeLanguage(val)
                        .then(() => console.log(val))
                        .catch(err => console.log(err));
                }
            });

            getAllData();
        });

        return unsubscribe;
    }, []);

    const getAllData = async () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);

                fetch(`${BASE_URL}/get_dashboard_info`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Dasboard:", responseJson);
                        if (responseJson.bstatus === 1) {
                            Events.publish('mainMenu', responseJson.menu);
                            setHomeMenu(responseJson.home_menu);
                            setAllBanners(responseJson.banners);
                            setTotalMemberCounts(responseJson.total_member_counts);
                            setUserType(responseJson.contactHier);
                            setCustomerCareNumber(responseJson.helpdesk_number);
                            if (responseJson.tnc_acceptance_pending == 1) {
                                setTermsPop(true);
                            }
                            //setLoading(false);
                            getProfileData();
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

    const getProfileData = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);

                fetch(`${BASE_URL}/profile`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Profile:", responseJson);
                        if (responseJson.bstatus === 1) {
                            Events.publish('profileData', responseJson);
                            setProfileData(responseJson.profile);
                            setPoints(responseJson.available_point);
                            setLoading(false);
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
    }

    const openDialer = () => {
        Linking.openURL(`tel:${customerCareNumber}`);
    }

    const onLogout = () => {
        Alert.alert(
            t("Alert"),
            t("Are you sure to logout") + "?",
            [
                {
                    text: t("Cancel"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Yes"), onPress: () => {
                        AsyncStorage.clear();
                        navigation.navigate('Intro');
                        setLanguage('Eng');
                    }
                }
            ],
            { cancelable: false }
        );
    }

    const renderBanner = ({ item, index }) => {
        return (
            <View key={index} style={{ width: '92%', borderRadius: 30, overflow: 'hidden', borderColor: lightColor, borderWidth: 3, marginBottom: 10, marginTop: 20 }}>
                <TouchableOpacity onPress={() => goBannerDetails(item)}>
                    <Image style={{ width: '100%', height: 150, resizeMode: 'cover' }} source={item.image ? { uri: item.image } : require('../assets/images/noimage.jpg')} />
                </TouchableOpacity>
            </View>
        );
    }

    const goMemberBase = (itemType, itemName) => {
        if (userType == "CSI" || userType == "CSH") {
            navigation.navigate("CsiCsoDetails", { baseType: itemType, pageName: itemName, user: userType });
        } else {
            navigation.navigate("MemberBase", { baseType: itemType, pageName: itemName, csoID: "" });
        }
    }

    const onVerify = () => {
        if (!agreedDoc) {
            Toast.show({ description: t("Please read and check Agreed for Document") });
        } else if (!termsCheck) {
            Toast.show({ description: t("Please check Terms and Privacy Policy") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("os_type", `${OS_TYPE}`);
                    formdata.append("acceptTnc", 1);
                    fetch(`${BASE_URL}/accept_terms_and_conditions`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("accept_terms_and_conditions:", responseJson);
                            if (responseJson.bstatus === 1) {
                                setTermsPop(false);
                                getAllData();
                            } else {
                                setLoading(false);
                                Toast.show({ description: responseJson.message });
                            }
                        })
                        .catch((error) => {
                            setLoading(false);
                            //console.log("Error:", error);
                            Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
                        });
                }
            });
        }
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <VStack backgroundColor={orgDetails.color} padding={15} borderBottomRadius={30}>
                    <HStack paddingX={4} borderRadius={30} backgroundColor={lightColor} alignItems="center" justifyContent={'space-between'} width={'100%'}>
                        <TouchableOpacity width={30} onPress={() => navigation.openDrawer(points)}>
                            <Icon name="menu" size={30} color={darkColor} />
                        </TouchableOpacity>
                        <Image source={{ uri: orgDetails.logo }} style={{ width: 150, height: 50 }} resizeMode="contain" />
                        <Pressable width={30} onPress={() => onLogout()} paddingY={2}>
                            <Icon name="power" size={26} color={darkColor} />
                        </Pressable>
                    </HStack>
                    <Box>
                        <Carousel
                            layout={"default"}
                            data={allBanners}
                            sliderWidth={BannerWidth}
                            itemWidth={BannerWidth}
                            autoplay={true}
                            loop={true}
                            renderItem={renderBanner} />
                    </Box>
                </VStack>
                <ScrollView>
                    {userType != "Influncer" && (
                        <VStack paddingTop={8} paddingBottom={5} paddingX={2}>
                            <ScrollView horizontal={true}>
                                {totalMemberCounts.map((item, index) => (
                                    <Pressable key={index} onPress={() => goMemberBase(item.type, item.name)}>
                                        <Box style={{ width: 150, height: 100, position: 'relative', borderWidth: 2, padding: 15, marginHorizontal: 8, borderColor: orgDetails.color, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20 }}>
                                            <View style={{ backgroundColor: orgDetails.color, borderRadius: 30, overflow: 'hidden', position: 'absolute', top: -20, width: 100, paddingVertical: 5, zIndex: 99 }}>
                                                <Text fontSize="md" fontFamily={fontBold} color={orgDetails.name == "Zuari" ? darkColor : lightColor} textAlign={'center'}>{item.count}</Text>
                                            </View>
                                            <Text fontSize="sm" fontFamily={fontBold} color={darkColor} textAlign={'center'}>{item.name}</Text>
                                        </Box>
                                    </Pressable>
                                ))}
                            </ScrollView>
                        </VStack>
                    )}
                    {userType == "Influncer" && (
                        <Stack alignItems={'center'} marginY={3}>
                            <Box style={{ borderColor: greyColor, borderWidth: 1, padding: 18, width: '85%', borderRadius: 50, marginTop: 40, position: 'relative' }}>
                                <Box alignSelf={'center'} style={{ backgroundColor: orgDetails.color, padding: 8, width: '85%', borderRadius: 50, marginTop: -38 }}>
                                    <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontSize="md" fontFamily={fontBold} textAlign={'center'}>{t("Available Points")}</Text>
                                </Box>
                                <Text color={darkColor} marginTop={3} fontSize="xl" fontWeight={'bold'} textAlign={'center'}>{points}
                                    <Text color={darkColor} fontSize="md" fontWeight={'normal'}>{t(" Points")}</Text>
                                </Text>
                            </Box>
                        </Stack>
                    )}
                    <VStack padding={5}>
                        <View style={{ position: 'relative' }}>
                            <View style={{ width: '100%', height: 2, backgroundColor: greyColor, position: 'absolute', top: 10 }} />
                            <Text style={{ textAlign: 'center', alignSelf: 'center', width: 130, backgroundColor: lightColor, paddingHorizontal: 10, marginHorizontal: 10, fontSize: 18, fontWeight: 'bold', color: darkColor }}>{t("Quick Links")}</Text>
                        </View>
                        <HStack flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} padding={5}>
                            {homeMenu.map((item, index) => (
                                <Pressable onPress={() => navigation.navigate(item.link)} key={index} style={{ position: 'relative', marginVertical: 5, borderRadius: 30, overflow: 'hidden', width: '45%', height: 200 }}>
                                    <LinearGradient
                                        start={{ x: 0, y: 0 }}
                                        colors={["#f0f2e5", "#ffffff"]}
                                        flex={1}
                                    >
                                        <VStack p={4} space={3} flex={1} justifyContent={'center'} alignItems={'center'}>
                                            <View style={{ borderColor: orgDetails.color, borderWidth: 1, borderRadius: 20, overflow: 'hidden', width: 80, height: 90, justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name={item.icon} size={40} color={orgDetails.color} />
                                            </View>
                                            <Text minHeight={50} fontSize="sm" fontFamily={fontSemiBold} color={darkColor} textAlign={'center'}>{item.title}</Text>
                                        </VStack>
                                    </LinearGradient>
                                </Pressable>
                            ))}
                        </HStack>
                    </VStack>
                </ScrollView>
            </VStack>
            <TouchableOpacity style={styles.floatingButton} onPress={openDialer}>
                <Icon name="call" size={28} color="#fff" />
            </TouchableOpacity>
            {termsPop && (
                <View style={MainStyle.spincontainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        colors={["#f0f2e5", "#f0f2e5", "#ffffff"]}
                        style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
                    >
                        <VStack space={6} padding={8} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                                {t("Consent form for Data Privacy")}
                            </Text>
                            <ScrollView height={450}>
                                <VStack width={250}>
                                    <VStack space={1}>
                                        {[
                                            { label: 'Name', value: profileData.name },
                                            { label: 'Mobile', value: profileData.mobile },
                                            { label: 'Address Line 1', value: profileData.address_line_1 },
                                            { label: 'Address Line 2', value: profileData.address_line_2 },
                                            { label: 'Region', value: profileData.region },
                                            { label: 'RMO', value: profileData.rmo },
                                            { label: 'AO', value: profileData.ao },
                                            { label: 'State', value: profileData.state },
                                            { label: 'District', value: profileData.district },
                                            { label: 'Sub District', value: profileData.sub_district },
                                            { label: 'Pin Code', value: profileData.pin },
                                        ].map((item, index) => (
                                            <Stack key={index}>
                                                {item.value && (
                                                    <HStack width={'100%'} justifyContent="space-between" alignItems="center">
                                                        <Text fontSize="xs" color={darkGrey} fontFamily={fontSemiBold}>{item.label}:</Text>
                                                        <Text fontSize="xs" fontFamily={fontBold} color={darkColor} textAlign="right">
                                                            {item.value}
                                                        </Text>
                                                    </HStack>
                                                )}
                                            </Stack>
                                        ))}
                                    </VStack>
                                    <VStack space={1} marginTop={5}>
                                        <View borderColor={darkGrey} style={{ borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 3, marginVertical: 3 }}>
                                            <Text fontSize="xs" textAlign={'center'} color={darkColor} fontFamily={fontBold}>{t("KYC Details")}:</Text>
                                        </View>
                                        <HStack width={'100%'} justifyContent="space-between" alignItems="center">
                                            <Text fontSize="xs" color={darkGrey} fontFamily={fontSemiBold}>{t("Type")}:</Text>
                                            <Text fontSize="xs" fontFamily={fontBold} color={darkColor} textAlign="right">Aadhaar</Text>
                                        </HStack>
                                        <HStack width={'100%'} justifyContent="space-between" alignItems="center">
                                            <Text fontSize="xs" color={darkGrey} fontFamily={fontSemiBold}>{t("Aadhaar Number")}:</Text>
                                            <Text fontSize="xs" fontFamily={fontBold} color={darkColor} textAlign="right">{profileData.aadhaar_number}</Text>
                                        </HStack>
                                    </VStack>
                                    <VStack space={1} marginTop={5}>
                                        <HStack space={3} marginTop={3} alignItems="center">
                                            <CheckBox value={agreedDoc} onValueChange={() => setAgreedDoc(!agreedDoc)} tintColors={{ true: successColor }} />
                                            <Text width="85%" fontSize="xs" color={darkColor}>{t("The information provided above are true to my knowledge and I hereby solemnly submit all the documents required. All details captured will be solely used for the purpose of Loyalty program only.")}</Text>
                                        </HStack>
                                        <HStack space={3} marginTop={3} alignItems="center">
                                            <CheckBox value={termsCheck} onValueChange={() => setTermsCheck(!termsCheck)} tintColors={{ true: successColor }} />
                                            <Text width="85%" fontSize="xs" color={darkColor}>{t("I have read and agreed to the terms of and privacy pollicy.")}</Text>
                                        </HStack>
                                    </VStack>
                                </VStack>
                            </ScrollView>
                            <HStack>
                                <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%', height: 40 }]} onPress={() => onVerify()}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t('Verify')}</Text>
                                </Button>
                            </HStack>
                        </VStack>
                    </LinearGradient>
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

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: dangerColor,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
    },
});

export default HomeScreen;