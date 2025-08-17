import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Badge, Divider, Select, CheckIcon, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, hashKey, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, baseColorB, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor, baseDarkColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FooterComponents from '../components/Footer';
import RenderHTML from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';



const ApproveInfluencerScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [influencers, setInfluencers] = React.useState([]);

    const [searchTerm, setSearchTerm] = React.useState("");

    const [orgDetails, setOrgDetails] = React.useState('');

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [loadMoreShow, setLoadMoreShow] = React.useState(0);

    const [reasonPopup, setReasonPopup] = React.useState(false);
    const [comment, setComment] = React.useState('');
    const [selectedInfluId, setInfluId] = React.useState('');


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

    const getAllData = (status) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("searchText", searchTerm);
                formdata.append("pageNumber", "1");
                fetch(`${BASE_URL}/influncer_approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("influncer_approval:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setInfluencers(responseJson.influncers);
                            setTotalPages(responseJson.total_pages || 1);
                            setPageNumber(1);
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

    const onSearch = () => {
        setLoading(true);
        getAllData();
    }

    const loadMore = async () => {
        const nextPage = pageNumber + 1;
        setLoading(true);

        AsyncStorage.getItem('userToken').then(val => {
            if (val) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("searchText", searchTerm);
                formdata.append("pageNumber", nextPage);
                fetch(`${BASE_URL}/influncer_approval`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("influncer_approval Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setInfluencers(prev => [...prev, ...(responseJson.influncers || [])]);
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

    const onApprove = (influID) => {
        Alert.alert(
            t("Warning"),
            t("Are you sure want to Approve this Influncer") + "?",
            [
                {
                    text: t("Cancel"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Yes"), onPress: () => {
                        setLoading(true);
                        AsyncStorage.getItem('userToken').then(val => {
                            if (val != null) {
                                let formdata = new FormData();
                                formdata.append("token", JSON.parse(val).token);
                                formdata.append("APIkey", `${API_KEY}`);
                                formdata.append("orgId", JSON.parse(val).orgId);
                                formdata.append("influncer_id", influID);
                                fetch(`${BASE_URL}/approve_influncer`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'multipart/form-data',
                                    },
                                    body: formdata
                                })
                                    .then((response) => response.json())
                                    .then((responseJson) => {
                                        console.log("approve_influncer:", responseJson);
                                        if (responseJson.bstatus == 1) {
                                            Toast.show({ description: responseJson.message });
                                            getAllData();
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
    }

    const onReject = (influID) => {
        setReasonPopup(true);
        setInfluId(influID);
    }

    const submitReject = () => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("influncer_id", selectedInfluId);
                formdata.append("reason", comment);
                console.log(formdata);
                fetch(`${BASE_URL}/reject_influncer`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("reject_influncer:", responseJson);
                        if (responseJson.bstatus == 1) {
                            Toast.show({ description: responseJson.message });
                            getAllData();
                            setReasonPopup(false);
                            setComment("");
                            setInfluId("");
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


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Approve Influencer")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={6}>
                        <View style={MainStyle.inputbox}>
                            <Input fontFamily={fontBold} size="md" variant="unstyled" placeholder={t('ID / Name / Phone')}
                                InputLeftElement={<Icon name="search" size={20} color="#000000" style={{ width: 25, marginLeft: 10 }} />} onChangeText={text => setSearchTerm(text)}
                                InputRightElement={<Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: 90 }]} onPress={() => onSearch()}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t('Search')}</Text>
                                </Button>} />
                        </View>
                        {influencers.length == 0 && (
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
                        {influencers.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', paddingLeft: 20, paddingRight: 20, paddingVertical: 20 }}
                            >
                                <VStack space={3}>
                                    <HStack justifyContent="space-between" backgroundColor={lightColor} paddingY={3} paddingX={5} borderRadius={30} overflow={'hidden'}>
                                        <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                            {t("Influencer ID")}
                                        </Text>
                                        <Text fontSize="sm" color={darkColor} fontWeight="bold">
                                            {item.id}
                                        </Text>
                                    </HStack>
                                    <HStack justifyContent={'space-between'} alignItems={'center'}>
                                        <VStack paddingX={3} width={'70%'}>
                                            <Text fontSize="md" color={darkColor} fontFamily={fontBold}>
                                                {item.name}
                                            </Text>
                                            <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                                {t("Category")}: {item.category}
                                            </Text>
                                            <Text fontSize="sm" color={darkGrey} fontFamily={fontBold}>
                                                {t("Date")}: {moment(item.enrollment_date).format("DD-MM-YYYY")}
                                            </Text>
                                            <Pressable style={{ marginTop: 10 }} onPress={() => Linking.openURL(`tel:${item.ph_number}`)}>
                                                <HStack alignItems={'center'} space={2}>
                                                    <View backgroundColor={orgDetails.color} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, overflow: 'hidden' }}><Icon name="call" size={14} color={orgDetails.name == "Zuari" ? darkColor : lightColor} /></View>
                                                    <Text fontFamily={fontBold} color={orgDetails.color}>{item.ph_number}</Text>
                                                </HStack>
                                            </Pressable>
                                        </VStack>
                                        <Button backgroundColor={orgDetails.color} size={'sm'} style={{ width: 90 }} borderRadius={30} overflow={'hidden'} onPress={() => navigation.navigate('InfluencerDetails', { influencerId: item.id })}>
                                            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="sm">{t('View')}</Text>
                                        </Button>
                                    </HStack>
                                    <HStack justifyContent={'space-evenly'} alignItems={'center'}>
                                        <Button backgroundColor={dangerColor} size={'sm'} style={{ width: '45%', marginTop: 15 }} borderRadius={30} overflow={'hidden'} onPress={() => onReject(item.id)}>
                                            <Text color={lightColor} fontFamily={fontBold} fontSize="sm">{t('Reject')}</Text>
                                        </Button>
                                        <Button backgroundColor={successColor} size={'sm'} style={{ width: '45%', marginTop: 15 }} borderRadius={30} overflow={'hidden'} onPress={() => onApprove(item.id)}>
                                            <Text color={lightColor} fontFamily={fontBold} fontSize="sm">{t('Approve')}</Text>
                                        </Button>
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
                                    {t("Enter Reason for Reject")}
                                </Text>
                                <View style={MainStyle.inputbox}>
                                    <Input multiline={true} textAlignVertical='top' height={100} size="md" variant="unstyled" placeholder={t('Enter Comments')} onChangeText={text => setComment(text)} />
                                </View>
                            </Stack>
                            <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => submitReject()}>
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
                        onPress={() => (setReasonPopup(false), setComment(""), setInfluId(""))}
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

const styles = StyleSheet.create({

});

export default ApproveInfluencerScreen;