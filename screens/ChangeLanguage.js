import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, API_KEY, BASE_URL, secretKey } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/Ionicons';
import i18n from '../assets/language/i18n';
import LinearGradient from 'react-native-linear-gradient';

const ChangeLanguageScreen = ({ navigation, route }) => {

    const { width } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [pageData, setPageData] = React.useState("");

    const [currentLanguage, setLanguage] = React.useState('Eng');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

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
        });
        return unsubscribe;
    }, []);

    const onChangeLanguage = () => {

        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("language_code", currentLanguage);
                fetch(`${BASE_URL}/change_profile_language`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("change_profile_language:", responseJson);
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

    const onSaveLang = () => {
        AsyncStorage.setItem('language', currentLanguage);
        i18n.changeLanguage(currentLanguage)
            .then(() => setLoading(true), onChangeLanguage())
            .catch(err => console.log(err));
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("Change Language")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden', paddingHorizontal: 30, paddingVertical: 50 }}
                        >
                            <Text textAlign="center" fontFamily={fontSemiBold} fontSize="md" mb={4}>
                                {t("Select Language")}
                            </Text>

                            <View style={MainStyle.inputbox}>
                                <Select
                                    size="md"
                                    selectedValue={currentLanguage}
                                    onValueChange={value => setLanguage(value)}
                                    placeholder="Choose Language"
                                    dropdownCloseIcon={
                                        <Icon name="chevron-down-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                    }
                                    dropdownOpenIcon={
                                        <Icon name="chevron-up-outline" size={20} style={{ width: 25, marginRight: 10 }} />
                                    }
                                    _selectedItem={{
                                        bg: '#FFFFFF',
                                        endIcon: (
                                            <Icon name="checkmark-circle" size={20} style={{ width: 25 }} color={successColor} />
                                        ),
                                    }}
                                    bg="#FAFAFA"
                                    borderRadius={50}
                                    px={4}
                                >
                                    <Select.Item label="English" value="Eng" />
                                    <Select.Item label="Hindi" value="Hn" />
                                    <Select.Item label="Bengali" value="Bn" />
                                    <Select.Item label="Telugu" value="Te" />
                                    <Select.Item label="Tamil" value="Ta" />
                                    <Select.Item label="Malayalam" value="Ml" />
                                    <Select.Item label="Kannada" value="Kn" />
                                </Select>
                            </View>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <Button onPress={() => onSaveLang()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                        <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Save")}</Text>
                    </Button>
                </VStack>
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

export default ChangeLanguageScreen;