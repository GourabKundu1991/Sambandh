import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import { Alert, Box, Button, HStack, Input, NativeBaseProvider, ScrollView, Select, Stack, Text, Toast, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, Keyboard, Linking, Pressable, Dimensions, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { APP_VERSION, BASE_URL, OS_TYPE, API_KEY } from '../auth_provider/Config';
import { useTranslation } from 'react-i18next';
import { MainStyle, baseColor, baseDarkColor, baseLightColor, dangerColor, darkColor, darkGrey, fontBold, fontRegular, fontSemiBold, greyColor, lightColor, lightGrey, rareColor, successColor, warningColor } from '../assets/MainStyle';
import i18n from '../assets/language/i18n';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation, route }) => {

  const [orgDetails, setOrgDetails] = React.useState('');

  const { width, height } = useWindowDimensions();
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [currentLanguage, setLanguage] = React.useState('Eng');
  const [forOTP, setForOTP] = React.useState(false);
  const [userCode, setuserCode] = React.useState('');
  const [otpValue, setOtpValue] = React.useState('');
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false);

  const [userPhone, setUserPhone] = React.useState("");


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //setLoading(true);
      setOrgDetails(route.params.loginData);
      AsyncStorage.getItem('language').then(val => {
        console.log("language: ", val);
        if (val != null) {
          setLanguage(val);
          i18n
            .changeLanguage(val)
            .then(() => console.log(val))
            .catch(err => console.log(err));
        } else {
          onSaveLang(currentLanguage);
        }
      });
    });
    return unsubscribe;
  }, []);

  const onSaveLang = (val) => {
    setLanguage(val);
    AsyncStorage.setItem('language', val);
    i18n
      .changeLanguage(val)
      .then(() => setLoading(true))
      .catch(err => console.log(err));
    setTimeout(function () {
      setLoading(false);
    }, 500);
  };

  const sendOtp = () => {
    setOtpValue("");
    Keyboard.dismiss();
    if (userCode.trim() === '') {
      Toast.show({ description: t("Please enter Member ID / Phone Number") });
    } else {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("userCode", userCode);
      formdata.append("APIkey", `${API_KEY}`);
      formdata.append("orgId", orgDetails.id);
      fetch(`${BASE_URL}/generate_otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formdata
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          console.log("Get OTP:", responseJson);
          Toast.show({ description: responseJson.message });
          if (responseJson.bstatus == 1) {
            setForOTP(true);
            setUserPhone(responseJson.mobileNumber);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log("OTP Error:", error);
          //Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
        });
    }
  };

  const onVerify = () => {
    Keyboard.dismiss();
    if (otpValue.trim() === '') {
      Toast.show({ description: t("Please enter OTP Number") });
    } else {
      setLoading(true);
      let formdata = new FormData();
      formdata.append("otpVal", otpValue);
      formdata.append("os_type", `${OS_TYPE}`);
      formdata.append("os_version", `${APP_VERSION}`);
      formdata.append("language_code", currentLanguage);
      formdata.append("APIkey", `${API_KEY}`);
      formdata.append("orgId", orgDetails.id);
      formdata.append("mobileNumber", userPhone);

      fetch(`${BASE_URL}/validate_otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formdata
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          console.log("Verify OTP:", responseJson);
          if (responseJson.bstatus == 1) {
            AsyncStorage.setItem('userToken', JSON.stringify(responseJson));
            AsyncStorage.setItem('loginType', JSON.stringify(orgDetails));
            navigation.replace('Home');
            setuserCode("");
            setOtpValue("");
          } else {
            Toast.show({ description: responseJson.message });
          }
        })
        .catch((error) => {
          setLoading(false);
          //console.log("Verify OTP Error:", error);
          Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
        });
    }
  };

  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
      <ScrollView automaticallyAdjustKeyboardInsets={true} backgroundColor={orgDetails.color}>
        <HStack backgroundColor={lightColor} justifyContent="space-between" alignItems="center" paddingX="5" paddingY="3" space={2}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 60 }}>
            <Icon name="chevron-back" size={26} color="#111111" />
          </TouchableOpacity>
        </HStack>
        <VStack backgroundColor={orgDetails.color} flex={1}>
          <VStack flex={1} style={{ overflow: 'hidden', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              colors={["#ffffff", "#ffffff", "#f0f2e5"]}
              flex={1}
              style={{ position: 'relative' }}
            >
              <Image source={require('../assets/images/heidel.png')} style={{ width: 80, opacity: 0.08, height: '100%', resizeMode: 'contain', position: 'absolute', top: 0, left: 0 }} />
              <VStack flex={1} alignItems="center" justifyContent={'center'}>
                <Image source={{ uri: orgDetails.logo }} style={{ width: 200, height: 50, marginVertical: 40, resizeMode: 'contain', position: 'relative', }} />
                <Image source={require('../assets/images/building.png')} style={{ width: 350, height: 230, marginBottom: 60, resizeMode: 'contain', position: 'relative', }} />
              </VStack>
            </LinearGradient>
          </VStack>
          <VStack space={3} padding={15} alignItems="center" justifyContent={'center'}>
            <VStack space={3} padding={5} backgroundColor="#FFFFFF80" borderRadius={40} marginY={5} width={'90%'}>
              <Text color={darkColor} fontFamily={fontBold} fontSize="14" textAlign={'center'}>{t('Login With MemberID / Phone Number')}</Text>
              <Stack space={6} marginTop={2}>
                <View style={MainStyle.inputbox}>
                  <Input size="md" variant="unstyled" onChangeText={text => setuserCode(text)} InputLeftElement={<Icon name="person" size={20} color="#000000" style={{ width: 25, marginLeft: 10 }} />} placeholder={t("Member ID / Phone Number") + " *"} />
                </View>
                <Button style={[MainStyle.solidbtn, { backgroundColor: 'black' }]} onPress={() => sendOtp()}>
                  <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Submit')}</Text>
                </Button>
              </Stack>
            </VStack>
          </VStack>
          <TouchableOpacity onPress={() => setShowLanguageDropdown(true)} style={{ alignItems: 'center' }}>
            <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize={"sm"} style={{ position: 'relative' }}>{t("Want to Change Language")}?</Text>
            <HStack space={1} alignItems={'center'}>
              <Text color={orgDetails.name == "Zuari" ? darkColor : lightColor} fontFamily={fontBold} fontSize={"md"} style={{ position: 'relative' }}>{t("Select Language")}</Text>
              <Icon name="chevron-down-circle" size={20} color={orgDetails.name == "Zuari" ? darkColor : lightColor}
              />
            </HStack>
          </TouchableOpacity>
        </VStack>
      </ScrollView>
      {showLanguageDropdown && (
        <View style={MainStyle.spincontainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            colors={["#ffffff", "#f0f2e5"]}
            style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
          >
            <VStack space={6} padding={10} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
                {t("Select Language")}
              </Text>
              <View style={MainStyle.inputbox}>
                <Select
                  size="md"
                  selectedValue={currentLanguage}
                  onValueChange={value => {
                    onSaveLang(value);
                  }}
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
              <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => { setShowLanguageDropdown(false); onSaveLang(currentLanguage); }}>
                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Continue')}</Text>
              </Button>
            </VStack>
          </LinearGradient>
        </View>
      )}
      {forOTP && (
        <View style={MainStyle.spincontainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            colors={["#ffffff", "#f0f2e5"]}
            style={{ position: 'relative', width: '80%', borderRadius: 20, overflow: 'hidden' }}
          >
            <VStack space={6} padding={10} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
                {t("Enter OTP and Verify")}
              </Text>
              <View style={MainStyle.inputbox}>
                <Input value={otpValue} fontFamily={fontBold} size="md" variant="unstyled" keyboardType="number-pad" placeholder={t('Enter OTP *')} secureTextEntry={true} maxLength={6}
                  InputLeftElement={<Icon name="key" size={20} color="#000000" style={{ width: 25, marginLeft: 10 }} />} onChangeText={text => setOtpValue(text)} />
              </View>
              <Button style={[MainStyle.solidbtn, { backgroundColor: 'black', width: '100%' }]} onPress={() => onVerify()}>
                <Text color={lightColor} fontFamily={fontSemiBold} fontSize="md">{t('Verify')}</Text>
              </Button>
              <Button variant="unstyled" onPress={() => sendOtp()}>
                <Text color={darkGrey} fontFamily={fontBold} fontSize="sm" textAlign={'center'}>{t('Not getting any OTP?')}</Text>
                <Text color={warningColor} fontFamily={fontBold} fontSize="md" textAlign={'center'}>{t('Resend OTP')}</Text>
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
            onPress={() => setForOTP(false)}
          >
            <Text color={lightColor} fontSize="sm">{t('Cancel')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {loading && (
        <View style={MainStyle.spincontainer}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={warningColor}
          />
        </View>
      )}
    </NativeBaseProvider>
  );

}

export default LoginScreen;