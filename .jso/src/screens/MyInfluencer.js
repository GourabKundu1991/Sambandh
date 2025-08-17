  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _datetimepicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[14]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[18]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MyInfluencerScreen = function MyInfluencerScreen(_ref) {
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
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      influencers = _React$useState4[0],
      setInfluencers = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      searchTerm = _React$useState6[0],
      setSearchTerm = _React$useState6[1];
    var _React$useState7 = _react.default.useState(''),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      orgDetails = _React$useState8[0],
      setOrgDetails = _React$useState8[1];
    var _React$useState9 = _react.default.useState('All'),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      filtterStatus = _React$useState10[0],
      setfiltterStatus = _React$useState10[1];
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
            i18n.changeLanguage(val).then(function () {
              return console.log(val);
            }).catch(function (err) {
              return console.log(err);
            });
          }
        });
        getAllData(filtterStatus);
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(status) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("searchText", searchTerm);
          formdata.append("filter", status);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/my_influncer`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("my_influncer:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setInfluencers(responseJson.influncers);
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
    var onFiltter = function onFiltter(type) {
      setfiltterStatus(type);
      setLoading(true);
      getAllData(type);
    };
    var onSearch = function onSearch() {
      setLoading(true);
      getAllData(filtterStatus);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("My Influencers"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                fontFamily: _MainStyle.fontBold,
                size: "md",
                variant: "unstyled",
                placeholder: t('ID / Name / Phone'),
                InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "search",
                  size: 20,
                  color: "#000000",
                  style: {
                    width: 25,
                    marginLeft: 10
                  }
                }),
                onChangeText: function onChangeText(text) {
                  return setSearchTerm(text);
                },
                InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: [_MainStyle.MainStyle.solidbtn, {
                    backgroundColor: 'black',
                    width: 90
                  }],
                  onPress: function onPress() {
                    return onSearch();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Search')
                  })
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: 'outline',
                backgroundColor: filtterStatus == "All" ? _MainStyle.darkColor : _MainStyle.lightColor,
                size: 'sm',
                style: {
                  minWidth: 70
                },
                borderRadius: 30,
                overflow: 'hidden',
                borderColor: _MainStyle.darkColor,
                onPress: function onPress() {
                  return onFiltter('All');
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: filtterStatus == "All" ? _MainStyle.lightColor : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold,
                  fontSize: "sm",
                  children: t('All')
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: 'outline',
                backgroundColor: filtterStatus == 1 ? _MainStyle.darkColor : _MainStyle.lightColor,
                size: 'sm',
                style: {
                  minWidth: 70
                },
                borderRadius: 30,
                overflow: 'hidden',
                borderColor: _MainStyle.darkColor,
                onPress: function onPress() {
                  return onFiltter(1);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: filtterStatus == 1 ? _MainStyle.lightColor : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold,
                  fontSize: "sm",
                  children: t('Approved')
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: 'outline',
                backgroundColor: filtterStatus == 0 ? _MainStyle.darkColor : _MainStyle.lightColor,
                size: 'sm',
                style: {
                  minWidth: 70
                },
                borderRadius: 30,
                overflow: 'hidden',
                borderColor: _MainStyle.darkColor,
                onPress: function onPress() {
                  return onFiltter(0);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: filtterStatus == 0 ? _MainStyle.lightColor : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold,
                  fontSize: "sm",
                  children: t('Pending')
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: 'outline',
                backgroundColor: filtterStatus == 2 ? _MainStyle.darkColor : _MainStyle.lightColor,
                size: 'sm',
                style: {
                  minWidth: 70
                },
                borderRadius: 30,
                overflow: 'hidden',
                borderColor: _MainStyle.darkColor,
                onPress: function onPress() {
                  return onFiltter(2);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: filtterStatus == 2 ? _MainStyle.lightColor : _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold,
                  fontSize: "sm",
                  children: t('Rejected')
                })
              })]
            }), influencers.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden',
                paddingLeft: 20,
                paddingRight: 20,
                paddingVertical: 20
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                justifyContent: 'center',
                alignItems: 'center',
                height: 400,
                padding: 10,
                space: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "hourglass-outline",
                  size: 80,
                  color: orgDetails.color
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "xl",
                  color: _MainStyle.darkColor,
                  fontFamily: _MainStyle.fontBold,
                  children: t("Result Not Found")
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "sm",
                  color: _MainStyle.darkGrey,
                  fontFamily: _MainStyle.fontBold,
                  textAlign: 'center',
                  children: t("Whoops... This information is not available for a moment")
                })]
              })
            }), influencers.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#f0f2e5", "#ffffff"],
                flex: 1,
                style: {
                  borderRadius: 30,
                  overflow: 'hidden',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingVertical: 20
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    backgroundColor: _MainStyle.lightColor,
                    paddingY: 3,
                    paddingX: 5,
                    borderRadius: 30,
                    overflow: 'hidden',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkGrey,
                      fontFamily: _MainStyle.fontBold,
                      children: t("Influencer ID")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: item.id
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      paddingX: 3,
                      width: '70%',
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "md",
                        color: _MainStyle.darkColor,
                        fontFamily: _MainStyle.fontBold,
                        children: item.name
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Category"), ": ", item.category]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Date"), ": ", (0, _moment.default)(item.enrollment_date).format("DD-MM-YYYY")]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                        style: {
                          marginTop: 10
                        },
                        onPress: function onPress() {
                          return Linking.openURL(`tel:${item.ph_number}`);
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          alignItems: 'center',
                          space: 2,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                            backgroundColor: orgDetails.color,
                            style: {
                              paddingHorizontal: 8,
                              paddingVertical: 3,
                              borderRadius: 20,
                              overflow: 'hidden'
                            },
                            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                              name: "call",
                              size: 14,
                              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor
                            })
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            fontFamily: _MainStyle.fontBold,
                            color: orgDetails.color,
                            children: item.ph_number
                          })]
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      backgroundColor: orgDetails.color,
                      size: 'sm',
                      style: {
                        width: 90
                      },
                      borderRadius: 30,
                      overflow: 'hidden',
                      onPress: function onPress() {
                        return navigation.navigate('InfluencerDetails', {
                          influencerId: item.id
                        });
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "sm",
                        children: t('View')
                      })
                    })]
                  })]
                })
              }, index);
            })]
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
  var _default = exports.default = MyInfluencerScreen;
