  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _Config = _$$_REQUIRE(_dependencyMap[10]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MaterialIcons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var LeftMenuBarScreen = function LeftMenuBarScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState('Eng'),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      currentLanguage = _React$useState4[0],
      setLanguage = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      mainMenu = _React$useState6[0],
      setMainMenu = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      userData = _React$useState8[0],
      setUserData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      state = _React$useState10[0],
      setState = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      points = _React$useState12[0],
      setPoints = _React$useState12[1];
    var _Dimensions$get = _reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width,
      height = _Dimensions$get.height;
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      token = _React$useState14[0],
      setToken = _React$useState14[1];
    (0, _react.useEffect)(function () {
      _Events.default.subscribe('mainMenu', function (data) {
        setMainMenu(data);
      });
      _Events.default.subscribe('profileData', function (data) {
        setUserData(data.profile);
        setPoints(data.available_point);
      });
    }, []);
    var onLogout = function onLogout() {
      _reactNative.Alert.alert(t("Alert"), t("Are you sure to logout") + "?", [{
        text: t("Cancel"),
        onPress: function onPress() {
          return console.log("Cancel Pressed");
        },
        style: "cancel"
      }, {
        text: t("Yes"),
        onPress: function onPress() {
          /* setLoading(true);
          setLoading(false); */
          _asyncStorage.default.clear();
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
      }], {
        cancelable: false
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.NativeBaseProvider, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
        start: {
          x: 0,
          y: 0
        },
        colors: ["#f0f2e5", "#f0f2e5", "#ffffff"],
        flex: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          space: 3,
          alignItems: 'center',
          paddingY: 5,
          paddingX: 5,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
            borderColor: _MainStyle.darkColor,
            resizeMode: "contain",
            borderWidth: "2",
            size: "70",
            source: userData.profile_image == "" ? _$$_REQUIRE(_dependencyMap[14]) : {
              uri: userData.profile_image
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            flexWrap: 'wrap',
            width: '60%',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.darkColor,
              fontSize: "md",
              fontFamily: _MainStyle.fontBold,
              children: userData.name
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              space: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "call",
                size: 14,
                color: _MainStyle.darkColor
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "sm",
                fontFamily: _MainStyle.fontSemiBold,
                children: [" ", userData.mobile]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              space: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "xs",
                fontFamily: _MainStyle.fontRegular,
                children: [t("Region"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [" ", userData.region]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              space: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "xs",
                fontFamily: _MainStyle.fontRegular,
                children: [t("RMO"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [" ", userData.rmo]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              alignItems: "center",
              space: 1,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "xs",
                fontFamily: _MainStyle.fontRegular,
                children: [t("AO"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontSize: "sm",
                fontFamily: _MainStyle.fontBold,
                children: [" ", userData.ao]
              })]
            })]
          })]
        }), userData.contactHier == "Influncer" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
          backgroundColor: "#ffffff",
          borderRadius: 30,
          width: '85%',
          alignSelf: 'center',
          padding: 2,
          justifyContent: "center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            fontSize: "sm",
            children: [t("Available Point"), ":  ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              fontFamily: _MainStyle.fontBold,
              children: [points, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: "xs",
                children: "Points"
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          padding: 5,
          flex: 1,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
            children: [mainMenu.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                onPress: function onPress() {
                  return navigation.navigate(item.url);
                },
                padding: 3,
                borderBottomWidth: 0.5,
                borderColor: _MainStyle.darkGrey,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 4,
                  alignItems: "center",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: item.icon,
                    size: 18,
                    color: _MainStyle.darkColor
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "sm",
                    fontFamily: _MainStyle.fontSemiBold,
                    children: item.title
                  })]
                })
              }, index);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
              onPress: function onPress() {
                return onLogout();
              },
              padding: 3,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 4,
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "power",
                  size: 18,
                  color: _MainStyle.darkColor
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "sm",
                  fontFamily: _MainStyle.fontSemiBold,
                  children: t("Logout")
                })]
              })
            })]
          })
        })]
      })
    });
  };
  var styles = _reactNative.StyleSheet.create({
    icon: {
      width: 60,
      height: 60,
      resizeMode: 'cover'
    },
    okbtn: {
      backgroundColor: '#f9d162',
      borderRadius: 50,
      overflow: 'hidden',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 45
    },
    spincontainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    }
  });
  var _default = exports.default = LeftMenuBarScreen;
