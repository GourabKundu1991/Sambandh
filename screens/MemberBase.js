import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Actionsheet, useDisclose, Divider, Toast } from 'native-base';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Alert, Pressable, ScrollView, TouchableOpacity, StatusBar, Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, AccessToken, BASE_URL, OS_TYPE, secretKey, APIkey, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Events from '../auth_provider/Events';
import { MainStyle, baseColor, baseColorC, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

const MemberBaseScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [baseList, setBaseList] = React.useState([]);


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
            if (val) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("type", route.params.baseType);
                formdata.append("csoId", route.params.csoID);
                fetch(`${BASE_URL}/get_member_count_category_wise`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then(response => response.json())
                    .then(responseJson => {
                        setLoading(false);
                        console.log("get_member_count_category_wise Response:", responseJson);
                        if (responseJson.bstatus === 1) {
                            setBaseList(responseJson.details);
                        } else {
                            Toast.show({ description: responseJson.message });

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
    };

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={route.params.pageName} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        {baseList.length == 0 && (
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
                        {baseList.map((item, index) => (
                            <LinearGradient
                                key={index}
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 60, overflow: 'hidden' }}
                            >
                                <VStack padding={4}>
                                    <Pressable onPress={() => navigation.navigate("MemberBaseDetails", { baseType: item.type, baseName: item.name })}>
                                        <HStack justifyContent="space-between" alignItems={'center'}>
                                            <HStack alignItems={'center'} space={5}>
                                                <Button style={[MainStyle.solidbtn, { backgroundColor: orgDetails.color, width: 100 }]}>
                                                    <Text color={lightColor} fontFamily={fontBold} fontSize="lg">{item.count}</Text>
                                                </Button>
                                                <Text fontSize="md" color={darkColor} fontWeight={'bold'}>
                                                    {item.name}
                                                </Text>
                                            </HStack>
                                            <Icon name="chevron-forward-outline" size={30} color={darkGrey} />
                                        </HStack>
                                    </Pressable>
                                </VStack>
                            </LinearGradient>
                        ))}
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

const styles = StyleSheet.create({
});

export default MemberBaseScreen;