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
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeMultipleSelect = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var CounterChangeScreen = function CounterChangeScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width,
      height = _useWindowDimensions.height;
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
      searchTerm = _React$useState6[0],
      setSearchTerm = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      influencer = _React$useState8[0],
      setInfluencer = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      counter = _React$useState10[0],
      setCounter = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      counterType = _React$useState12[0],
      setCounterType = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      districtList = _React$useState14[0],
      setDistrictList = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      selectedDistrict = _React$useState16[0],
      setSelectedDistrict = _React$useState16[1];
    var _React$useState17 = _react.default.useState([]),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      counterList = _React$useState18[0],
      setCounterList = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      counterPrimary = _React$useState20[0],
      setCounterPrimary = _React$useState20[1];
    var _React$useState21 = _react.default.useState([]),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      counterSecondary = _React$useState22[0],
      setCounterSecondary = _React$useState22[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
      });
      return unsubscribe;
    }, []);
    var onSearch = function onSearch() {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("searchText", searchTerm);
          fetch(`${_Config.BASE_URL}/get_influencer_wise_counter_details`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_influencer_wise_counter_details:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setInfluencer(responseJson.influncers);
              setDistrictList(responseJson.district);
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
    var onChooseDistrict = function onChooseDistrict(selectVal) {
      setLoading(true);
      setCounterSecondary([]);
      setSelectedDistrict(selectVal);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("districtid", selectVal);
          formdata.append("counterid", counterType == 1 ? "" : influencer.primary_counter_id);
          fetch(`${_Config.BASE_URL}/get_cso_district_wise_counters`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_cso_district_wise_counters:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setCounterList(responseJson.cso_district_wise_counters);
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setCounterList([]);
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
    var openCounter = function openCounter(type) {
      setCounter(true);
      setCounterType(type);
      setCounterPrimary("");
      setCounterSecondary([]);
    };
    var closeCounter = function closeCounter() {
      setCounter(false);
      setSelectedDistrict("");
      setCounterList([]);
      setCounterSecondary([]);
      setCounterPrimary("");
    };
    var onSave = function onSave() {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("counter_type", counterType);
          formdata.append("influencer_id", influencer.id);
          formdata.append("primary_counter", counterType == 1 ? counterPrimary[0] : "");
          formdata.append("secondary_counter", JSON.stringify(counterSecondary));
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/update_influencer_counter`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("update_influencer_counter:", responseJson);
            if (responseJson.bstatus == 1) {
              setCounterList(responseJson.cso_district_wise_counters);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              onSearch();
              closeCounter();
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Counter Change"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                fontFamily: _MainStyle.fontBold,
                size: "md",
                variant: "unstyled",
                placeholder: t('External ID / Phone No.'),
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
            }), influencer && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden',
                paddingLeft: 20,
                paddingRight: 20,
                paddingVertical: 20
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                marginBottom: 3,
                style: {
                  backgroundColor: _MainStyle.lightColor,
                  padding: 15,
                  borderRadius: 15,
                  overflow: 'hidden'
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontSemiBold,
                    color: _MainStyle.darkGrey,
                    children: [t("Code"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    color: _MainStyle.darkColor,
                    children: influencer.influencer_code
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: "space-between",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontSemiBold,
                    color: _MainStyle.darkGrey,
                    children: [t("Name"), ":"]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    color: _MainStyle.darkColor,
                    children: influencer.influencer_name
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                  onPress: function onPress() {
                    return _reactNative.Linking.openURL(`tel:${influencer.ph_number}`);
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontSemiBold,
                      color: _MainStyle.darkGrey,
                      children: [t("Phone"), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
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
                        children: influencer.ph_number
                      })]
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 3,
                marginY: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: "#666666",
                  fontSize: "md",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: 'center',
                  children: ["--: ", t("Primary Counter"), " :--"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  style: [_MainStyle.MainStyle.inputbox, {
                    backgroundColor: _MainStyle.greyColor,
                    padding: 8
                  }],
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    paddingX: 5,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.darkColor,
                      fontSize: "sm",
                      fontFamily: _MainStyle.fontBold,
                      children: influencer.primary_counter_name
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: "#666666",
                      fontSize: "xs",
                      children: ["Code: ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        fontFamily: _MainStyle.fontBold,
                        children: influencer.primary_counter_code
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: orgDetails.color,
                      width: 80,
                      height: 40
                    }],
                    onPress: function onPress() {
                      return openCounter(1);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontBold,
                      fontSize: "sm",
                      children: t('Edit')
                    })
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 3,
                marginY: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: "#666666",
                  fontSize: "md",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: 'center',
                  children: ["--: ", t("Secondary Counter"), " :--"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  style: [_MainStyle.MainStyle.inputbox, {
                    backgroundColor: _MainStyle.greyColor,
                    padding: 8
                  }],
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                    width: '70%',
                    space: 2,
                    children: influencer.secondary_counters.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        style: {
                          borderColor: _MainStyle.darkGrey,
                          borderWidth: 0.6,
                          padding: 7,
                          borderRadius: 22,
                          paddingHorizontal: 15
                        },
                        width: '100%',
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: _MainStyle.darkColor,
                          fontSize: "sm",
                          fontFamily: _MainStyle.fontBold,
                          textTransform: 'capitalize',
                          children: item.counter_name
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          color: "#666666",
                          fontSize: "xs",
                          children: ["Code: ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            color: _MainStyle.darkColor,
                            fontFamily: _MainStyle.fontBold,
                            children: item.counter_code
                          })]
                        })]
                      }, index);
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: orgDetails.color,
                      width: 80,
                      height: 40
                    }],
                    onPress: function onPress() {
                      return openCounter(2);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontBold,
                      fontSize: "sm",
                      children: t('Edit')
                    })
                  })]
                })]
              })]
            })]
          })
        })]
      }), counter && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
            padding: 8,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 3,
              width: '100%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                children: t("Please Choose District")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                  size: "md",
                  selectedValue: selectedDistrict,
                  onValueChange: function onValueChange(value) {
                    onChooseDistrict(value);
                  },
                  placeholder: "Select District",
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
                  borderRadius: 50,
                  px: 4,
                  color: _MainStyle.darkColor,
                  children: districtList.map(function (item, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: item.name,
                      value: item.id
                    }, index);
                  })
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 3,
              width: '100%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                style: {
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center'
                },
                children: t("Please Choose Counter")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                children: counterType == 1 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeMultipleSelect.default, {
                    hideTags: true,
                    items: counterList,
                    uniqueKey: "counter_id",
                    onSelectedItemsChange: function onSelectedItemsChange(text) {
                      return setCounterPrimary(text);
                    },
                    selectedItems: counterPrimary,
                    selectText: "Select Counter",
                    searchInputPlaceholderText: "Search Items...",
                    onChangeInput: function onChangeInput(text) {
                      return console.log(text);
                    },
                    altFontFamily: "ProximaNova-Light",
                    tagRemoveIconColor: "#CCC",
                    tagBorderColor: "#CCC",
                    tagTextColor: "#CCC",
                    selectedItemTextColor: _MainStyle.successColor,
                    selectedItemIconColor: _MainStyle.successColor,
                    itemTextColor: "#000000",
                    displayKey: "counter_name",
                    searchInputStyle: {
                      color: '#CCC'
                    },
                    single: true,
                    styleDropdownMenuSubsection: {
                      height: 50,
                      top: 5,
                      paddingLeft: 15,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                      borderRadius: 30
                    },
                    styleListContainer: {
                      maxHeight: 250,
                      overflow: 'scroll'
                    }
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeMultipleSelect.default, {
                    hideTags: true,
                    items: counterList,
                    uniqueKey: "counter_id",
                    onSelectedItemsChange: function onSelectedItemsChange(text) {
                      return setCounterSecondary(text);
                    },
                    selectedItems: counterSecondary,
                    selectText: "Select Counter",
                    searchInputPlaceholderText: "Search Items...",
                    onChangeInput: function onChangeInput(text) {
                      return console.log(text);
                    },
                    altFontFamily: "ProximaNova-Light",
                    tagRemoveIconColor: "#CCC",
                    tagBorderColor: "#CCC",
                    tagTextColor: "#CCC",
                    selectedItemTextColor: _MainStyle.successColor,
                    selectedItemIconColor: _MainStyle.successColor,
                    itemTextColor: "#000000",
                    displayKey: "counter_name",
                    searchInputStyle: {
                      color: '#CCC'
                    },
                    submitButtonColor: orgDetails.color,
                    submitButtonText: "Done",
                    styleDropdownMenuSubsection: {
                      height: 50,
                      top: 5,
                      paddingLeft: 15,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                      borderRadius: 30
                    },
                    styleListContainer: {
                      maxHeight: 250,
                      overflow: 'scroll'
                    }
                  })
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.solidbtn, {
                backgroundColor: 'black',
                width: '100%'
              }],
              onPress: function onPress() {
                return onSave();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                children: t('Save Change')
              })
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
            return closeCounter();
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

  /* const styles = StyleSheet.create({
  }); */
  var _default = exports.default = CounterChangeScreen;
