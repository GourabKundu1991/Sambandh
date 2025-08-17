import { Box, HStack, Image, Stack, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { baseColor, baseColorB, baseColorC, baseDarkColor, baseLightColor, darkColor, fontBold, fontSemiBold, lightColor, MainStyle, rareColor, warningColor } from '../assets/MainStyle';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { secretKey } from '../auth_provider/Config';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const HeaderComponents = ({ navigation, themeColor, component, cartcount }) => {
  const { t } = useTranslation();

  const [userId, SetUserId] = React.useState('');
  useEffect(() => {
    AsyncStorage.getItem('userToken').then(val => {
      if (val != null) {
        var CryptoJS = require('crypto-js');
        const decryptData = CryptoJS.AES.decrypt(val, secretKey).toString(
          CryptoJS.enc.Utf8,
        );
        SetUserId(JSON.parse(decryptData).userCode);
        // SetNotificationCount(unreadCount);
      }
    });
  }, []);

  return (
    <VStack backgroundColor={themeColor} padding={15} borderBottomRadius={30}>
      <HStack padding={2} borderRadius={30} backgroundColor={lightColor} alignItems="center" justifyContent={'space-between'} width={'100%'}>
        <TouchableOpacity width={30} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color={darkColor} />
        </TouchableOpacity>
        <Text fontSize="md" fontFamily={fontBold} color={darkColor}>{component}</Text>
        {(component == 'Product Details' || component == 'Rewards') ?
          <TouchableOpacity style={{paddingRight: 8}} onPress={() => navigation.navigate('Cart')}>
            <Icon name="cart" size={30} color={darkColor} />
            {cartcount > 0 && (
              <View style={{ position: 'absolute', backgroundColor: 'red', borderRadius: 10, width: 18, height: 18, justifyContent: 'center', alignItems: 'center', top: -5, left: 0 }}>
                <Text style={{ color: lightColor, lineHeight: 14, fontSize: 12, fontWeight: 'bold' }}>{cartcount}</Text>
              </View>
            )}
          </TouchableOpacity>
          :
          <Box width={30}></Box>
        }
      </HStack>
      {/* <HStack  zIndex={999}  alignItems="center" justifyContent="space-between" paddingX="5" paddingY="3">
      <HStack space={4} alignItems="center" justifyContent={'center'}>
        <HStack alignItems="center" justifyContent={'center'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon as={Ionicons} name="chevron-back" size={35} color="black"/>
          </TouchableOpacity>
        </HStack>
        <Image source={require('../assets/images/Sambandh.png')} style={{ width: 90, height: 30, resizeMode: 'contain' }} /> 
      </HStack>
      <HStack space={2} alignItems="center">
        {(component == 'ProductDetails' || component == 'RewardsStore') && (
          <HStack alignItems="center" space={3} paddingRight={1}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart', { pageTitle: t("My Cart") })}>
              <Icon name="cart-outline" size={22} color={darkColor} />
              {cartcount > 0 && (
                <View style={{ position: 'absolute', backgroundColor: rareColor, borderRadius: 10, width: 18, height: 18, justifyContent: 'center', alignItems: 'center', top: -7, right: -7 }}>
                  <Text style={{ color: lightColor, lineHeight: 14, fontSize: 12, fontWeight: 'bold' }}>{cartcount}</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notification', { pageTitle: t("Notification") })}>
                <Icon name="notifications" size={22} color={rareColor} />
                <View style={{ position: 'absolute', backgroundColor: warningColor, borderRadius: 10, width: 15, height: 15, justifyContent: 'center', alignItems: 'center', top: -5, right: -5 }}>
                    <Text style={{ color: darkColor, fontSize: 10, lineHeight: 12, fontWeight: 'bold' }}>0</Text>
                </View>
            </TouchableOpacity>
          </HStack>
        )}
        <Image source={require('../assets/images/bannerBang.png')} style={{ width: 60, height: 30, resizeMode: 'contain' }} />
      </HStack>
    </HStack> */}
    </VStack>
  );
};

export default HeaderComponents;
