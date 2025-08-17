  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  _$$_REQUIRE(_dependencyMap[1]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _native = _$$_REQUIRE(_dependencyMap[3]);
  var _stack = _$$_REQUIRE(_dependencyMap[4]);
  var _drawer = _$$_REQUIRE(_dependencyMap[5]);
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Login = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _Home = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _LeftMenuBar = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MyPurchase = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _MyCart = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _ChangeLanguage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _ProductDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _MyInfluencer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _MyOrder = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _PointStatement = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _Intro = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _MyProfile = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[18]));
  var _RewardsCategory = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[19]));
  var _OrderDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[20]));
  var _PurchaseRegistration = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[21]));
  var _InfluencerDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[22]));
  var _PurchaseDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[23]));
  var _PanUpload = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[24]));
  var _PrivacyPolicy = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[25]));
  var _TermsConditions = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[26]));
  var _FAQ = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[27]));
  var _CounterChange = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[28]));
  var _ApprovePurchase = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[29]));
  var _RegisterInfluencer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[30]));
  var _MemberBase = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[31]));
  var _MemberBaseDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[32]));
  var _InfluencerRedemptions = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[33]));
  var _ApproveInfluencers = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[34]));
  var _ComplaintList = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[35]));
  var _Address = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[36]));
  var _CsiCsoDetails = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[37]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[38]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   *
   * @format
   */

  // import DealerInfoScreen from './screens/DealerInformation';
  // import AboutProgramScreen from './screens/AboutProgram';
  // import ContactUsScreen from './screens/Helpdesk';

  // import AddressScreen from './screens/Address';

  // import GalleryScreen from './screens/Gallery';
  // import GalleryDetailsScreen from './screens/GalleryDetails';
  // import AddAddressScreen from './screens/AddAddress';
  // import PerformanceScreen from './screens/Performance';

  // import MyPointsScreen from './screens/MyPoints';

  var Stack = (0, _stack.createStackNavigator)();
  var Drawer = (0, _drawer.createDrawerNavigator)();
  var SecurityServiceManager = _reactNative.NativeModules.SecurityServiceManager;
  var App = function App() {
    (0, _react.useEffect)(function () {
      _reactNative.LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'Sending `onAnimatedValueUpdate` with no listeners registered.', 'Please pass alt prop to Image component']);
    }, []);
    function MyStack() {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Stack.Navigator, {
        initialRouteName: "Intro",
        screenOptions: {
          headerShown: false
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Intro",
          component: _Intro.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Login",
          component: _Login.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyPurchases",
          component: _MyPurchase.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Home",
          component: _Home.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyProfile",
          component: _MyProfile.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyInfluencers",
          component: _MyInfluencer.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "InfluencerDetails",
          component: _InfluencerDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ApprovePurchase",
          component: _ApprovePurchase.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PurchaseDetails",
          component: _PurchaseDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RewardsCatalogue",
          component: _RewardsCategory.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ProductDetails",
          component: _ProductDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Cart",
          component: _MyCart.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PurchaseRegistration",
          component: _PurchaseRegistration.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Language",
          component: _ChangeLanguage.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "OrderDetails",
          component: _OrderDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MyOrder",
          component: _MyOrder.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PointStatement",
          component: _PointStatement.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PanUplode",
          component: _PanUpload.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "PrivacyPolicy",
          component: _PrivacyPolicy.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "TermsAndConditions",
          component: _TermsConditions.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "FAQ",
          component: _FAQ.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "CounterInfluencers",
          component: _CounterChange.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "RegisterInfluencers",
          component: _RegisterInfluencer.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MemberBase",
          component: _MemberBase.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "MemberBaseDetails",
          component: _MemberBaseDetails.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "InfluencerRedemptions",
          component: _InfluencerRedemptions.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ApproveInfluencers",
          component: _ApproveInfluencers.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "ComplaintList",
          component: _ComplaintList.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "Address",
          component: _Address.default
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Stack.Screen, {
          name: "CsiCsoDetails",
          component: _CsiCsoDetails.default
        })]
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_native.NavigationContainer, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
        style: {
          flex: 1
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Drawer.Navigator, {
          drawerContent: function drawerContent(props) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LeftMenuBar.default, Object.assign({}, props));
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Drawer.Screen, {
            name: "Welcome",
            options: {
              headerShown: false,
              swipeEnabled: false
            },
            component: MyStack
          })
        })
      })
    });
  };
  var _default = exports.default = App;
