import AsyncStorage from '@react-native-async-storage/async-storage';
import { Actionsheet, Box, Button, Checkbox, HStack, Input, NativeBaseProvider, Pressable, Stack, Text, Toast, VStack, useDisclose } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, StatusBar, View, ScrollView, ImageBackground, Keyboard } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { API_KEY, BASE_URL, CONTACT_HIER_ID, ORG_ID, PROGRAM_ID } from '../auth_provider/Config';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';
import HeaderComponents from '../components/Header';
import { dangerColor, darkColor, fontBold, lightColor, MainStyle, warningColor } from '../assets/MainStyle';

const PanUploadScreen = ({ navigation, route }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [orgDetails, setOrgDetails] = React.useState('');

    const [modalVisible, setModalVisible] = React.useState(true);

    const [panCard, setPanCard] = React.useState("");
    const [panImage, setPanImage] = React.useState("");

    const { isOpen, onOpen, onClose } = useDisclose();

    useEffect(() => {
        AsyncStorage.getItem('loginType').then(valColor => {
            if (valColor != null) {
                setOrgDetails(JSON.parse(valColor));
            }
        });
    }, [])

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
                        setPanImage(response.assets[0].base64);
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
                        setPanImage(response.assets[0].base64);
                    }
                },
            )
        }
    }

    const onSubmit = () => {
        Keyboard.dismiss();
        if (panCard.trim() == "") {
            Toast.show({ description: t("Please enter Pan Card Number") });
        } else if (panCard.trim() != "" && panImage == "") {
            Toast.show({ description: t("Please Attach Pan Image") });
        } else {
            updatePan();
            setLoading(true);
        }
    }

    const updatePan = () => {
        AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
                let formdata = new FormData();
                formdata.append("APIkey", `${API_KEY}`);
                formdata.append("token", JSON.parse(val).token);
                formdata.append("orgId", JSON.parse(val).orgId);
                formdata.append("pan_file", panImage);
                formdata.append("pan_number", panCard);
                console.log(formdata);
                fetch(`${BASE_URL}/update_pan_kyc`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formdata
                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("Update Pan:", responseJson);
                        if (responseJson.bstatus === 1) {
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
                        console.log("Update Pan Error:", error);
                        Toast.show({ description: t("Sorry! Somthing went Wrong. Maybe Network request Failed") });
                    });
            } else {
                setLoading(false);
                AsyncStorage.clear();
                navigation.navigate('Intro');
            }
        });
    }

    onSkip = () => {
        setModalVisible(false)
        updatePan();
    }

    return (
        <NativeBaseProvider>
            <StatusBar barStyle="dark-content" backgroundColor={lightColor} />
            <VStack flex={1} backgroundColor={lightColor}>
                <HeaderComponents component={t("PAN Upload")} themeColor={orgDetails.color} navigation={navigation} />
                <ScrollView>
                    <VStack padding={5} space={5}>
                        <LinearGradient
                            colors={["#f0f2e5", "#ffffff"]}
                            flex={1}
                            style={{ borderRadius: 30, overflow: 'hidden' }}
                        >
                            <VStack padding={5}>
                                <View style={MainStyle.inputbox}>
                                    <Input size="lg" value={panCard} onChangeText={(text) => setPanCard(text)} variant="unstyled" maxLength={10} InputLeftElement={<Icon name="card-outline" size={20} color="#666666" style={{ width: 25, marginLeft: 10, textAlign: 'center' }} />} placeholder={t("Pan Card No.") + " *"} />
                                </View>
                                <HStack alignItems="center" mt="3" mb="2" space={0}>
                                    <Icon name="attach-outline" size={22} color="#666666" />
                                    <Text color="#666666" fontSize="md" textTransform="capitalize">{t("Attach Pan Image")} *</Text>
                                </HStack>
                                <View style={MainStyle.inputbox}>
                                    <Image source={panImage != "" ? { uri: 'data:image/jpeg;base64,' + panImage } : require('../assets/images/noimage.jpg')} alt="image" resizeMode='contain' style={{ width: '100%', height: 160 }} />
                                    <Pressable onPress={onOpen} bg={dangerColor} position="absolute" bottom="3" right="3" width="50" height="50" justifyContent="center" alignItems="center" borderRadius="30" overflow="hidden">
                                        <Icon name="camera" size={26} color="#ffffff" />
                                    </Pressable>
                                    <Actionsheet isOpen={isOpen} onClose={onClose}>
                                        <Actionsheet.Content>
                                            <Text color="#666666" fontSize="md" textAlign="center">{t("Select Image Source")}</Text>
                                            <Actionsheet.Item onPress={() => openProfilePicker("library")}>{t("Load from Library")}</Actionsheet.Item>
                                            <Actionsheet.Item onPress={() => openProfilePicker("camera")}>{t("Use Camera")}</Actionsheet.Item>
                                            <Actionsheet.Item onPress={() => openProfilePicker("cancel")}>{t("Cancel")}</Actionsheet.Item>
                                        </Actionsheet.Content>
                                    </Actionsheet>
                                </View>
                            </VStack>
                        </LinearGradient>
                    </VStack>
                </ScrollView>
                <VStack backgroundColor={"#f0f2e5"} borderTopRadius={30} padding={5} width="100%">
                    <Button onPress={() => onSubmit()} width={'100%'} backgroundColor={orgDetails.color} borderRadius={30}>
                        <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize="md">{t("Submit")}</Text>
                    </Button>
                </VStack>
            </VStack>
            {loading && (
                <View style={MainStyle.spincontainer}>
                    <ActivityIndicator animating={loading} size="large" color={warningColor} />
                </View>
            )}
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({});

export default PanUploadScreen;
