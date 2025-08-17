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
import LinearGradient from 'react-native-linear-gradient';

const PurchaseRegistrationScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);
    const [showPicker, setShowPicker] = React.useState(false);

    const [products, setProducts] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [dealers, setDealers] = React.useState([]);
    const [selectedProdId, setSelectedProdId] = React.useState("");

    const [selectedDealerId, setSelectedDealerId] = React.useState("");
    const [quantity, setQuantity] = React.useState('');
    const [pricePerBag, setPricePerBag] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [siteAddress, setSiteAddress] = React.useState('');

    const [orgDetails, setOrgDetails] = React.useState('');

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
                formdata.append("os_type", `${OS_TYPE}`);
                formdata.append("app_ver", `${APP_VERSION}`);
                fetch(`${BASE_URL}/pre_sale_info`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Sale Info:", responseJson);
                        setLoading(false);
                        if (responseJson.bstatus === 1) {
                            const baseUrl = responseJson.image_base_url;

                            const imgProducts = responseJson.product_list.map(product => ({
                                name: product.product_name,
                                image: { uri: baseUrl + product.product_image },
                                prod_id: product.prod_id
                            }));

                            setProducts(imgProducts);
                            setDealers(responseJson.dealer_list);
                        }
                        else {
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

    const enterSaleData = () => {
        if (selectedProdId == '') {
            Toast.show({ description: t("Please select Product") });
        } else if (selectedDealerId == '') {
            Toast.show({ description: t("Please select Dealer") });
        } else if (quantity.trim() == '') {
            Toast.show({ description: t("Please enter Quantity") });
        } else if (pricePerBag.trim() == '') {
            Toast.show({ description: t("Please enter Price Per Bag") });
        } else if (selectedDate == null) {
            Toast.show({ description: t("Please select Purchase Date") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("dealer_id", selectedDealerId);
                    formdata.append("prodMasId", selectedProdId);
                    formdata.append("saleQuantity", quantity);
                    formdata.append("saleDate", selectedDate ? moment(selectedDate).format("YYYY-MM-DD") : "");
                    formdata.append("unit_price", pricePerBag);
                    fetch(`${BASE_URL}/enter_sale_data`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("enter_sale_data:", responseJson);
                            setLoading(false);
                            if (responseJson.bstatus === 1) {
                                Alert.alert(
                                    t("Success"),
                                    responseJson.message,
                                    [
                                        {
                                            text: t("OK"),
                                            onPress: () => navigation.goBack()
                                        }
                                    ]
                                );
                                Toast.show({ description: responseJson.message });
                            }
                            else {
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
    };

    const today = new Date();
    const minDate = new Date(); // 15 days ago
    minDate.setDate(today.getDate() - 15);

    const handleDateChange = (event, date) => {
        setShowPicker(false);
        if (date) {
            setSelectedDate(date);
        }
    };


    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Purchase Registration")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <Box style={{ borderColor: greyColor, borderBottomWidth: 1, padding: 10 }}>
                                <Text fontSize="md" fontFamily={fontBold} textAlign="center">{t("Select Product")}</Text>
                            </Box>
                            <HStack flexWrap="wrap" justifyContent="space-between" width="100%" padding={5}>
                                {products.map((product, index) => (
                                    <VStack key={index} width="48%" alignItems="center" marginY={2}>
                                        <Pressable onPress={() => {
                                            setSelectedIndex(index);
                                            setSelectedProdId(product.prod_id);
                                            console.log("Selected Product ID:", product.prod_id);
                                        }}>
                                            <Box
                                                backgroundColor="#ffffff"
                                                borderRadius={30}
                                                padding={3}
                                                alignItems="center"
                                                borderWidth={4}
                                                borderColor={selectedIndex === index ? orgDetails.color : greyColor}
                                            >
                                                <Image source={product.image} style={{ width: 100, height: 120, resizeMode: 'contain' }} />
                                            </Box>
                                        </Pressable>
                                        <Text textAlign="center" mt={2} fontWeight="medium">{product.name}</Text>
                                    </VStack>
                                ))}
                            </HStack>
                        </LinearGradient>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <Box style={{ borderColor: greyColor, borderBottomWidth: 1, padding: 10 }}>
                                <Text fontSize="md" fontFamily={fontBold} textAlign="center">{t("Other Details")}</Text>
                            </Box>
                            <VStack width="100%" padding={5} space={3}>
                                <View style={MainStyle.inputbox}>
                                    <Select
                                        size="md"
                                        borderWidth={0}
                                        selectedValue={selectedDealerId}
                                        onValueChange={value => {
                                            setSelectedDealerId(value);
                                        }}
                                        placeholder={t("Select Dealer *")}
                                        dropdownCloseIcon={
                                            <Icon name="chevron-down-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                        }
                                        dropdownOpenIcon={
                                            <Icon name="chevron-up-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                        }
                                        InputLeftElement={<Icon name="person-outline" size={20} color="#000000" style={{ width: 25, marginLeft: 12 }} />}
                                        _selectedItem={{
                                            bg: '#FFFFFF',
                                            endIcon: (
                                                <Icon name="checkmark-circle" size={20} style={{ width: 25 }} color={successColor} />
                                            ),
                                        }}
                                        borderRadius={50}
                                    >
                                        {dealers.map((dealer) => (
                                            <Select.Item
                                                key={dealer.id}
                                                label={`${dealer.company_name} (${dealer.id_extern01})`}
                                                value={dealer.id}
                                            />
                                        ))}
                                    </Select>
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Input value={quantity} size="md" variant="unstyled" keyboardType="number-pad" placeholder={t('Quantity (Bags) *')} InputLeftElement={<Icon name="server-outline" size={20} color="#000000" style={{ width: 25, marginLeft: 12 }} />} onChangeText={text => setQuantity(text)} />
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Input value={pricePerBag} size="md" variant="unstyled" keyboardType="number-pad" placeholder={t('Price Per Bags *')} InputLeftElement={<Icon name="cash-outline" size={20} color="#000000" style={{ width: 25, marginLeft: 12 }} />} onChangeText={text => setPricePerBag(text)} />
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Pressable onPress={() => setShowPicker(true)}>
                                        <Input value={selectedDate ? moment(selectedDate).format("DD-MM-YYYY") : ""} size="md" variant="unstyled" placeholder={t('Purchase Date *')} InputLeftElement={<Icon name="calendar-outline" size={20} color="#000000" style={{ width: 25, marginLeft: 12 }} />} readOnly />
                                    </Pressable>
                                    {showPicker && (
                                        <DateTimePicker
                                            value={selectedDate || today}
                                            mode="date"
                                            display="default"
                                            onChange={handleDateChange}
                                            maximumDate={today}
                                            minimumDate={minDate}
                                        />
                                    )}
                                </View>
                                <View style={MainStyle.inputbox}>
                                    <Input value={siteAddress} multiline height={70} size="md" variant="unstyled" placeholder={t('Site Address')} InputLeftElement={<Icon name="location-outline" size={20} color="#000000" style={{ width: 25, marginLeft: 12 }} />} onChangeText={text => setSiteAddress(text)} />
                                </View>
                            </VStack>
                        </LinearGradient>
                    </VStack>
                    <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                        <Button onPress={() => enterSaleData()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Submit")}</Text>
                        </Button>
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

export default PurchaseRegistrationScreen;