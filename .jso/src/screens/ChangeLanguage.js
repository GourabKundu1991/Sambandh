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
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[8]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ChangeLanguageScreen = function ChangeLanguageScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState(''),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      orgDetails = _React$useState4[0],
      setOrgDetails = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      pageData = _React$useState6[0],
      setPageData = _React$useState6[1];
    var _React$useState7 = _react.default.useState('Eng'),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      currentLanguage = _React$useState8[0],
      setLanguage = _React$useState8[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
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
      });
      return unsubscribe;
    }, []);
    var onChangeLanguage = function onChangeLanguage() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("language_code", currentLanguage);
          fetch(`${_Config.BASE_URL}/change_profile_language`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("change_profile_language:", responseJson);
            if (responseJson.bstatus == 1) {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                navigation.goBack();
              }, 1000);
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                if (responseJson.msg_code == "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.navigate('Intro');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Intro');
        }
      });
    };
    var onSaveLang = function onSaveLang() {
      _asyncStorage.default.setItem('language', currentLanguage);
      _i18n.default.changeLanguage(currentLanguage).then(function () {
        return setLoading(true);
      }, onChangeLanguage()).catch(function (err) {
        return console.log(err);
      });
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Change Language"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden',
                paddingHorizontal: 30,
                paddingVertical: 50
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                textAlign: "center",
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                mb: 4,
                children: t("Select Language")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                  size: "md",
                  selectedValue: currentLanguage,
                  onValueChange: function onValueChange(value) {
                    return setLanguage(value);
                  },
                  placeholder: "Choose Language",
                  dropdownCloseIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "chevron-down-outline",
                    size: 20,
                    style: {
                      width: 25,
                      marginRight: 10
                    }
                  }),
                  dropdownOpenIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "chevron-up-outline",
                    size: 20,
                    style: {
                      width: 25,
                      marginRight: 10
                    }
                  }),
                  _selectedItem: {
                    bg: '#FFFFFF',
                    endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 20,
                      style: {
                        width: 25
                      },
                      color: _MainStyle.successColor
                    })
                  },
                  bg: "#FAFAFA",
                  borderRadius: 50,
                  px: 4,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "English",
                    value: "Eng"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Hindi",
                    value: "Hn"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Bengali",
                    value: "Bn"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Telugu",
                    value: "Te"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Tamil",
                    value: "Ta"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Malayalam",
                    value: "Ml"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: "Kannada",
                    value: "Kn"
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return onSaveLang();
            },
            width: '100%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Save")
            })
          })
        })]
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
  var _default = exports.default = ChangeLanguageScreen;
