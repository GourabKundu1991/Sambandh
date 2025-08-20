import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterComponents from '../components/Footer';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import StarRating from 'react-native-star-rating-widget';

const ViewOrdersScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [orderList, setOrderList] = React.useState([]);

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    const [feedbackPOP, setFeedbackPOP] = React.useState(false);

    const [categoryList, setCategoryList] = React.useState([]);
    const [category, setCategory] = React.useState("");
    const [categoryType, setCategoryType] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [image1, setImage1] = React.useState("");
    const [image2, setImage2] = React.useState("");

    const [selectedProduct, setSelectedProduct] = React.useState("");

    const [imageType, setImageType] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();

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
                formdata.append("pageNumber", 1);
                console.log(formdata);
                fetch(`${BASE_URL}/myorders`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("myorders:", JSON.stringify(responseJson));
                        if (responseJson.bstatus === 1) {
                            setLoading(false);
                            setOrderList(responseJson.order_list);
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

    const openComplaint = (item, cate) => {
        setFeedbackPOP(true);
        setSelectedProduct(item);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("categoryId", cate);
                console.log(formdata);
                fetch(`${BASE_URL}/get_complain_category`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_complain_category:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setLoading(false);
                            setCategoryList(responseJson.categories);
                            setCategoryType(responseJson.type);
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

    const closeComplaint = () => {
        setFeedbackPOP(false);
        setSelectedProduct("");
        setCategory("");
        setDescription("");
        setRating("");
        setImage1("");
        setImage2("");
    }

    const onSubmitComplaint = () => {
        if (category == '') {
            Toast.show({ description: t("Please select Category") });
        } else if (description.trim() == '') {
            Toast.show({ description: t("Please enter Description") });
        } else if (categoryType == 1 && rating == '') {
            Toast.show({ description: t("Please give some Retings") });
        } else {
            setLoading(true);
            AsyncStorage.getItem('userToken').then(val => {
                if (val != null) {
                    let formdata = new FormData();
                    formdata.append("token", JSON.parse(val).token);
                    formdata.append("APIkey", `${API_KEY}`);
                    formdata.append("orgId", JSON.parse(val).orgId);
                    formdata.append("comp_category_id", category);
                    formdata.append("dcm_orders_id", selectedProduct.orderId);
                    formdata.append("dcm_order_items_id", selectedProduct.orderItemId);
                    formdata.append("dcm_product_id", selectedProduct.prod_id);
                    formdata.append("complain_description", description);
                    formdata.append("image1", image1);
                    formdata.append("image2", image2);
                    formdata.append("rating", categoryType == 1 ? rating : "");
                    formdata.append("type", categoryType);
                    console.log(formdata);
                    fetch(`${BASE_URL}/submit_complain`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: formdata
                    })
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log("submit_complain:", responseJson);
                            if (responseJson.bstatus === 1) {
                                getAllData();
                                Toast.show({ description: responseJson.message });
                                closeComplaint();
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
                            console.log("submit_complain Error:", error);
                            Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
                        });
                }
            });
        }
    }

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
                        if (imageType == "Image1") {
                            setImage1(response.assets[0].base64);
                        } else if (imageType == "Image2") {
                            setImage2(response.assets[0].base64);
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
                        if (imageType == "Image1") {
                            setImage1(response.assets[0].base64);
                        } else if (imageType == "Image2") {
                            setImage2(response.assets[0].base64);
                        }
                    }
                },
            )
        }
    }

    const onSelectCate = (cate) => {
        setLoading(true);
        openComplaint(selectedProduct, cate);
    };

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
        setRating(rating);
    }

    const falshclick = (rating) => {
        console.log("Rating is: " + rating)
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("My Order")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        {orderList.length == 0 && (
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
                        {orderList.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden' }}
                            >
                                <VStack key={index} padding={5}>
                                    <HStack space={4}>
                                        <VStack space={2} width={'30%'} alignItems={'center'} marginTop={5}>
                                            <Box style={{ width: '100%', borderColor: greyColor, borderWidth: 1, height: 100, borderRadius: 6, bottom: 20, overflow: 'hidden' }}>
                                                {item?.BaseUrl && item?.product_image?.[2]?.product_image && (
                                                    <Image source={{ uri: item.BaseUrl + item.product_image[0].product_image }} style={{ width: '100%', height: 100, resizeMode: 'cover' }} />
                                                )}
                                            </Box>
                                        </VStack>
                                        <VStack space={1} width={'60%'}>
                                            <Text fontFamily={fontBold} fontSize="14" color={darkColor}>
                                                {item.productName}
                                            </Text>
                                            <HStack alignContent={'center'}>
                                                <Box><Text fontSize="14" fontFamily={fontBold} color={darkColor} textAlign={'center'}>{t("Order ID")}: {item.orderId}</Text></Box>
                                            </HStack>
                                            <HStack alignContent={'center'}>
                                                <Text fontFamily={fontBold} fontSize="14" color={darkColor}>{t("Order Item Id")}: {item.orderItemId}</Text>
                                            </HStack>
                                            <HStack style={{ justifyContent: "space-between", alignContent: 'center', marginTop: 5 }}>
                                                <Text fontWeight="bold" fontSize="14" color={darkColor}>
                                                    Grand Total: {item.totalPoints} {t("Points")}
                                                </Text>
                                            </HStack>
                                            <HStack alignContent={'center'}>
                                                <Text fontFamily={fontBold} fontSize="14" color={darkColor}>{t("Date")}: {moment(item.orderInDate).format('DD MMMM, YYYY')}</Text>
                                            </HStack>
                                            <HStack alignContent={'center'}>
                                                <Text fontFamily={fontBold} fontSize="14" color={darkColor}>{t("Status")}: {item.status}</Text>
                                            </HStack>
                                            {item.orderExpectedDate != "" && (
                                                <HStack alignContent={'center'}>
                                                    <Text fontFamily={fontBold} fontSize="14" color={darkColor}>{t("Note")}: {item.orderExpectedDate}</Text>
                                                </HStack>
                                            )}
                                        </VStack>
                                    </HStack>
                                    {item.feedbackData != "" && (
                                        <VStack backgroundColor={"#eeeeee"} borderRadius={10} width="100%" marginTop={5}>
                                            <VStack justifyContent="space-between" alignContent="center" space={3} padding={3}>
                                                <VStack>
                                                    <Text color="#444444" fontSize="xs" fontWeight="medium">{t("Description")}:</Text>
                                                    <HStack space={1} alignItems="center">
                                                        <Text color="#111111" fontSize="sm" fontWeight="bold">{item.feedbackData.complain_description}</Text>
                                                    </HStack>
                                                </VStack>
                                                <VStack>
                                                    <Text color="#444444" fontSize="xs" fontWeight="medium" textAlign={'center'}>{t("Ratings")}:</Text>
                                                    <StarRating
                                                        rating={item.feedbackData.rating}
                                                        enableHalfStar={false}
                                                        enableSwiping={false}
                                                        color={successColor}
                                                        onChange={falshclick}
                                                        style={{ alignSelf: 'center', marginVertical: 10 }}
                                                    />
                                                </VStack>
                                            </VStack>
                                        </VStack>
                                    )}
                                    <HStack alignContent={'center'} justifyContent={'center'} space={3} marginTop={5} width={'100%'}>
                                        <Button variant="outline" size={'xs'} width={120} borderRadius={30} borderWidth={10} backgroundColor={darkColor} onPress={() => navigation.navigate('OrderDetails', {
                                            productname: item.productName,
                                            OrderID: item.orderId,
                                            OrderItemID: item.orderItemId,
                                            OrderDate: item.orderInDate,
                                            pricePoint: item.pricePoint,
                                            totalPoints: item.totalPoints,
                                            quantity: item.quantity,
                                            status: item.status,
                                            productimage: item.BaseUrl + item.product_image[0].product_image,
                                        })}>
                                            <Text color="#bbbbbb" fontFamily={fontBold} fontSize={'16'}>{t("Details")}</Text>
                                        </Button>
                                        {item.canRaiseIssue == 1 && (
                                            <Button variant="outline" size={'xs'} width={150} borderRadius={30} borderWidth={10} backgroundColor={darkColor} onPress={() => openComplaint(item, category)}>
                                                <Text color="#bbbbbb" fontFamily={fontBold} fontSize={'16'}>{t("Complaint")}</Text>
                                            </Button>
                                        )}
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
            {feedbackPOP && (
                <View style={MainStyle.spincontainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        colors={["#f0f2e5", "#f0f2e5", "#ffffff"]}
                        style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
                    >
                        <VStack space={6} padding={8} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                                {t("Raise Complaint")}
                            </Text>
                            <VStack width={'100%'} space={5}>
                                <View style={MainStyle.inputbox}>
                                    <Select variant="unstyled" size="md" placeholder={t("Select Category") + " *"}
                                        selectedValue={category}
                                        onValueChange={value => { setCategory(value), onSelectCate(value) }}
                                        _selectedItem={{
                                            backgroundColor: '#eeeeee',
                                            endIcon: <Icon name="checkmark-circle" size={22} color="#2BBB86" style={{ right: 0, position: 'absolute' }} />
                                        }}>
                                        {categoryList.map((item, index) =>
                                            <Select.Item key={index} label={item.category_name} value={item.id} />
                                        )}
                                    </Select>
                                </View>
                                {categoryType == 1 && (
                                    <View style={MainStyle.inputbox}>
                                        <HStack justifyContent={'center'} alignItems={'center'} space={2}>
                                            <Text style={{ fontSize: 14, color: successColor }} textAlign={'center'}>
                                                Ratings:
                                            </Text>
                                            <HStack>
                                                <Text style={{ fontSize: 30, fontWeight: 'bold', color: successColor, lineHeight: 40 }}>{rating}</Text>
                                                <Text style={{ fontSize: 22, lineHeight: 40, color: successColor }}>/5</Text>
                                            </HStack>
                                        </HStack>
                                        <StarRating
                                            rating={rating}
                                            onChange={ratingCompleted}
                                            enableHalfStar={false}
                                            enableSwiping={false}
                                            color={successColor}
                                            style={{ alignSelf: 'center', marginVertical: 10 }}
                                        />
                                    </View>
                                )}
                                <View style={MainStyle.inputbox}>
                                    <Input size="md" onChangeText={(text) => setDescription(text)} multiline height={100} textAlignVertical='top' variant="unstyled" placeholder={t("Description") + " *"} />
                                </View>
                                <HStack justifyContent={'space-between'} alignItems={'center'}>
                                    <Stack style={{ width: '48%' }} space={2}>
                                        <HStack alignItems="center" space={0}>
                                            <Icon name="attach-outline" size={18} color="#666666" />
                                            <Text color="#666666" fontSize="sm" textTransform="capitalize">{t("Image 1")}</Text>
                                        </HStack>
                                        <View style={[MainStyle.inputbox, { position: 'relative' }]}>
                                            <Image source={image1 != "" ? { uri: 'data:image/jpeg;base64,' + image1 } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 120 }} />
                                            <Pressable onPress={() => onPickerOpen("Image1")} style={{ backgroundColor: 'red', borderRadius: 30, overflow: 'hidden', padding: 10, position: 'absolute', bottom: 5, right: 5 }} justifyContent="center" alignItems="center">
                                                <Icon name="camera" size={26} color="#ffffff" />
                                            </Pressable>
                                        </View>
                                    </Stack>
                                    <Stack style={{ width: '48%' }} space={2}>
                                        <HStack alignItems="center" space={0}>
                                            <Icon name="attach-outline" size={18} color="#666666" />
                                            <Text color="#666666" fontSize="sm" textTransform="capitalize">{t("Image 2")}</Text>
                                        </HStack>
                                        <View style={[MainStyle.inputbox, { position: 'relative' }]}>
                                            <Image source={image2 != "" ? { uri: 'data:image/jpeg;base64,' + image2 } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 120 }} />
                                            <Pressable onPress={() => onPickerOpen("Image2")} style={{ backgroundColor: 'red', borderRadius: 30, overflow: 'hidden', padding: 10, position: 'absolute', bottom: 5, right: 5 }} justifyContent="center" alignItems="center">
                                                <Icon name="camera" size={26} color="#ffffff" />
                                            </Pressable>
                                        </View>
                                    </Stack>
                                </HStack>
                                <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => onSubmitComplaint()}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Submit')}</Text>
                                </Button>
                            </VStack>
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
                        onPress={() => closeComplaint()}
                    >
                        <Text color={lightColor} fontSize="sm">{t('Cancel')}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Text color="#666666" fontSize="md" textAlign="center">{t("Select Image Source")}</Text>
                    <Actionsheet.Item onPress={() => openProfilePicker("library")}>{t("Load from Library")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("camera")}>{t("Use Camera")}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => openProfilePicker("cancel")}>{t("Cancel")}</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
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

export default ViewOrdersScreen;