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

const CounterChangeScreen = ({ navigation, route }) => {

    const { width, height } = useWindowDimensions();

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [searchTerm, setSearchTerm] = React.useState("");

    const [influencer, setInfluencer] = React.useState("");

    const [counter, setCounter] = React.useState(false);
    const [counterType, setCounterType] = React.useState("");

    const [districtList, setDistrictList] = React.useState([]);
    const [selectedDistrict, setSelectedDistrict] = React.useState("");

    const [counterList, setCounterList] = React.useState([]);

    const [counterPrimary, setCounterPrimary] = React.useState("");
    const [counterSecondary, setCounterSecondary] = React.useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            AsyncStorage.getItem('loginType').then(valColor => {
                if (valColor != null) {
                    setOrgDetails(JSON.parse(valColor));
                }
            });
        });
        return unsubscribe;
    }, []);

    const onSearch = () => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("searchText", searchTerm);
                fetch(`${BASE_URL}/get_influencer_wise_counter_details`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_influencer_wise_counter_details:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setInfluencer(responseJson.influncers);
                            setDistrictList(responseJson.district);
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

    const onChooseDistrict = (selectVal) => {
        setLoading(true);
        setCounterSecondary([]);
        setSelectedDistrict(selectVal);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("districtid", selectVal);
                formdata.append("counterid", counterType == 1 ? "" : influencer.primary_counter_id )
                fetch(`${BASE_URL}/get_cso_district_wise_counters`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("get_cso_district_wise_counters:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setLoading(false);
                            setCounterList(responseJson.cso_district_wise_counters);
                        } else {
                            Toast.show({ description: responseJson.message });
                            setCounterList([]);
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

    const openCounter = (type) => {
        setCounter(true);
        setCounterType(type);
        setCounterPrimary("");
        setCounterSecondary([]);
    }
    const closeCounter = () => {
        setCounter(false);
        setSelectedDistrict("");
        setCounterList([]);
        setCounterSecondary([]);
        setCounterPrimary("");
    }

    const onSave = () => {
        setLoading(true);
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("token", JSON.parse(val).token);
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("counter_type", counterType);
                formdata.append("influencer_id", influencer.id);
                formdata.append("primary_counter", counterType == 1 ? counterPrimary[0] : "");
                formdata.append("secondary_counter", JSON.stringify(counterSecondary));
                console.log(formdata);
                fetch(`${BASE_URL}/update_influencer_counter`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("update_influencer_counter:", responseJson);
                        if (responseJson.bstatus == 1) {
                            setCounterList(responseJson.cso_district_wise_counters);
                            Toast.show({ description: responseJson.message });
                            onSearch();
                            closeCounter();
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
                <HeaderComponents component={t("Counter Change")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView automaticallyAdjustKeyboardInsets={true}>
                    <VStack padding={5} space={5}>
                        <View style={MainStyle.inputbox}>
                            <Input fontFamily={fontBold} size="md" variant="unstyled" placeholder={t('External ID / Phone No.')}
                                InputLeftElement={<Icon name="search" size={20} color="#000000" style={{ width: 25, marginLeft: 10 }} />} onChangeText={text => setSearchTerm(text)}
                                InputRightElement={<Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: 90 }]} onPress={() => onSearch()}>
                                    <Text color={lightColor} fontFamily={fontSemiBold} fontSize="sm">{t('Search')}</Text>
                                </Button>} />
                        </View>
                        {influencer && (
                            <LinearGradient
                                colors={["#f0f2e5", "#ffffff"]}
                                flex={1}
                                style={{ borderRadius: 30, overflow: 'hidden', paddingLeft: 20, paddingRight: 20, paddingVertical: 20 }}
                            >
                                <VStack space={2} marginBottom={3} style={{ backgroundColor: lightColor, padding: 15, borderRadius: 15, overflow: 'hidden' }}>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontSemiBold} color={darkGrey}>{t("Code")}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor}>
                                            {influencer.influencer_code}
                                        </Text>
                                    </HStack>
                                    <HStack justifyContent="space-between">
                                        <Text fontFamily={fontSemiBold} color={darkGrey}>{t("Name")}:</Text>
                                        <Text fontFamily={fontBold} color={darkColor}>
                                            {influencer.influencer_name}
                                        </Text>
                                    </HStack>
                                    <Pressable onPress={() => Linking.openURL(`tel:${influencer.ph_number}`)}>
                                        <HStack justifyContent="space-between">
                                            <Text fontFamily={fontSemiBold} color={darkGrey}>{t("Phone")}:</Text>
                                            <HStack alignItems={'center'} space={2}>
                                                <View backgroundColor={orgDetails.color} style={{ paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, overflow: 'hidden' }}><Icon name="call" size={14} color={orgDetails.name == "Zuari" ? darkColor : lightColor} /></View>
                                                <Text fontFamily={fontBold} color={orgDetails.color}>{influencer.ph_number}</Text>
                                            </HStack>
                                        </HStack>
                                    </Pressable>
                                </VStack>
                                <VStack space={3} marginY={3}>
                                    <Text color="#666666" fontSize="md" fontFamily={fontBold} textAlign={'center'}>--: {t("Primary Counter")} :--</Text>
                                    <HStack style={[MainStyle.inputbox, { backgroundColor: greyColor, padding: 8 }]} justifyContent={'space-between'} alignItems={'center'}>
                                        <VStack paddingX={5}>
                                            <Text color={darkColor} fontSize="sm" fontFamily={fontBold}>{influencer.primary_counter_name}</Text>
                                            <Text color="#666666" fontSize="xs">Code: <Text color={darkColor} fontFamily={fontBold}>{influencer.primary_counter_code}</Text></Text>
                                        </VStack>
                                        <Button style={[MainStyle.solidbtn, { backgroundColor: orgDetails.color, width: 80, height: 40 }]} onPress={() => openCounter(1)}>
                                            <Text color={lightColor} fontFamily={fontBold} fontSize="sm">{t('Edit')}</Text>
                                        </Button>
                                    </HStack>
                                </VStack>
                                <VStack space={3} marginY={3}>
                                    <Text color="#666666" fontSize="md" fontFamily={fontBold} textAlign={'center'}>--: {t("Secondary Counter")} :--</Text>
                                    <HStack style={[MainStyle.inputbox, { backgroundColor: greyColor, padding: 8 }]} justifyContent={'space-between'} alignItems={'center'}>
                                        <VStack width={'70%'} space={2}>
                                            {influencer.secondary_counters.map((item, index) => (
                                                <VStack key={index} style={{ borderColor: darkGrey, borderWidth: 0.6, padding: 7, borderRadius: 22, paddingHorizontal: 15 }} width={'100%'}>
                                                    <Text color={darkColor} fontSize="sm" fontFamily={fontBold} textTransform={'capitalize'}>{item.counter_name}</Text>
                                                    <Text color="#666666" fontSize="xs">Code: <Text color={darkColor} fontFamily={fontBold}>{item.counter_code}</Text></Text>
                                                </VStack>
                                            ))}
                                        </VStack>
                                        <Button style={[MainStyle.solidbtn, { backgroundColor: orgDetails.color, width: 80, height: 40 }]} onPress={() => openCounter(2)}>
                                            <Text color={lightColor} fontFamily={fontBold} fontSize="sm">{t('Edit')}</Text>
                                        </Button>
                                    </HStack>
                                </VStack>
                            </LinearGradient>
                        )}
                    </VStack>
                </ScrollView>
            </VStack >
            {counter && (
                <View style={MainStyle.spincontainer}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        colors={["#ffffff", "#f0f2e5"]}
                        style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
                    >
                        <VStack space={6} padding={8} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <VStack space={3} width={'100%'}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                                    {t("Please Choose District")}
                                </Text>
                                <View style={MainStyle.inputbox}>
                                    <Select
                                        size="md"
                                        selectedValue={selectedDistrict}
                                        onValueChange={value => {
                                            onChooseDistrict(value);
                                        }}
                                        placeholder="Select District"
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
                                        borderRadius={50}
                                        px={4}
                                        color={darkColor}
                                    >
                                        {districtList.map((item, index) => (
                                            <Select.Item key={index} label={item.name} value={item.id} />
                                        ))}
                                    </Select>
                                </View>
                            </VStack>
                            <VStack space={3} width={'100%'}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                                    {t("Please Choose Counter")}
                                </Text>
                                <Stack>
                                    {counterType == 1 ?
                                        <View style={MainStyle.inputbox}>
                                            <MultiSelect
                                                hideTags
                                                items={counterList}
                                                uniqueKey="counter_id"
                                                onSelectedItemsChange={(text) => setCounterPrimary(text)}
                                                selectedItems={counterPrimary}
                                                selectText="Select Counter"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor={successColor}
                                                selectedItemIconColor={successColor}
                                                itemTextColor="#000000"
                                                displayKey="counter_name"
                                                searchInputStyle={{ color: '#CCC' }}
                                                single={true}
                                                styleDropdownMenuSubsection={{ height: 50, top: 5, paddingLeft: 15, borderWidth: 1, borderColor: "#dddddd", borderRadius: 30}}
                                                styleListContainer={{maxHeight: 250, overflow: 'scroll'}}
                                            />
                                        </View>
                                        :
                                        <View style={MainStyle.inputbox}>
                                            <MultiSelect
                                                hideTags
                                                items={counterList}
                                                uniqueKey="counter_id"
                                                onSelectedItemsChange={(text) => setCounterSecondary(text)}
                                                selectedItems={counterSecondary}
                                                selectText="Select Counter"
                                                searchInputPlaceholderText="Search Items..."
                                                onChangeInput={(text) => console.log(text)}
                                                altFontFamily="ProximaNova-Light"
                                                tagRemoveIconColor="#CCC"
                                                tagBorderColor="#CCC"
                                                tagTextColor="#CCC"
                                                selectedItemTextColor={successColor}
                                                selectedItemIconColor={successColor}
                                                itemTextColor="#000000"
                                                displayKey="counter_name"
                                                searchInputStyle={{ color: '#CCC' }}
                                                submitButtonColor={orgDetails.color}
                                                submitButtonText="Done"
                                                styleDropdownMenuSubsection={{ height: 50, top: 5, paddingLeft: 15, borderWidth: 1, borderColor: "#dddddd", borderRadius: 30}}
                                                styleListContainer={{maxHeight: 250, overflow: 'scroll'}}
                                            />
                                        </View>
                                    }
                                </Stack>
                            </VStack>
                            <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => onSave()}>
                                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Save Change')}</Text>
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
                        onPress={() => closeCounter()}
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
        </NativeBaseProvider >
    );
};

/* const styles = StyleSheet.create({
}); */

export default CounterChangeScreen;