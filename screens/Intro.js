import {
  Button,
  NativeBaseProvider,
  Select,
  Stack,
  Text,
  VStack,
  HStack
} from 'native-base';
import React, { useEffect } from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Image,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  API_KEY,
  APP_VERSION,
  AccessToken,
  BASE_URL,
  OS_TYPE,
  URL,
  hashKey,
} from '../auth_provider/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n';
import {
  MainStyle,
  baseColor,
  dangerColor,
  darkColor,
  darkGrey,
  fontBold,
  fontRegular,
  fontSemiBold,
  greyColor,
  lightColor,
  successColor,
  warningColor,
} from '../assets/MainStyle';
import LinearGradient from 'react-native-linear-gradient';


const IntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);
  const [versionFound, setVersionFound] = React.useState(false);
  const [storeUrl, setStoreUrl] = React.useState('');
  const [currentLanguage, setLanguage] = React.useState('Eng');

  const [infoDetails, setInfoDetails] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    let formdata = new FormData();
    formdata.append("APIkey", `${API_KEY}`);
    formdata.append("app_ver", `${APP_VERSION}`);
    formdata.append("os_type", `${OS_TYPE}`);
    fetch(`${BASE_URL}/app_version_check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Version Check:", responseJson);
        if (responseJson.version_details.update_available == 0) {
          AsyncStorage.getItem('userToken').then(val => {
            if (val != null) {
              setLoading(false);
              navigation.replace('Home');
            } else {
              getAllData();
            }
          });
        } else {
          setLoading(false);
          AsyncStorage.clear();
          setStoreUrl(responseJson.version_details.store_url);
          setVersionFound(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Version Check Error:", error);
      });
  }, []);

  const getAllData = () => {
    let formdata = new FormData();
    formdata.append("APIkey", `${API_KEY}`);
    formdata.append("app_ver", `${APP_VERSION}`);
    formdata.append("os_type", `${OS_TYPE}`);

    fetch(`${BASE_URL}/besic_info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formdata
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("besic_info Check:", responseJson);
        setLoading(false);
        if (responseJson.bstatus == 1) {
          setInfoDetails(responseJson.info);
        } else {
          setInfoDetails([]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("besic_info Error:", error);
      });
  }

  const onContinueForVerssion = () => {
    Linking.openURL(storeUrl);
  };


  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" backgroundColor={"#ffffff"} />
      <VStack backgroundColor={"#ffffff"} flex={1}>
        <VStack flex={1} backgroundColor={"#ffffff"} style={{ overflow: 'hidden', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            colors={["#ffffff", "#f0f2e5", "#f0f2e5"]}
            flex={1}
            style={{ position: 'relative' }}
          >
            <Image source={require('../assets/images/bg.png')} style={{ width: '100%', opacity: 0.15, height: 120, resizeMode: 'cover', position: 'absolute', bottom: 0 }} />
            <Image source={require('../assets/images/heidel.png')} style={{ width: 80, opacity: 0.08, height: '100%', resizeMode: 'contain', position: 'absolute', top: 0, left: 0 }} />
            <VStack flex={1} space={5} alignItems="center" justifyContent={'center'}>
              <Image source={require('../assets/images/logo.png')} style={{ width: 200, height: 200, resizeMode: 'contain', position: 'relative', }} />
              <Image source={require('../assets/images/building.png')} style={{ width: 350, height: 230, marginVertical: 40, resizeMode: 'contain', position: 'relative', }} />
            </VStack>
          </LinearGradient>
        </VStack>
        <VStack space={3} padding={5} backgroundColor={"#ffffff"} alignItems="center" justifyContent={'center'}>
          <Text color={darkColor} fontFamily={fontBold} fontSize="md" textAlign="center">
            {t('Choose Brand to Continue Login')}
          </Text>
          <HStack space={4} justifyContent="center">
            {infoDetails.map((item, index) => (
              <TouchableOpacity key={index}
                style={{
                  backgroundColor: lightColor, borderWidth: 10, borderRadius: 40, height: 60, width: '100%`',
                  borderColor: item.color,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() =>
                  navigation.navigate('Login', { loginData: item })}
              >
                <Image
                  source={{ uri: item.logo }} style={{ width: item.name == "Zuari" ? 130 : 90, height: 35 }} resizeMode="contain" />
              </TouchableOpacity>
            ))}
          </HStack>
        </VStack>
      </VStack>
      {versionFound && (
        <View style={MainStyle.spincontainer}>
          <Stack
            backgroundColor="#ffffff"
            style={{ width: '70%', borderRadius: 10, overflow: 'hidden' }}>
            <VStack space={1} w="100%" paddingY="10" paddingX="5" alignItems="center" justifyContent="center">
              <Image
                source={require('../assets/images/logo.png')}
                style={{ height: 150, resizeMode: 'contain' }}
              />
              <Text mt={5} mb={3} fontSize="xl" fontWeight="bold" color="#111111">
                {t('Update Warning')}!
              </Text>
              <Text textAlign="center" fontSize="sm" fontWeight="medium" color="#111111" mb={3}>
                {t(
                  'App need Update to the Latest Version. Please click on Update Now button to Continue',
                )}
                ...
              </Text>
              <Button
                size="sm"
                style={{
                  backgroundColor: '#111111',
                  width: 150,
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
                onPress={() => onContinueForVerssion()}
                marginY={4}>
                <Text color="#ffffff" fontSize="sm" fontWeight="medium">
                  {t('Update Now')}
                </Text>
              </Button>
            </VStack>
          </Stack>
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
};

const styles = StyleSheet.create({});

export default IntroScreen;
