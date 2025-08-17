  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _Config = _$$_REQUIRE(_dependencyMap[5]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[9]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var IntroScreen = function IntroScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      versionFound = _React$useState4[0],
      setVersionFound = _React$useState4[1];
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      storeUrl = _React$useState6[0],
      setStoreUrl = _React$useState6[1];
    var _React$useState7 = _react.default.useState('Eng'),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      currentLanguage = _React$useState8[0],
      setLanguage = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      infoDetails = _React$useState10[0],
      setInfoDetails = _React$useState10[1];
    (0, _react.useEffect)(function () {
      setLoading(true);
      var formdata = new FormData();
      formdata.append("APIkey", `${_Config.API_KEY}`);
      formdata.append("app_ver", `${_Config.APP_VERSION}`);
      formdata.append("os_type", `${_Config.OS_TYPE}`);
      fetch(`${_Config.BASE_URL}/app_version_check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        console.log("Version Check:", responseJson);
        if (responseJson.version_details.update_available == 0) {
          _asyncStorage.default.getItem('userToken').then(function (val) {
            if (val != null) {
              setLoading(false);
              navigation.replace('Home');
            } else {
              getAllData();
            }
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          setStoreUrl(responseJson.version_details.store_url);
          setVersionFound(true);
        }
      }).catch(function (error) {
        setLoading(false);
        console.log("Version Check Error:", error);
      });
    }, []);
    var getAllData = function getAllData() {
      var formdata = new FormData();
      formdata.append("APIkey", `${_Config.API_KEY}`);
      formdata.append("app_ver", `${_Config.APP_VERSION}`);
      formdata.append("os_type", `${_Config.OS_TYPE}`);
      fetch(`${_Config.BASE_URL}/besic_info`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        console.log("besic_info Check:", responseJson);
        setLoading(false);
        if (responseJson.bstatus == 1) {
          setInfoDetails(responseJson.info);
        } else {
          setInfoDetails([]);
        }
      }).catch(function (error) {
        setLoading(false);
        console.log("besic_info Error:", error);
      });
    };
    var onContinueForVerssion = function onContinueForVerssion() {
      _reactNative.Linking.openURL(storeUrl);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: "#ffffff"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        backgroundColor: "#ffffff",
        flex: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          flex: 1,
          backgroundColor: "#ffffff",
          style: {
            overflow: 'hidden',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
            start: {
              x: 0,
              y: 0
            },
            colors: ["#ffffff", "#f0f2e5", "#f0f2e5"],
            flex: 1,
            style: {
              position: 'relative'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[12]),
              style: {
                width: '100%',
                opacity: 0.15,
                height: 120,
                resizeMode: 'cover',
                position: 'absolute',
                bottom: 0
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[13]),
              style: {
                width: 80,
                opacity: 0.08,
                height: '100%',
                resizeMode: 'contain',
                position: 'absolute',
                top: 0,
                left: 0
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              flex: 1,
              space: 5,
              alignItems: "center",
              justifyContent: 'center',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[14]),
                style: {
                  width: 200,
                  height: 200,
                  resizeMode: 'contain',
                  position: 'relative'
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[15]),
                style: {
                  width: 350,
                  height: 230,
                  marginVertical: 40,
                  resizeMode: 'contain',
                  position: 'relative'
                }
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          space: 3,
          padding: 5,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: 'center',
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.darkColor,
            fontFamily: _MainStyle.fontBold,
            fontSize: "md",
            textAlign: "center",
            children: t('Choose Brand to Continue Login')
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
            space: 4,
            justifyContent: "center",
            children: infoDetails.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  borderWidth: 10,
                  borderRadius: 40,
                  height: 60,
                  width: '100%`',
                  borderColor: item.color,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                onPress: function onPress() {
                  return navigation.navigate('Login', {
                    loginData: item
                  });
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: {
                    uri: item.logo
                  },
                  style: {
                    width: item.name == "Zuari" ? 130 : 90,
                    height: 35
                  },
                  resizeMode: "contain"
                })
              }, index);
            })
          })]
        })]
      }), versionFound && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
          backgroundColor: "#ffffff",
          style: {
            width: '70%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingY: "10",
            paddingX: "5",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: _$$_REQUIRE(_dependencyMap[14]),
              style: {
                height: 150,
                resizeMode: 'contain'
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              mt: 5,
              mb: 3,
              fontSize: "xl",
              fontWeight: "bold",
              color: "#111111",
              children: [t('Update Warning'), "!"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t('App need Update to the Latest Version. Please click on Update Now button to Continue'), "..."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 150,
                borderRadius: 8,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return onContinueForVerssion();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t('Update Now')
              })
            })]
          })
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = IntroScreen;
