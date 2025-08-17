  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[5]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _i18n = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var LoginScreen = function LoginScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      orgDetails = _React$useState2[0],
      setOrgDetails = _React$useState2[1];
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width,
      height = _useWindowDimensions.height;
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
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      forOTP = _React$useState8[0],
      setForOTP = _React$useState8[1];
    var _React$useState9 = _react.default.useState(''),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      userCode = _React$useState10[0],
      setuserCode = _React$useState10[1];
    var _React$useState11 = _react.default.useState(''),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      otpValue = _React$useState12[0],
      setOtpValue = _React$useState12[1];
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      showLanguageDropdown = _React$useState14[0],
      setShowLanguageDropdown = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      userPhone = _React$useState16[0],
      setUserPhone = _React$useState16[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        //setLoading(true);
        setOrgDetails(route.params.loginData);
        _asyncStorage.default.getItem('language').then(function (val) {
          console.log("language: ", val);
          if (val != null) {
            setLanguage(val);
            _i18n.default.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          } else {
            onSaveLang(currentLanguage);
          }
        });
      });
      return unsubscribe;
    }, []);
    var onSaveLang = function onSaveLang(val) {
      setLanguage(val);
      _asyncStorage.default.setItem('language', val);
      _i18n.default.changeLanguage(val).then(function () {
        return setLoading(true);
      }).catch(function (err) {
        return console.log(err);
      });
      setTimeout(function () {
        setLoading(false);
      }, 500);
    };
    var sendOtp = function sendOtp() {
      setOtpValue("");
      _reactNative.Keyboard.dismiss();
      if (userCode.trim() === '') {
        _nativeBase.Toast.show({
          description: t("Please enter Member ID / Phone Number")
        });
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append("userCode", userCode);
        formdata.append("APIkey", `${_Config.API_KEY}`);
        formdata.append("orgId", orgDetails.id);
        fetch(`${_Config.BASE_URL}/generate_otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: formdata
        }).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          setLoading(false);
          console.log("Get OTP:", responseJson);
          _nativeBase.Toast.show({
            description: responseJson.message
          });
          if (responseJson.bstatus == 1) {
            setForOTP(true);
            setUserPhone(responseJson.mobileNumber);
          }
        }).catch(function (error) {
          setLoading(false);
          console.log("OTP Error:", error);
          //Toast.show({ description: t("Sorry! Something went wrong. Maybe network request failed.") });
        });
      }
    };
    var onVerify = function onVerify() {
      _reactNative.Keyboard.dismiss();
      if (otpValue.trim() === '') {
        _nativeBase.Toast.show({
          description: t("Please enter OTP Number")
        });
      } else {
        setLoading(true);
        var formdata = new FormData();
        formdata.append("otpVal", otpValue);
        formdata.append("os_type", `${_Config.OS_TYPE}`);
        formdata.append("os_version", `${_Config.APP_VERSION}`);
        formdata.append("language_code", currentLanguage);
        formdata.append("APIkey", `${_Config.API_KEY}`);
        formdata.append("orgId", orgDetails.id);
        formdata.append("mobileNumber", userPhone);
        fetch(`${_Config.BASE_URL}/validate_otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: formdata
        }).then(function (response) {
          return response.json();
        }).then(function (responseJson) {
          setLoading(false);
          console.log("Verify OTP:", responseJson);
          if (responseJson.bstatus == 1) {
            _asyncStorage.default.setItem('userToken', JSON.stringify(responseJson));
            _asyncStorage.default.setItem('loginType', JSON.stringify(orgDetails));
            navigation.replace('Home');
            setuserCode("");
            setOtpValue("");
          } else {
            _nativeBase.Toast.show({
              description: responseJson.message
            });
          }
        }).catch(function (error) {
          setLoading(false);
          //console.log("Verify OTP Error:", error);
          _nativeBase.Toast.show({
            description: t("Sorry! Something went wrong. Maybe network request failed.")
          });
        });
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: "#ffffff"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "5",
        paddingY: "3",
        space: 2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.goBack();
          },
          style: {
            width: 60
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "chevron-back",
            size: 26,
            color: "#111111"
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
        backgroundColor: orgDetails.color,
        flex: 1,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.ScrollView, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            flex: 1,
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
              colors: ["#ffffff", "#ffffff", "#f0f2e5"],
              flex: 1,
              style: {
                position: 'relative'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: _$$_REQUIRE(_dependencyMap[14]),
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
                alignItems: "center",
                justifyContent: 'center',
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: {
                    uri: orgDetails.logo
                  },
                  style: {
                    width: 200,
                    height: 50,
                    marginVertical: 40,
                    resizeMode: 'contain',
                    position: 'relative'
                  }
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                  source: _$$_REQUIRE(_dependencyMap[15]),
                  style: {
                    width: 350,
                    height: 230,
                    marginBottom: 60,
                    resizeMode: 'contain',
                    position: 'relative'
                  }
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            space: 3,
            padding: 15,
            alignItems: "center",
            justifyContent: 'center',
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 3,
              padding: 5,
              backgroundColor: "#FFFFFF80",
              borderRadius: 40,
              marginY: 5,
              width: '90%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkColor,
                fontFamily: _MainStyle.fontBold,
                fontSize: "14",
                textAlign: 'center',
                children: t('Login With MemberID / Phone Number')
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                space: 6,
                marginTop: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    size: "md",
                    variant: "unstyled",
                    onChangeText: function onChangeText(text) {
                      return setuserCode(text);
                    },
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "person",
                      size: 20,
                      color: "#000000",
                      style: {
                        width: 25,
                        marginLeft: 10
                      }
                    }),
                    placeholder: t("Member ID / Phone Number") + " *"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: [_MainStyle.MainStyle.solidbtn, {
                    backgroundColor: 'black'
                  }],
                  onPress: function onPress() {
                    return sendOtp();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "md",
                    children: t('Submit')
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
            onPress: function onPress() {
              return setShowLanguageDropdown(true);
            },
            style: {
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "sm",
              style: {
                position: 'relative'
              },
              children: [t("Want to Change Language"), "?"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              alignItems: 'center',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                fontFamily: _MainStyle.fontBold,
                fontSize: "md",
                style: {
                  position: 'relative'
                },
                children: t("Select Language")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                name: "chevron-down-circle",
                size: 20,
                color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor
              })]
            })]
          })]
        })
      }), showLanguageDropdown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          start: {
            x: 0,
            y: 0
          },
          colors: ["#ffffff", "#f0f2e5"],
          style: {
            position: 'relative',
            width: '80%',
            borderRadius: 20,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 6,
            padding: 10,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              style: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20
              },
              children: t("Select Language")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                size: "md",
                selectedValue: currentLanguage,
                onValueChange: function onValueChange(value) {
                  onSaveLang(value);
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.solidbtn, {
                backgroundColor: 'black',
                width: '100%'
              }],
              onPress: function onPress() {
                setShowLanguageDropdown(false);
                onSaveLang(currentLanguage);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                children: t('Continue')
              })
            })]
          })
        })
      }), forOTP && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          start: {
            x: 0,
            y: 0
          },
          colors: ["#ffffff", "#f0f2e5"],
          style: {
            position: 'relative',
            width: '80%',
            borderRadius: 20,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 6,
            padding: 10,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              style: {
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20
              },
              children: t("Enter OTP and Verify")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                value: otpValue,
                fontFamily: _MainStyle.fontBold,
                size: "md",
                variant: "unstyled",
                keyboardType: "number-pad",
                placeholder: t('Enter OTP *'),
                secureTextEntry: true,
                maxLength: 6,
                InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "key",
                  size: 20,
                  color: "#000000",
                  style: {
                    width: 25,
                    marginLeft: 10
                  }
                }),
                onChangeText: function onChangeText(text) {
                  return setOtpValue(text);
                }
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.solidbtn, {
                backgroundColor: 'black',
                width: '100%'
              }],
              onPress: function onPress() {
                return onVerify();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                children: t('Verify')
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Button, {
              variant: "unstyled",
              onPress: function onPress() {
                return sendOtp();
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.darkGrey,
                fontFamily: _MainStyle.fontBold,
                fontSize: "sm",
                textAlign: 'center',
                children: t('Not getting any OTP?')
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.warningColor,
                fontFamily: _MainStyle.fontBold,
                fontSize: "md",
                textAlign: 'center',
                children: t('Resend OTP')
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          style: {
            textAlign: 'center',
            zIndex: 1,
            borderWidth: 1,
            paddingHorizontal: 40,
            paddingVertical: 5,
            borderColor: _MainStyle.lightColor,
            borderRadius: 30,
            marginTop: 30
          },
          onPress: function onPress() {
            return setForOTP(false);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontSize: "sm",
            children: t('Cancel')
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
  var _default = exports.default = LoginScreen;
