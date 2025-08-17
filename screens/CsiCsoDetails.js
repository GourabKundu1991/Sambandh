import { Box, HStack, NativeBaseProvider, Text, VStack, Stack, Button, Avatar, Input, Select, Actionsheet, useDisclose, Toast } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Linking, Pressable, ScrollView, StatusBar, StyleSheet, View, useWindowDimensions } from 'react-native';
import { AccessToken, API_KEY, BASE_URL } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStyle, baseColor, baseLightColor, baseSemiColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import HeaderComponents from '../components/Header';
import RenderHTML from 'react-native-render-html';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const CsiCsoDetailsScreen = ({ navigation, route }) => {

    const { width, height } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [userType, setUserType] = React.useState("");

    const [CSI, setCSI] = React.useState("");
    const [csiList, setCsiList] = React.useState([]);


    const [CSO, setCSO] = React.useState("");
    const [csoList, setCsoList] = React.useState([]);

    useEffect(() => {
        setLoading(true);

        setUserType(route.params.user);

        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });
        });

        getAllData(CSI);

        return unsubscribe;
    }, []);

    const getAllData = (csiID) => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                setCSI(JSON.parse(val).hier_id);
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("type", route.params.user == "CSH" ? 1 : 2);
                formdata.append("csiId", route.params.user == "CSH" ? csiID ? csiID[0] : "" : JSON.parse(val).hier_id);
                console.log(formdata);
                fetch(`${BASE_URL}/get_csi_cso_details`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_csi_cso_details:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            if (route.params.user == "CSH") {
                                setCsiList(responseJson.csi_details);
                                setCsoList(responseJson.cso_details);
                            } else if (route.params.user == "CSI") {
                                setCsiList([]);
                                setCsoList(responseJson.cso_details);
                            }
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

    const onSelectCSI = (val) => {
        setLoading(true);
        setCSO("");
        setCSI(val);
        getAllData(val);
    }

    const goNext = () => {
        navigation.navigate("MemberBase", { baseType: route.params.baseType, pageName: route.params.pageName, csoID: CSO })
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={userType + " " + t("Details")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            style={{ position: 'relative', width: '100%', borderRadius: 20, overflow: 'hidden' }}
                        >
                            <VStack space={6} padding={8} style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <VStack space={3} width={'100%'}>
                                    {userType == "CSH" && (
                                        <View style={MainStyle.inputbox}>
                                            <MultiSelect
                                                hideTags
                                                items={csiList}
                                                uniqueKey="id"
                                                onSelectedItemsChange={(text) => onSelectCSI(text)}
                                                selectedItems={CSI}
                                                selectText="Select CSI"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor={successColor}
                                                selectedItemIconColor={successColor}
                                                itemTextColor="#000000"
                                                displayKey="name_with_external"
                                                searchInputStyle={{ color: '#CCC' }}
                                                single={true}
                                                styleDropdownMenuSubsection={{ height: 50, top: 5, paddingLeft: 15, borderWidth: 1, borderColor: "#dddddd", borderRadius: 30 }}
                                                styleListContainer={{ maxHeight: 250, overflow: 'scroll' }}
                                            />
                                        </View>
                                    )}
                                    {CSI != "" && (
                                        <View style={MainStyle.inputbox}>
                                            <MultiSelect
                                                hideTags
                                                items={csoList}
                                                uniqueKey="id"
                                                onSelectedItemsChange={(text) => setCSO(text)}
                                                selectedItems={CSO}
                                                selectText="Select CSO"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor={successColor}
                                                selectedItemIconColor={successColor}
                                                itemTextColor="#000000"
                                                displayKey="name_with_external"
                                                searchInputStyle={{ color: '#CCC' }}
                                                submitButtonColor={orgDetails.color}
                                                submitButtonText="Done"
                                                single={true}
                                                styleDropdownMenuSubsection={{ height: 50, top: 5, paddingLeft: 15, borderWidth: 1, borderColor: "#dddddd", borderRadius: 30 }}
                                                styleListContainer={{ maxHeight: 250, overflow: 'scroll' }}
                                            />
                                        </View>
                                    )}
                                </VStack>
                            </VStack>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <Button disabled={CSI == "" || CSO == ""} style={{ opacity: (CSI != "" && CSO != "") ? 1 : 0.4 }} onPress={() => goNext()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                        <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Next")}</Text>
                    </Button>
                </VStack>
            </VStack>
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider >
    );
};

/* const styles = StyleSheet.create({
}); */

export default CsiCsoDetailsScreen;