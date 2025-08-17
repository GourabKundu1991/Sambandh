import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box, HStack, NativeBaseProvider, Text, VStack, Toast, Stack, Actionsheet, useDisclose, Select, Button, Slider } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { AccessToken, API_KEY, APIkey, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID, secretKey } from '../auth_provider/Config';
import RangeSlider from 'react-native-range-slider-expo/src/RangeSlider';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import FooterComponents from '../components/Footer';
import { baseColor, dangerColor, darkColor, fontRegular, fontSemiBold, greyColor, lightColor, MainStyle, successColor, warningColor, fontBold, darkGrey } from '../assets/MainStyle';
import LinearGradient from 'react-native-linear-gradient';

const RewardsCateScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [currentLanguage, setLanguage] = React.useState('Eng');

    const [orgDetails, setOrgDetails] = React.useState('');

    const [dataFound, setDataFound] = React.useState("");

    const [pageNumber, setPageNumber] = React.useState(1);
    const [isLoadMore, setIsLoadMore] = React.useState(true);
    const [allProducts, setAllProducts] = React.useState([]);
    const [inCart, setInCart] = React.useState("");
    const [allCategory, setAllCategory] = React.useState([]);

    const [cateId, setCateId] = React.useState(0);
    const [sortBy, setSortBy] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();
    const [pointRange, setPointRange] = React.useState("");
    const [fromValue, setFromValue] = React.useState("");
    const [toValue, setToValue] = React.useState("");

    const [userType, setUserType] = React.useState("");
    const [cartcount, setCartCount] = React.useState("");

    const [imageBase, setImageBase] = React.useState("");
    const [availablePoint, setAvailablePoint] = React.useState("");
    const [filtervalue, setFilterValue] = React.useState("");
    const [filteration, setFiltertion] = React.useState(false);

    const [canRedeem, setCanRedeem] = React.useState(0);
    const [canSubmitKYC, setCanSubmitKYC] = React.useState(0);
    const [canSubmitKYCText, setCanSubmitKYCText] = React.useState("");

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
                    i18n.changeLanguage(val)
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
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                fetch(`${BASE_URL}/catalog`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("catalog:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setAllProducts(responseJson.products);
                            countCart();
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


    const countCart = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                fetch(`${BASE_URL}/cart_count`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("cart_count:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setCartCount(responseJson.cart_count);
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


    const renderProduct = ({ item, index }) => {
        return (
            <LinearGradient
                key={index}
                colors={["#f0f2e5", "#ffffff"]}
                flex={1}
                style={styles.productbox}
            >
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { details: item })}>
                    <Box style={styles.productimage}>
                        <Image source={{ uri: item.BaseUrl + item.ProductImage }} style={{ width: 100, height: 90 }} resizeMode='contain' />
                    </Box>
                    <Text fontSize='sm' color={darkColor} mb="2">{item.productName.substring(0, 30)}</Text>
                    <Text fontSize='md' fontWeight="bold" color={orgDetails.color}>{item.pricePoints} {t("Points")}</Text>
                </TouchableOpacity>
            </LinearGradient>

        );
    }


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Rewards")} themeColor={orgDetails.color} navigation={navigation} cartcount={cartcount} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        {allProducts.length == 0 && (
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

                        <HStack flexWrap="wrap" justifyContent={'space-between'}>
                            <FlatList
                                scrollEnabled={false}
                                data={allProducts}
                                renderItem={renderProduct}
                                numColumns={2}
                            />
                        </HStack>
                    </VStack>
                </ScrollView>
            </VStack>
            {
                loading && (
                    <View style={MainStyle.spincontainer}>
                        <ActivityIndicator animating={loading} size="large" color={warningColor} />
                    </View>
                )
            }
        </NativeBaseProvider >
    );
};

const styles = StyleSheet.create({
    bgimage: { flex: 1, justifyContent: 'center' },
    solidBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: '#111111', borderRadius: 10 },
    outlineBtn: { width: '48%', borderColor: '#111111', borderWidth: 2, backgroundColor: 'none', borderRadius: 10 },
    inputbox: { backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: 12, width: '100%', overflow: 'hidden', marginVertical: 7 },
    noti: { color: '#ffffff', width: 18, height: 18, borderRadius: 20, position: 'absolute', top: -5, right: -3, fontSize: 11, lineHeight: 18, paddingTop: 1, textAlign: 'center', overflow: 'hidden' },
    productbox: { position: 'relative', borderRadius: 20, width: '44%', marginHorizontal: '3%', marginBottom: '6%', padding: 15, overflow: 'hidden' },
    productimage: { borderColor: '#dddddd', backgroundColor: '#ffffff', marginBottom: 10, borderWidth: 1, borderRadius: 10, width: '100%', height: 90, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default RewardsCateScreen;