import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Badge, Divider, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, Image, StatusBar, Dimensions, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
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

const PointStatementScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [orgDetails, setOrgDetails] = React.useState('');

    const [pointBalance, setPointBalance] = React.useState("");
    const [points, setPoints] = React.useState([]);
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");
    const [showStartPicker, setShowStartPicker] = React.useState(false);
    const [showEndPicker, setShowEndPicker] = React.useState(false);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [isLoadMore, setIsLoadMore] = React.useState(true);

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString();
    };

    const clearDates = () => {
        setStartDate("");
        setEndDate("");
        setLoading(true);
        getAllData("", "");
    };

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
            getAllData(startDate, endDate);
        });
        return unsubscribe;
    }, []);

    const getAllData = (dateStart, dateEnd) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("from_date", dateStart != "" ? moment(dateStart).format("YYYY-MM-DD") : "");
                formdata.append("to_date", dateEnd != "" ? moment(dateEnd).format("YYYY-MM-DD") : "");
                formdata.append("page", 1);
                console.log(formdata);
                fetch(`${BASE_URL}/pointstatements`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("pointstatements:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setPoints(responseJson.trnasc_list);
                            setPointBalance(responseJson.current_balance);
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

    const loadMore = () => {
        let num = pageNumber + 1;
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("from_date", startDate);
                formdata.append("to_date", endDate);
                formdata.append("page", num);
                fetch(`${BASE_URL}/pointstatements`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Point Statements:", responseJson);
                        if (responseJson.status == 'success') {
                            setLoading(false);
                            let newArrya = points.concat(responseJson.trnasc_list);
                            setPoints(newArrya);
                            setPageNumber(num);
                        } else {
                            setLoading(false);
                            setIsLoadMore(false);
                            setPageNumber(1);
                        }
                    })
                    .catch((error) => {
                        setLoading(false);
                        //console.log("Point Statements Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Login');
            }
        });
    };

    const onSearch = () => {
        setLoading(true);
        getAllData(startDate, endDate);
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Point Statement")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5}>
                        <VStack padding="4">
                            <View style={styles.dateRow}>
                                <TouchableOpacity style={styles.dateBox} onPress={() => setShowStartPicker(true)}>
                                    <Icon name="calendar" size={20} color="#D9531E" />
                                    <Text style={styles.dateText}>
                                        {startDate ? formatDate(startDate) : 'Start Date *'}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.dateBox} onPress={() => setShowEndPicker(true)}>
                                    <Icon name="calendar" size={20} color="#D9531E" />
                                    <Text style={styles.dateText}>
                                        {endDate ? formatDate(endDate) : 'End Date *'}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.buttonRow}>
                                <TouchableOpacity style={styles.clearBtn} onPress={clearDates}>
                                    <Text style={styles.clearText}>Clear</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.searchBtn} onPress={() => onSearch()}>
                                    <Text style={styles.searchText}>Search</Text>
                                </TouchableOpacity>
                            </View>

                            {showStartPicker && (
                                <DateTimePicker
                                    value={startDate || new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowStartPicker(false);
                                        setStartDate(selectedDate);
                                    }}
                                />
                            )}

                            {showEndPicker && (
                                <DateTimePicker
                                    value={endDate || new Date()}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowEndPicker(false);
                                        setEndDate(selectedDate);
                                    }}
                                />
                            )}
                        </VStack>
                        <Stack alignItems={'center'} marginBottom={4}>
                            <Box style={{ borderColor: greyColor, borderWidth: 1, padding: 18, width: '85%', borderRadius: 50, marginTop: 40, position: 'relative' }}>
                                <Box alignSelf={'center'} style={{ backgroundColor: orgDetails.color, padding: 8, width: '85%', borderRadius: 40, marginTop: -38, overflow: 'hidden' }}>
                                    <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontSize="md" fontFamily={fontBold} textAlign={'center'}>{t("Available Points")}</Text>
                                </Box>
                                <Text color={darkColor} marginTop={3} fontSize="xl" fontWeight={'bold'} textAlign={'center'}>{pointBalance}
                                    <Text color={darkColor} fontSize="md" fontWeight={'normal'}>{t(" Points")}</Text>
                                </Text>
                            </Box>
                        </Stack>
                        {points.length == 0 && (
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
                        <Stack>
                            <VStack padding="4" space="3">
                                {points.map((item, index) =>
                                    <Box key={index} borderWidth="1" borderColor="#aaaaaa" borderStyle="dashed" borderRadius="10" overflow="hidden">
                                        <HStack justifyContent="space-evenly" alignItems="center" bg="#ffffff" borderTopRadius="10">
                                            <VStack padding="2" w="33%">
                                                {item.transaction_type == "Credit" ?
                                                    <Stack style={{ width: 30, height: 30, borderRadius: 30, overflow: 'hidden' }} bg={dangerColor} justifyContent={'center'}>
                                                        <Text textAlign={'center'} color={lightColor} fontWeight={'black'} style={styles.note}>C</Text>
                                                    </Stack>
                                                    :
                                                    <Stack style={{ width: 30, height: 30, borderRadius: 30, overflow: 'hidden' }} bg={successColor} justifyContent={'center'}>
                                                        <Text textAlign={'center'} color={lightColor} fontWeight={'black'} style={styles.note}>D</Text>
                                                    </Stack>
                                                }
                                            </VStack>
                                            <VStack padding="2" w="33%">
                                                <Text fontSize='xs' color="#666666">{t("Points")}:</Text>
                                                <Text fontSize='sm' color="#111111" fontWeight="medium">{item.reward_points}</Text>
                                            </VStack>
                                            <VStack padding="2" w="33%">
                                                <View>
                                                    <Text fontSize='xs' color="#666666">{t("Sub Type")}:</Text>
                                                    <Text fontSize='sm' color="#111111" fontWeight="medium">{item.subtype}</Text>
                                                </View>
                                            </VStack>
                                        </HStack>
                                        <HStack alignItems="center">
                                            <VStack padding="2" w="33%">
                                                <Text fontSize='xs' color="#666666">{t("Date")}:</Text>
                                                {item.transaction_type == "Credit" ?
                                                    <Text fontSize='sm' color="#111111" fontWeight="medium">{moment(item.till_date).format("DD-MM-YYYY")}</Text>
                                                    :
                                                    <Text fontSize='sm' color="#111111" fontWeight="medium">{moment(item.created_at).format("DD-MM-YYYY")}</Text>
                                                }
                                            </VStack>
                                            <VStack padding="2">
                                                <Text fontSize='xs' color="#666666">{t("Description")}:</Text>
                                                <Text fontSize='sm' color="#111111" fontWeight="medium">{item.transaction_desc}</Text>
                                            </VStack>
                                        </HStack>
                                        {item.comment != "" && (
                                            <HStack alignItems="center" bg="#eeeeee" borderBottomRadius="10">
                                                <VStack padding="2">
                                                    <Text fontSize='xs' color="#666666">{t("Narration")}:</Text>
                                                    <Text fontSize='sm' color="#111111" fontWeight="medium">{item.comment}</Text>
                                                </VStack>
                                            </HStack>
                                        )}
                                    </Box>
                                )}
                            </VStack>
                            {isLoadMore && points.length > 7 && (
                                <HStack pb="3" paddingX="6" justifyContent="center">
                                    <Button variant="outline" size={'xs'} rounded={30} onPress={() => loadMore()}>
                                        <Text color="#bbbbbb">{t("Load More")}</Text>
                                    </Button>
                                </HStack>
                            )}
                        </Stack>
                    </VStack>
                </ScrollView>
            </VStack >
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider >
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 150,
        margin: 20,
        top: 40,
        left: '5%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 25,
        elevation: 5,
    },
    dateRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        flex: 0.48,
        padding: 12,
        borderRadius: 10,
    },
    dateText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#444',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    clearBtn: {
        flex: 0.48,
        backgroundColor: '#888',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    searchBtn: {
        flex: 0.48,
        backgroundColor: '#000',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    clearText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    searchText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PointStatementScreen;