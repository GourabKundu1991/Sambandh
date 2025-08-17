  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[8]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[11]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeImageSliderBox = _$$_REQUIRE(_dependencyMap[15]);
  var _reactNative2 = _$$_REQUIRE(_dependencyMap[16]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _native = _$$_REQUIRE(_dependencyMap[18]);
  var _reactNativeSnapCarousel = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[19]));
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[20]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[21]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var HomeScreen = function HomeScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var BannerWidth = _reactNative.Dimensions.get('window').width;
    var BannerHeight = 220;
    var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      orgDetails = _React$useState2[0],
      setOrgDetails = _React$useState2[1];
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];
    var _React$useState5 = _react.default.useState('Eng'),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      currentLanguage = _React$useState6[0],
      setLanguage = _React$useState6[1];
    var _Dimensions$get = _reactNative.Dimensions.get('window'),
      width = _Dimensions$get.width,
      height = _Dimensions$get.height;
    var _React$useState7 = _react.default.useState([]),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      allBanners = _React$useState8[0],
      setAllBanners = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      homeMenu = _React$useState10[0],
      setHomeMenu = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      profileData = _React$useState12[0],
      setProfileData = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      points = _React$useState14[0],
      setPoints = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      userType = _React$useState16[0],
      setUserType = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      cartcount = _React$useState18[0],
      setCartCount = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      customerCareNumber = _React$useState20[0],
      setCustomerCareNumber = _React$useState20[1];
    var _React$useState21 = _react.default.useState([]),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      totalMemberCounts = _React$useState22[0],
      setTotalMemberCounts = _React$useState22[1];
    var _React$useState23 = _react.default.useState(false),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      termsPop = _React$useState24[0],
      setTermsPop = _React$useState24[1];
    var _React$useState25 = _react.default.useState(false),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      agreedDoc = _React$useState26[0],
      setAgreedDoc = _React$useState26[1];
    var _React$useState27 = _react.default.useState(false),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      termsCheck = _React$useState28[0],
      setTermsCheck = _React$useState28[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
        _asyncStorage.default.getItem('language').then(function (val) {
          if (val != null) {
            setLanguage(val);
            _i18n.default.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          }
        });
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            fetch(`${_Config.BASE_URL}/get_dashboard_info`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("Dasboard:", responseJson);
              if (responseJson.bstatus === 1) {
                _Events.default.publish('mainMenu', responseJson.menu);
                setHomeMenu(responseJson.home_menu);
                setAllBanners(responseJson.banners);
                setTotalMemberCounts(responseJson.total_member_counts);
                setUserType(responseJson.contactHier);
                setCustomerCareNumber(responseJson.helpdesk_number);
                if (responseJson.tnc_acceptance_pending == 1) {
                  setTermsPop(true);
                }
                //setLoading(false);
                getProfileData();
              } else {
                setLoading(false);
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                if (responseJson.msg_code === "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.replace('Intro');
                }
              }
            }).catch(function (error) {
              setLoading(false);
              //console.log("Verify OTP Error:", error);
              _nativeBase.Toast.show({
                description: t("Sorry! Something went wrong. Maybe network request failed.")
              });
            });
          }
        });
      });
      return function getAllData() {
        return _ref2.apply(this, arguments);
      };
    }();
    var getProfileData = function getProfileData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Profile:", responseJson);
            if (responseJson.bstatus === 1) {
              _Events.default.publish('profileData', responseJson);
              setProfileData(responseJson.profile);
              setPoints(responseJson.available_point);
              setLoading(false);
            } else {
              setLoading(false);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              if (responseJson.msg_code === "msg_1000") {
                _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Verify OTP Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Something went wrong. Maybe network request failed.")
            });
          });
        }
      });
    };
    var openDialer = function openDialer() {
      _reactNative.Linking.openURL(`tel:${customerCareNumber}`);
    };
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
    var renderBanner = function renderBanner(_ref3) {
      var item = _ref3.item,
        index = _ref3.index;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          width: '92%',
          borderRadius: 30,
          overflow: 'hidden',
          borderColor: _MainStyle.lightColor,
          borderWidth: 3,
          marginBottom: 10,
          marginTop: 20
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return goBannerDetails(item);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
            style: {
              width: '100%',
              height: 150,
              resizeMode: 'cover'
            },
            source: item.image ? {
              uri: item.image
            } : _$$_REQUIRE(_dependencyMap[22])
          })
        })
      }, index);
    };
    var goMemberBase = function goMemberBase(itemType, itemName) {
      if (userType == "CSI" || userType == "CSH") {
        navigation.navigate("CsiCsoDetails", {
          baseType: itemType,
          pageName: itemName,
          user: userType
        });
      } else {
        navigation.navigate("MemberBase", {
          baseType: itemType,
          pageName: itemName,
          csoID: ""
        });
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          backgroundColor: orgDetails.color,
          padding: 15,
          borderBottomRadius: 30,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            paddingX: 4,
            borderRadius: 30,
            backgroundColor: _MainStyle.lightColor,
            alignItems: "center",
            justifyContent: 'space-between',
            width: '100%',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
              width: 30,
              onPress: function onPress() {
                return navigation.openDrawer(points);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "menu",
                size: 30,
                color: _MainStyle.darkColor
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: {
                uri: orgDetails.logo
              },
              style: {
                width: 150,
                height: 50
              },
              resizeMode: "contain"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
              width: 30,
              onPress: function onPress() {
                return onLogout();
              },
              paddingY: 2,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "power",
                size: 26,
                color: _MainStyle.darkColor
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSnapCarousel.default, {
              layout: "default",
              data: allBanners,
              sliderWidth: BannerWidth,
              itemWidth: BannerWidth,
              autoplay: true,
              loop: true,
              renderItem: renderBanner
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          children: [userType != "Influncer" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            paddingTop: 8,
            paddingBottom: 5,
            paddingX: 2,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
              horizontal: true,
              children: totalMemberCounts.map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: function onPress() {
                    return goMemberBase(item.type, item.name);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                    style: {
                      width: 150,
                      height: 100,
                      position: 'relative',
                      borderWidth: 2,
                      padding: 15,
                      marginHorizontal: 8,
                      borderColor: orgDetails.color,
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 20,
                      marginTop: 20
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: {
                        backgroundColor: orgDetails.color,
                        borderRadius: 30,
                        overflow: 'hidden',
                        position: 'absolute',
                        top: -20,
                        width: 100,
                        paddingVertical: 5,
                        zIndex: 99
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "md",
                        fontFamily: _MainStyle.fontBold,
                        color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                        textAlign: 'center',
                        children: item.count
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: 'center',
                      children: item.name
                    })]
                  })
                }, index);
              })
            })
          }), userType == "Influncer" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
            alignItems: 'center',
            marginY: 3,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
              style: {
                borderColor: _MainStyle.greyColor,
                borderWidth: 1,
                padding: 18,
                width: '85%',
                borderRadius: 50,
                marginTop: 40,
                position: 'relative'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                alignSelf: 'center',
                style: {
                  backgroundColor: orgDetails.color,
                  padding: 8,
                  width: '85%',
                  borderRadius: 50,
                  marginTop: -38
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                  fontSize: "md",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: 'center',
                  children: t("Available Points")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                marginTop: 3,
                fontSize: "xl",
                fontWeight: 'bold',
                textAlign: 'center',
                children: [points, /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "md",
                  fontWeight: 'normal',
                  children: t(" Points")
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
              style: {
                position: 'relative'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: {
                  width: '100%',
                  height: 2,
                  backgroundColor: _MainStyle.greyColor,
                  position: 'absolute',
                  top: 10
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  textAlign: 'center',
                  alignSelf: 'center',
                  width: 130,
                  backgroundColor: _MainStyle.lightColor,
                  paddingHorizontal: 10,
                  marginHorizontal: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: _MainStyle.darkColor
                },
                children: t("Quick Links")
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
              children: homeMenu.map(function (item, index) {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: function onPress() {
                    return navigation.navigate(item.link);
                  },
                  style: {
                    position: 'relative',
                    marginVertical: 5,
                    borderRadius: 30,
                    overflow: 'hidden',
                    width: '45%',
                    height: 200
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                    start: {
                      x: 0,
                      y: 0
                    },
                    colors: ["#f0f2e5", "#ffffff"],
                    flex: 1,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      p: 4,
                      space: 3,
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                        style: {
                          borderColor: orgDetails.color,
                          borderWidth: 1,
                          borderRadius: 20,
                          overflow: 'hidden',
                          width: 80,
                          height: 90,
                          justifyContent: 'center',
                          alignItems: 'center'
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: item.icon,
                          size: 40,
                          color: orgDetails.color
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        minHeight: 50,
                        fontSize: "sm",
                        fontFamily: _MainStyle.fontSemiBold,
                        color: _MainStyle.darkColor,
                        textAlign: 'center',
                        children: item.title
                      })]
                    })
                  })
                }, index);
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        style: styles.floatingButton,
        onPress: openDialer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
          name: "call",
          size: 28,
          color: "#fff"
        })
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.warningColor
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: _MainStyle.dangerColor,
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 6
    }
  });
  var _default = exports.default = HomeScreen;
