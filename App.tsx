/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ActionSheetIOS, Alert, AppState, AppStateStatus, BackHandler, LogBox, Modal, NativeModules, Platform, SafeAreaView } from 'react-native';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import LeftMenuBarScreen from './screens/LeftMenuBar';
import MyPurchaseScreen from './screens/MyPurchase';
import MyCartScreen from './screens/MyCart';
import ChangeLanguageScreen from './screens/ChangeLanguage';
import ProductDetailsScreen from './screens/ProductDetails';
import MyInfluencerScreen from './screens/MyInfluencer';
import ViewOrdersScreen from './screens/MyOrder';
import PointStatementScreen from './screens/PointStatement';
import IntroScreen from './screens/Intro';
import ViewProfileScreen from './screens/MyProfile';
import RewardsCateScreen from './screens/RewardsCategory';
import OrderDetailsScreen from './screens/OrderDetails';
import PurchaseRegistrationScreen from './screens/PurchaseRegistration';
import InfluencerDetailsScreen from './screens/InfluencerDetails';
import PurchaseDetailsScreen from './screens/PurchaseDetails';
import PanUploadScreen from './screens/PanUpload';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';
import TermsConditionsScreen from './screens/TermsConditions';
import FAQScreen from './screens/FAQ';
import CounterChangeScreen from './screens/CounterChange';
import ApprovePurchaseScreen from './screens/ApprovePurchase';
import RegisterInfluencerScreen from './screens/RegisterInfluencer';
import MemberBaseScreen from './screens/MemberBase';
import MemberBaseDetailsScreen from './screens/MemberBaseDetails';
import InfluencerRedemptionsScreen from './screens/InfluencerRedemptions';
import ApproveInfluencerScreen from './screens/ApproveInfluencers';
import ComplaintListScreen from './screens/ComplaintList';
import AddressScreen from './screens/Address';
import CsiCsoDetailsScreen from './screens/CsiCsoDetails';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const App = () => {

  useEffect(() => {
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`',
      'Sending `onAnimatedValueUpdate` with no listeners registered.',
      'Please pass alt prop to Image component',
    ]);
  }, []);

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MyPurchases" component={MyPurchaseScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyProfile" component={ViewProfileScreen} />
        <Stack.Screen name="MyInfluencers" component={MyInfluencerScreen} />
        <Stack.Screen name="InfluencerDetails" component={InfluencerDetailsScreen} />
        <Stack.Screen name="ApprovePurchase" component={ApprovePurchaseScreen} />
        <Stack.Screen name="PurchaseDetails" component={PurchaseDetailsScreen} />
        <Stack.Screen name="RewardsCatalogue" component={RewardsCateScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Cart" component={MyCartScreen} />
        <Stack.Screen name="PurchaseRegistration" component={PurchaseRegistrationScreen} />
        <Stack.Screen name="Language" component={ChangeLanguageScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
        <Stack.Screen name="MyOrder" component={ViewOrdersScreen} />
        <Stack.Screen name="PointStatement" component={PointStatementScreen} />
        <Stack.Screen name="PanUplode" component={PanUploadScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsAndConditions" component={TermsConditionsScreen}/>
        <Stack.Screen name="FAQ" component={FAQScreen} />
        <Stack.Screen name="CounterInfluencers" component={CounterChangeScreen} />
        <Stack.Screen name="RegisterInfluencers" component={RegisterInfluencerScreen} />
        <Stack.Screen name="MemberBase" component={MemberBaseScreen} />
        <Stack.Screen name="MemberBaseDetails" component={MemberBaseDetailsScreen} />
        <Stack.Screen name="InfluencerRedemptions" component={InfluencerRedemptionsScreen} />
        <Stack.Screen name="ApproveInfluencers" component={ApproveInfluencerScreen} />
        <Stack.Screen name="ComplaintList" component={ComplaintListScreen} />
        <Stack.Screen name="Address" component={AddressScreen} /> 
        <Stack.Screen name="CsiCsoDetails" component={CsiCsoDetailsScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <Drawer.Navigator
          drawerContent={props => <LeftMenuBarScreen {...props} />}>
          <Drawer.Screen
            name="Welcome"
            options={{ headerShown: false, swipeEnabled: false }}
            component={MyStack}
          />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );

};

export default App;
