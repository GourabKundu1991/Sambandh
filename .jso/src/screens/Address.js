  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[5]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[6]);
  var _Config = _$$_REQUIRE(_dependencyMap[7]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactNativeBlobUtil = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[12]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var AddressScreen = function AddressScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _React$useState3 = _react.default.useState("#cbf75e"),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      lightColor = _React$useState4[0],
      setLightColor = _React$useState4[1];
    var _React$useState5 = _react.default.useState("#2BBB86"),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      darkColor = _React$useState6[0],
      setDarkColor = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      logoImage = _React$useState8[0],
      setLogoImage = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      altAddress = _React$useState10[0],
      setAltAddress = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      parAddress = _React$useState12[0],
      setParAddress = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      addressId = _React$useState14[0],
      setAddressId = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      addressType = _React$useState16[0],
      setAddressType = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      otp = _React$useState18[0],
      setOtp = _React$useState18[1];
    var _React$useState19 = _react.default.useState(false),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      pop = _React$useState20[0],
      setPop = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      successOrder = _React$useState22[0],
      setSuccessOrder = _React$useState22[1];
    var _React$useState23 = _react.default.useState(false),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      popAddress = _React$useState24[0],
      setPopAddress = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      address1 = _React$useState26[0],
      setAddress1 = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      address2 = _React$useState28[0],
      setAddress2 = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      address3 = _React$useState30[0],
      setAddress3 = _React$useState30[1];
    var _React$useState31 = _react.default.useState(""),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      state = _React$useState32[0],
      setState = _React$useState32[1];
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      city = _React$useState34[0],
      setCity = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      pinCode = _React$useState36[0],
      setPinCode = _React$useState36[1];
    var _React$useState37 = _react.default.useState([]),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      stateList = _React$useState38[0],
      setStateList = _React$useState38[1];
    var _React$useState39 = _react.default.useState([]),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      cityList = _React$useState40[0],
      setCityList = _React$useState40[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        getAllData();
        console.log(route.params.cartId);
      });
      return unsubscribe;
    }, []);
    var onSelectState = function onSelectState(idVal) {
      setLoading(true);
      setState(idVal);
      setCity("");
      getCityList(idVal);
    };
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          setLogoImage(JSON.parse(val).logo_url);
          setLightColor(JSON.parse(val).info.theme_color.light);
          setDarkColor(JSON.parse(val).info.theme_color.dark);
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/get_user_address`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_user_address:", responseJson);
            if (responseJson.status == 'success') {
              setAltAddress(responseJson.address.alternate_addresses);
              setParAddress(responseJson.address.permanent_address);
              getStateList();
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                if (responseJson.msg_code == "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.navigate('Login');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("get_user_address Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var getStateList = function getStateList() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/GetStateList`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("GetStateList:", responseJson);
            if (responseJson.status == 'success') {
              setStateList(responseJson.state_list);
              setLoading(false);
            } else {
              setLoading(false);
              setStateList([]);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("GetStateList Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var getCityList = function getCityList(stateId) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("state_id", stateId);
          fetch(`${_Config.BASE_URL}/GetCityWithStateIDList`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("GetCityWithStateIDList:", responseJson);
            if (responseJson.status == 'success') {
              setCityList(responseJson.city_list);
              setLoading(false);
            } else {
              setLoading(false);
              setStateList([]);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("GetCityWithStateIDList Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var selectAddress = function selectAddress(addId, addType) {
      setAddressId(addId);
      setAddressType(addType);
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/generate_shipping_otp`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("generate_shipping_otp:", responseJson);
            if (responseJson.status == 'success') {
              setPop(true);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setLoading(false);
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                if (responseJson.msg_code == "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.navigate('Login');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("generate_shipping_otp Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var onCancel = function onCancel() {
      setPop(false);
      setOtp("");
    };
    var resendOTP = function resendOTP() {
      selectAddress(addressId, addressType);
    };
    var onVerify = function onVerify() {
      _reactNative.Keyboard.dismiss();
      if (otp.trim() == '') {
        _nativeBase.Toast.show({
          description: t("Please enter OTP")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("otpVal", otp);
            fetch(`${_Config.BASE_URL}/validate_otp_shipping`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              //console.log("Verify OTP:", responseJson);
              if (responseJson.status == 'success') {
                onCancel();
                onPlaceOrder();
              } else {
                setLoading(false);
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
              }
            }).catch(function (error) {
              setLoading(false);
              //console.log("Verify OTP Error:", error);
              _nativeBase.Toast.show({
                description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
              });
            });
          } else {
            setLoading(false);
            _asyncStorage.default.clear();
            navigation.navigate('Login');
          }
        });
      }
    };
    var onSaveAddress = function onSaveAddress() {
      if (address1.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Address Line 1")
        });
      } else if (address2.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Address Line 2")
        });
      } else if (state == "") {
        _nativeBase.Toast.show({
          description: t("Please select State")
        });
      } else if (city == "") {
        _nativeBase.Toast.show({
          description: t("Please select City")
        });
      } else if (pinCode.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Pincode")
        });
      } else {
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("add_address_line1", address1);
            formdata.append("add_address_line2", address2);
            formdata.append("add_address_line3", address3);
            formdata.append("add_state", state);
            formdata.append("add_city", city);
            formdata.append("add_pincode", pinCode);
            console.log(formdata);
            fetch(`${_Config.BASE_URL}/add_alternate_address`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("add_alternate_address:", responseJson);
              if (responseJson.status == 'success') {
                onCancelAddress();
                selectAddress(responseJson.address_id, 'dcm_contact_shipping_address');
              } else {
                if (responseJson.msg_code == "msg_1000") {
                  _nativeBase.Toast.show({
                    description: responseJson.message
                  });
                  setTimeout(function () {
                    _asyncStorage.default.clear();
                    navigation.navigate('Login');
                  }, 1000);
                } else {
                  _reactNative.Alert.alert(t("Sorry") + "!", responseJson.message, [{
                    text: t("Ok"),
                    onPress: function onPress() {}
                  }], {
                    cancelable: false
                  });
                }
              }
            }).catch(function (error) {
              setLoading(false);
              console.log("add_alternate_address Error:", error);
              _nativeBase.Toast.show({
                description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
              });
            });
          } else {
            setLoading(false);
            _asyncStorage.default.clear();
            navigation.navigate('Login');
          }
        });
      }
    };
    var onPlaceOrder = function onPlaceOrder() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("combo_prod_id", route.params.cartId);
          formdata.append("address_id", addressId);
          formdata.append("referece_address_table", addressType);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Order Placed:", responseJson);
            if (responseJson.status == 'success') {
              setLoading(false);
              setSuccessOrder(true);
              getAllData();
            } else {
              if (responseJson.msg_code == "msg_1000") {
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                setTimeout(function () {
                  setLoading(false);
                  _asyncStorage.default.clear();
                  navigation.navigate('Login');
                }, 1000);
              } else {
                setLoading(false);
                _reactNative.Alert.alert(t("Sorry") + "!", responseJson.message, [{
                  text: t("Ok"),
                  onPress: function onPress() {}
                }], {
                  cancelable: false
                });
              }
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Order Placed Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var onContinue = function onContinue() {
      setSuccessOrder(false);
      navigation.navigate('Home');
    };
    var onCancelAddress = function onCancelAddress() {
      setPopAddress(false);
      setAddress1("");
      setAddress2("");
      setAddress3("");
      setState("");
      setCity("");
      setPinCode("");
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: "#ffffff"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
        flex: 1,
        bg: "white",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          colors: ["#ffffff", lightColor],
          start: {
            x: 0.5,
            y: 0
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "4",
            paddingY: "3",
            space: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: "#111111",
              fontSize: "16",
              textAlign: "center",
              fontWeight: "bold",
              textTransform: "capitalize",
              children: t("Address Details")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: logoImage ? {
                uri: logoImage
              } : _$$_REQUIRE(_dependencyMap[14]),
              style: {
                width: 60,
                height: 25,
                resizeMode: 'contain'
              }
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.ScrollView, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
            colors: [lightColor, darkColor],
            style: {
              height: 80,
              position: 'absolute',
              top: 0,
              width: '100%',
              borderBottomEndRadius: 100,
              borderBottomStartRadius: 100,
              overflow: 'hidden'
            },
            start: {
              x: 0.5,
              y: 0
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
            padding: "5",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                style: styles.productbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                  alignItems: "center",
                  w: "100%",
                  padding: 3,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                    onPress: function onPress() {
                      return setPopAddress(true);
                    },
                    style: {
                      width: '100%'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                      borderWidth: 1,
                      bg: "#444444",
                      justifyContent: "center",
                      borderColor: "#444444",
                      borderStyle: "dashed",
                      borderRadius: 12,
                      w: "100%",
                      height: "45",
                      padding: "1",
                      overflow: "hidden",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#ffffff",
                        fontSize: "md",
                        textAlign: "center",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: t("Add New Address")
                      })
                    })
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                style: styles.productbox,
                mt: "3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                  colors: [lightColor, darkColor],
                  start: {
                    x: 0.5,
                    y: 0
                  },
                  style: {
                    padding: 10
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: "#111111",
                    fontSize: "14",
                    textAlign: "center",
                    fontWeight: "bold",
                    children: t("Parmanent Address")
                  })
                }), parAddress == "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                  padding: "10",
                  justifyContent: "center",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "sm",
                    color: "#888888",
                    children: ["----- ", t("No Data Available"), " -----"]
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
                  nestedScrollEnabled: true,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    padding: "3",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line1"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.line1
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line2"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.line2
                      })]
                    }), parAddress.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line3"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.line3
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Country"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.country
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("State"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.state
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("City"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.city
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Post Code"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: parAddress.post_code
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      justifyContent: "center",
                      alignItems: "center",
                      w: "100%",
                      marginTop: 4,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                        colors: ["#821700", "#f04e23"],
                        start: {
                          x: 0.5,
                          y: 0
                        },
                        style: styles.custbtn,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                          size: "sm",
                          width: "100%",
                          variant: "link",
                          _text: {
                            color: "#ffffff",
                            fontWeight: 'bold',
                            fontSize: 13
                          },
                          onPress: function onPress() {
                            return selectAddress(parAddress.add_id, 'dcm_addresses');
                          },
                          children: t("Delivery to This Address")
                        })
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                style: styles.productbox,
                mt: "3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                  colors: [lightColor, darkColor],
                  start: {
                    x: 0.5,
                    y: 0
                  },
                  style: {
                    padding: 10
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: "#111111",
                    fontSize: "14",
                    textAlign: "center",
                    fontWeight: "bold",
                    children: t("Alternative Address")
                  })
                }), altAddress == null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                  padding: "10",
                  justifyContent: "center",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "sm",
                    color: "#888888",
                    children: ["----- ", t("No Data Available"), " -----"]
                  })
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
                  nestedScrollEnabled: true,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    padding: "3",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line1"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.line1
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line2"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.line2
                      })]
                    }), parAddress.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Address Line3"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.line3
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Country"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.country
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("State"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.state
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      borderColor: "#dddddd",
                      borderBottomWidth: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("City"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.city
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      alignItems: "center",
                      w: "100%",
                      padding: 2,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "xs",
                        fontWeight: "medium",
                        textTransform: "capitalize",
                        children: [t("Post Code"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#111111",
                        width: 200,
                        fontSize: "sm",
                        textAlign: "right",
                        fontWeight: "bold",
                        children: altAddress.post_code
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      justifyContent: "center",
                      alignItems: "center",
                      w: "100%",
                      marginTop: 4,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                        colors: ["#821700", "#f04e23"],
                        start: {
                          x: 0.5,
                          y: 0
                        },
                        style: styles.custbtn,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                          size: "sm",
                          width: "100%",
                          variant: "link",
                          _text: {
                            color: "#ffffff",
                            fontWeight: 'bold',
                            fontSize: 13
                          },
                          onPress: function onPress() {
                            return selectAddress(altAddress.add_id, 'dcm_contact_shipping_address');
                          },
                          children: t("Delivery to This Address")
                        })
                      })
                    })]
                  })
                })]
              })]
            })
          })]
        })]
      }), pop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
        onPress: _reactNative.Keyboard.dismiss,
        accessible: false,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          flex: 1,
          style: {
            backgroundColor: "rgba(0,0,0,0.85)",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
            style: styles.productbox,
            padding: 3,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#444444",
                fontSize: "md",
                fontWeight: "bold",
                children: t("OTP Verification")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setOtp(text);
                  },
                  keyboardType: "number-pad",
                  maxLength: 6,
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "key-outline",
                    size: 20,
                    color: "#f04e23",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Enter OTP") + " *"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                style: {
                  alignSelf: 'center'
                },
                onPress: function onPress() {
                  return resendOTP();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: "#f04e23",
                  fontSize: "md",
                  fontWeight: "bold",
                  textAlign: "center",
                  children: [t("Resend OTP"), "?"]
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
              bg: "#eeeeee",
              borderRadius: "10",
              overflow: "hidden",
              padding: "2",
              mt: "6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#821700", "#f04e23"],
                start: {
                  x: 0.5,
                  y: 0
                },
                style: styles.optionbtn,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  variant: "link",
                  _text: {
                    color: "#ffffff",
                    fontWeight: 'bold',
                    fontSize: 13
                  },
                  onPress: function onPress() {
                    return onCancel();
                  },
                  children: t("Close")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#10764F", "#2BBB86"],
                start: {
                  x: 0.5,
                  y: 0
                },
                style: styles.optionbtn,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  variant: "link",
                  _text: {
                    color: "#ffffff",
                    fontWeight: 'bold',
                    fontSize: 13
                  },
                  onPress: function onPress() {
                    return onVerify();
                  },
                  children: t("Verify")
                })
              })]
            })]
          })
        })
      }), popAddress && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
        onPress: _reactNative.Keyboard.dismiss,
        accessible: false,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          flex: 1,
          style: {
            backgroundColor: "rgba(0,0,0,0.85)",
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 30
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
            style: styles.productbox,
            padding: 3,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#444444",
                fontSize: "md",
                mb: 1,
                fontWeight: "bold",
                children: t("Add New Address")
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress1(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 1") + " *"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress2(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 2") + " *"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  onChangeText: function onChangeText(text) {
                    return setAddress3(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Address Line 3")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                  variant: "underlined",
                  size: "lg",
                  placeholder: t("Select State") + " *",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      marginRight: 10,
                      textAlign: 'center'
                    }
                  }),
                  selectedValue: state,
                  onValueChange: function onValueChange(value) {
                    return onSelectState(value);
                  },
                  _selectedItem: {
                    backgroundColor: '#eeeeee',
                    endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: "#2BBB86",
                      style: {
                        right: 0,
                        position: 'absolute'
                      }
                    })
                  },
                  children: stateList.map(function (item, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: item.state_name,
                      value: item.state_id
                    }, index);
                  })
                })
              }), state != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                  variant: "underlined",
                  size: "lg",
                  placeholder: t("Select City") + " *",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      marginRight: 10,
                      textAlign: 'center'
                    }
                  }),
                  selectedValue: city,
                  onValueChange: function onValueChange(value) {
                    return setCity(value);
                  },
                  _selectedItem: {
                    backgroundColor: '#eeeeee',
                    endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: "#2BBB86",
                      style: {
                        right: 0,
                        position: 'absolute'
                      }
                    })
                  },
                  children: cityList.map(function (item, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: item.city_name,
                      value: item.city_id
                    }, index);
                  })
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: styles.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "lg",
                  keyboardType: "number-pad",
                  maxLength: 6,
                  onChangeText: function onChangeText(text) {
                    return setPinCode(text);
                  },
                  variant: "unstyled",
                  InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "location-outline",
                    size: 20,
                    color: "#666666",
                    style: {
                      width: 25,
                      marginLeft: 10,
                      textAlign: 'center'
                    }
                  }),
                  placeholder: t("Pincode") + " *"
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
              bg: "#eeeeee",
              borderRadius: "10",
              overflow: "hidden",
              padding: "2",
              mt: "6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#821700", "#f04e23"],
                start: {
                  x: 0.5,
                  y: 0
                },
                style: styles.optionbtn,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  variant: "link",
                  _text: {
                    color: "#ffffff",
                    fontWeight: 'bold',
                    fontSize: 13
                  },
                  onPress: function onPress() {
                    return onCancelAddress();
                  },
                  children: t("Close")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#10764F", "#2BBB86"],
                start: {
                  x: 0.5,
                  y: 0
                },
                style: styles.optionbtn,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  size: "xs",
                  variant: "link",
                  _text: {
                    color: "#ffffff",
                    fontWeight: 'bold',
                    fontSize: 13
                  },
                  onPress: function onPress() {
                    return onSaveAddress();
                  },
                  children: t("Save")
                })
              })]
            })]
          })
        })
      }), successOrder && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          colors: [lightColor, darkColor],
          start: {
            x: 0.5,
            y: 0
          },
          style: {
            width: 300,
            borderRadius: 15,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingX: "5",
            paddingY: "10",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "checkmark-done-circle-outline",
              size: 100,
              color: "#111111"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              mt: 8,
              fontSize: "xl",
              fontWeight: "bold",
              color: "#111111",
              children: t("Thank You")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t("Your order has been Placed Successfully"), "."]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 100,
                borderRadius: 10,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return onContinue();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t("Continue")
              })
            })]
          })
        })
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: darkColor
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    bgimage: {
      flex: 1,
      justifyContent: 'center'
    },
    inputbox: {
      backgroundColor: 'rgba(0,0,0,0.06)',
      borderRadius: 12,
      width: '100%',
      overflow: 'hidden',
      marginVertical: 0
    },
    optionbtn: {
      backgroundColor: 'none',
      width: '46%',
      borderRadius: 8,
      overflow: 'hidden'
    },
    custbtn: {
      backgroundColor: 'none',
      borderRadius: 10
    },
    note: {
      color: '#ffffff',
      width: 20,
      height: 20,
      borderRadius: 10,
      overflow: 'hidden',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 19,
      textAlign: 'center'
    },
    productbox: {
      borderRadius: 15,
      width: '96%',
      margin: '2%',
      backgroundColor: '#f6f6f6',
      borderColor: '#ffffff',
      borderWidth: 2,
      elevation: 10,
      shadowColor: '#666666',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.4,
      shadowRadius: 10,
      overflow: 'hidden'
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
  var _default = exports.default = AddressScreen;
