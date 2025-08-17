import { Avatar, Box, Button, HStack, NativeBaseProvider, Pressable, Stack, Text, VStack, View } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Image, ImageBackground, Linking, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Events from '../auth_provider/Events';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { MainStyle, baseColor, baseColorC, baseDarkColor, baseLightColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, warningColor } from '../assets/MainStyle';
import { AccessToken, BASE_URL } from '../auth_provider/Config';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LeftMenuBarScreen = ({ navigation }) => {

    const { t } = useTranslation();
    const [loading, setLoading] = React.useState(false);

    const [currentLanguage, setLanguage] = React.useState('Eng');
    
    const [mainMenu, setMainMenu] = React.useState([]);
    const [userData, setUserData] = React.useState("");
    const [state, setState] = React.useState("");
    const [points, setPoints] = React.useState("");
    const { width, height } = Dimensions.get('window');
    const [token, setToken] = React.useState("");

    useEffect(() => {
        Events.subscribe('mainMenu', (data) => {
            setMainMenu(data);
        });
        Events.subscribe('profileData', (data) => {
            setUserData(data.profile);
            setPoints(data.available_point);
        });
    }, []);

    const onLogout = () => {
        Alert.alert(
            t("Alert"),
            t("Are you sure to logout") + "?",
            [
                {
                    text: t("Cancel"),
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: t("Yes"), onPress: () => {
                        /* setLoading(true);
                        setLoading(false); */
                        AsyncStorage.clear();
                        navigation.navigate('Intro');
                        setLanguage('Eng');
                        /* fetch(`${BASE_URL}/log-out`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                            body: ""
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                
                            })
                            .catch((error) => {
                                setLoading(false);
                                console.log("Error:", error);
                            }); */
                    }
                }
            ],
            { cancelable: false }
        );
    }

    return (
        <NativeBaseProvider>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                colors={["#f0f2e5", "#f0f2e5", "#ffffff"]}
                flex={1}
            >
                <HStack space={3} alignItems={'center'} paddingY={5} paddingX={5}>
                    <Avatar borderColor={darkColor} resizeMode="contain" borderWidth="2" size="70" source={userData.profile_image == "" ? require('../assets/images/avatar.png') : { uri: userData.profile_image }}></Avatar>
                    <VStack flexWrap={'wrap'} width={'60%'}>
                        <Text color={darkColor} fontSize="md" fontFamily={fontBold}>{userData.name}</Text>
                        <HStack alignItems="center" space={1}>
                            <Icon name="call" size={14} color={darkColor} />
                            <Text color={darkColor} fontSize="sm" fontFamily={fontSemiBold}> {userData.mobile}</Text>
                        </HStack>
                        <HStack alignItems="center" space={1}>
                            <Text color={darkColor} fontSize="xs" fontFamily={fontRegular}>{t("Region")}:</Text>
                            <Text color={darkColor} fontSize="sm" fontFamily={fontBold}> {userData.region}</Text>
                        </HStack>
                        <HStack alignItems="center" space={1}>
                            <Text color={darkColor} fontSize="xs" fontFamily={fontRegular}>{t("RMO")}:</Text>
                            <Text color={darkColor} fontSize="sm" fontFamily={fontBold}> {userData.rmo}</Text>
                        </HStack>
                        <HStack alignItems="center" space={1}>
                            <Text color={darkColor} fontSize="xs" fontFamily={fontRegular}>{t("AO")}:</Text>
                            <Text color={darkColor} fontSize="sm" fontFamily={fontBold}> {userData.ao}</Text>
                        </HStack>
                    </VStack>
                </HStack>
                {userData.contactHier == "Influncer" && (
                    <HStack backgroundColor="#ffffff"
                        borderRadius={30}
                        width={'85%'}
                        alignSelf={'center'}
                        padding={2} justifyContent='center'>
                        <Text fontSize="sm">
                            {t("Available Point")}:  <Text fontFamily={fontBold}>{points} <Text fontSize="xs">Points</Text></Text>
                        </Text>
                    </HStack>
                )}
                <Stack padding={5} flex={1}>
                    <ScrollView>
                        {mainMenu.map((item, index) =>
                            <Pressable key={index} onPress={() => navigation.navigate(item.url)} padding={3} borderBottomWidth={0.5} borderColor={darkGrey}>
                                <HStack space={4} alignItems="center">
                                    <Icon name={item.icon} size={18} color={darkColor} />
                                    <Text color={darkColor} fontSize="sm" fontFamily={fontSemiBold}>{item.title}</Text>
                                </HStack>
                            </Pressable>
                        )}
                        <Pressable onPress={() => onLogout()} padding={3}>
                            <HStack space={4} alignItems="center">
                                <Icon name="power" size={18} color={darkColor} />
                                <Text color={darkColor} fontSize="sm" fontFamily={fontSemiBold}>{t("Logout")}</Text>
                            </HStack>
                        </Pressable>
                    </ScrollView>
                </Stack>
            </LinearGradient>
        </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    icon: { width: 60, height: 60, resizeMode: 'cover' },
    okbtn: { backgroundColor: '#f9d162', borderRadius: 50, overflow: 'hidden', width: '80%', justifyContent: 'center', alignItems: 'center', height: 45 },
    spincontainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' },
});

export default LeftMenuBarScreen;