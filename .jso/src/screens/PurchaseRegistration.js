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
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PurchaseRegistrationScreen = function PurchaseRegistrationScreen(_ref) {
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
    var _React$useState3 = _react.default.useState(false),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      showPicker = _React$useState4[0],
      setShowPicker = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      products = _React$useState6[0],
      setProducts = _React$useState6[1];
    var _React$useState7 = _react.default.useState(null),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      selectedIndex = _React$useState8[0],
      setSelectedIndex = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      dealers = _React$useState10[0],
      setDealers = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      selectedProdId = _React$useState12[0],
      setSelectedProdId = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      selectedDealerId = _React$useState14[0],
      setSelectedDealerId = _React$useState14[1];
    var _React$useState15 = _react.default.useState(''),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      quantity = _React$useState16[0],
      setQuantity = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      pricePerBag = _React$useState18[0],
      setPricePerBag = _React$useState18[1];
    var _React$useState19 = _react.default.useState(null),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      selectedDate = _React$useState20[0],
      setSelectedDate = _React$useState20[1];
    var _React$useState21 = _react.default.useState(''),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      siteAddress = _React$useState22[0],
      setSiteAddress = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      orgDetails = _React$useState24[0],
      setOrgDetails = _React$useState24[1];
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
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("os_type", `${_Config.OS_TYPE}`);
          formdata.append("app_ver", `${_Config.APP_VERSION}`);
          fetch(`${_Config.BASE_URL}/pre_sale_info`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Sale Info:", responseJson);
            setLoading(false);
            if (responseJson.bstatus === 1) {
              var baseUrl = responseJson.image_base_url;
              var imgProducts = responseJson.product_list.map(function (product) {
                return {
                  name: product.product_name,
                  image: {
                    uri: baseUrl + product.product_image
                  },
                  prod_id: product.prod_id
                };
              });
              setProducts(imgProducts);
              setDealers(responseJson.dealer_list);
            } else {
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
    var enterSaleData = function enterSaleData() {
      if (selectedProdId == '') {
        _nativeBase.Toast.show({
          description: t("Please select Product")
        });
      } else if (selectedDealerId == '') {
        _nativeBase.Toast.show({
          description: t("Please select Dealer")
        });
      } else if (quantity.trim() == '') {
        _nativeBase.Toast.show({
          description: t("Please enter Quantity")
        });
      } else if (pricePerBag.trim() == '') {
        _nativeBase.Toast.show({
          description: t("Please enter Price Per Bag")
        });
      } else if (selectedDate == null) {
        _nativeBase.Toast.show({
          description: t("Please select Purchase Date")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("dealer_id", selectedDealerId);
            formdata.append("prodMasId", selectedProdId);
            formdata.append("saleQuantity", quantity);
            formdata.append("saleDate", selectedDate ? (0, _moment.default)(selectedDate).format("YYYY-MM-DD") : "");
            formdata.append("unit_price", pricePerBag);
            fetch(`${_Config.BASE_URL}/enter_sale_data`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("enter_sale_data:", responseJson);
              setLoading(false);
              if (responseJson.bstatus === 1) {
                _reactNative.Alert.alert(t("Success"), responseJson.message, [{
                  text: t("OK"),
                  onPress: function onPress() {
                    return navigation.goBack();
                  }
                }]);
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
              } else {
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
      }
    };
    var today = new Date();
    var minDate = new Date(); // 15 days ago
    minDate.setDate(today.getDate() - 15);
    var handleDateChange = function handleDateChange(event, date) {
      setShowPicker(false);
      if (date) {
        setSelectedDate(date);
      }
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Purchase Registration"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: {
                  borderColor: _MainStyle.greyColor,
                  borderBottomWidth: 1,
                  padding: 10
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "md",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: "center",
                  children: t("Select Product")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "100%",
                padding: 5,
                children: products.map(function (product, index) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    width: "48%",
                    alignItems: "center",
                    marginY: 2,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        setSelectedIndex(index);
                        setSelectedProdId(product.prod_id);
                        console.log("Selected Product ID:", product.prod_id);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                        backgroundColor: "#ffffff",
                        borderRadius: 30,
                        padding: 3,
                        alignItems: "center",
                        borderWidth: 4,
                        borderColor: selectedIndex === index ? orgDetails.color : _MainStyle.greyColor,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                          source: product.image,
                          style: {
                            width: 100,
                            height: 120,
                            resizeMode: 'contain'
                          }
                        })
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      textAlign: "center",
                      mt: 2,
                      fontWeight: "medium",
                      children: product.name
                    })]
                  }, index);
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: {
                  borderColor: _MainStyle.greyColor,
                  borderBottomWidth: 1,
                  padding: 10
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontSize: "md",
                  fontFamily: _MainStyle.fontBold,
                  textAlign: "center",
                  children: t("Other Details")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                width: "100%",
                padding: 5,
                space: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                    size: "md",
                    borderWidth: 0,
                    selectedValue: selectedDealerId,
                    onValueChange: function onValueChange(value) {
                      setSelectedDealerId(value);
                    },
                    placeholder: t("Select Dealer *"),
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
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "person-outline",
                      size: 20,
                      color: "#000000",
                      style: {
                        width: 25,
                        marginLeft: 12
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
                    children: dealers.map(function (dealer) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: `${dealer.company_name} (${dealer.id_extern01})`,
                        value: dealer.id
                      }, dealer.id);
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: quantity,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    placeholder: t('Quantity (Bags) *'),
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "server-outline",
                      size: 20,
                      color: "#000000",
                      style: {
                        width: 25,
                        marginLeft: 12
                      }
                    }),
                    onChangeText: function onChangeText(text) {
                      return setQuantity(text);
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: pricePerBag,
                    size: "md",
                    variant: "unstyled",
                    keyboardType: "number-pad",
                    placeholder: t('Price Per Bags *'),
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "cash-outline",
                      size: 20,
                      color: "#000000",
                      style: {
                        width: 25,
                        marginLeft: 12
                      }
                    }),
                    onChangeText: function onChangeText(text) {
                      return setPricePerBag(text);
                    }
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                    onPress: function onPress() {
                      return setShowPicker(true);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      value: selectedDate ? (0, _moment.default)(selectedDate).format("DD-MM-YYYY") : "",
                      size: "md",
                      variant: "unstyled",
                      placeholder: t('Purchase Date *'),
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "calendar-outline",
                        size: 20,
                        color: "#000000",
                        style: {
                          width: 25,
                          marginLeft: 12
                        }
                      }),
                      readOnly: true
                    })
                  }), showPicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_datetimepicker.default, {
                    value: selectedDate || today,
                    mode: "date",
                    display: "default",
                    onChange: handleDateChange,
                    maximumDate: today,
                    minimumDate: minDate
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    value: siteAddress,
                    multiline: true,
                    height: 70,
                    size: "md",
                    variant: "unstyled",
                    placeholder: t('Site Address'),
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "location-outline",
                      size: 20,
                      color: "#000000",
                      style: {
                        width: 25,
                        marginLeft: 12
                      }
                    }),
                    onChangeText: function onChangeText(text) {
                      return setSiteAddress(text);
                    }
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            backgroundColor: "#f0f2e5",
            borderTopRadius: 30,
            padding: 5,
            width: "100%",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              onPress: function onPress() {
                return enterSaleData();
              },
              width: '100%',
              backgroundColor: orgDetails.color,
              borderRadius: 30,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                fontFamily: _MainStyle.fontBold,
                fontSize: "md",
                children: t("Submit")
              })
            })
          })]
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
  var _default = exports.default = PurchaseRegistrationScreen;
