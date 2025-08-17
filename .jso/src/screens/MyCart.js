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
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[11]);
  var _checkbox = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var CartScreen = function CartScreen(_ref) {
    var navigation = _ref.navigation;
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
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      allCart = _React$useState6[0],
      setAllCart = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      controls = _React$useState8[0],
      setControls = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      successOrder = _React$useState10[0],
      setSuccessOrder = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      isPending = _React$useState12[0],
      setIsPending = _React$useState12[1];
    var _React$useState13 = _react.default.useState(false),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      isKYC = _React$useState14[0],
      setIsKYC = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      balance = _React$useState16[0],
      setBalance = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      msg = _React$useState18[0],
      setmsg = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      tdsmsg = _React$useState20[0],
      setTdsMsg = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      announcementPop = _React$useState22[0],
      setAnnouncementPop = _React$useState22[1];
    var _React$useState23 = _react.default.useState(false),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      announcementPop1 = _React$useState24[0],
      setAnnouncementPop1 = _React$useState24[1];
    var _React$useState25 = _react.default.useState(false),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      announcementPop2 = _React$useState26[0],
      setAnnouncementPop2 = _React$useState26[1];
    var _React$useState27 = _react.default.useState(false),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      announcementPop3 = _React$useState28[0],
      setAnnouncementPop3 = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      contractorMessage = _React$useState30[0],
      setContractorMessage = _React$useState30[1];
    var _React$useState31 = _react.default.useState(false),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      check = _React$useState32[0],
      setCheck = _React$useState32[1];
    var _React$useState33 = _react.default.useState(false),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      showAdd = _React$useState34[0],
      setShowAdd = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      address1 = _React$useState36[0],
      setAddress1 = _React$useState36[1];
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      address2 = _React$useState38[0],
      setAddress2 = _React$useState38[1];
    var _React$useState39 = _react.default.useState(""),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      landMark = _React$useState40[0],
      setLandMark = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      ao = _React$useState42[0],
      setAo = _React$useState42[1];
    var _React$useState43 = _react.default.useState(""),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      region = _React$useState44[0],
      setRegion = _React$useState44[1];
    var _React$useState45 = _react.default.useState(""),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      rmo = _React$useState46[0],
      setRmo = _React$useState46[1];
    var _React$useState47 = _react.default.useState(""),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      state = _React$useState48[0],
      setState = _React$useState48[1];
    var _React$useState49 = _react.default.useState(""),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      district = _React$useState50[0],
      setDistrict = _React$useState50[1];
    var _React$useState51 = _react.default.useState(""),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      city = _React$useState52[0],
      setCity = _React$useState52[1];
    var _React$useState53 = _react.default.useState(""),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      pinCode = _React$useState54[0],
      setPinCode = _React$useState54[1];
    var _React$useState55 = _react.default.useState([]),
      _React$useState56 = (0, _slicedToArray2.default)(_React$useState55, 2),
      stateList = _React$useState56[0],
      setStateList = _React$useState56[1];
    var _React$useState57 = _react.default.useState([]),
      _React$useState58 = (0, _slicedToArray2.default)(_React$useState57, 2),
      districtList = _React$useState58[0],
      setDistrictList = _React$useState58[1];
    var _React$useState59 = _react.default.useState(""),
      _React$useState60 = (0, _slicedToArray2.default)(_React$useState59, 2),
      myAddress = _React$useState60[0],
      setMyAddress = _React$useState60[1];
    var _React$useState61 = _react.default.useState(""),
      _React$useState62 = (0, _slicedToArray2.default)(_React$useState61, 2),
      submitType = _React$useState62[0],
      setSubmitType = _React$useState62[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
        getAllData();
        //getAllAddress();
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
          formdata.append("pageNumber", 1);
          fetch(`${_Config.BASE_URL}/mycart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("mycart:", responseJson);
            if (responseJson.bstatus === 1) {
              setLoading(false);
              setAllCart(responseJson.row_items);
              setControls(responseJson.control);
              setBalance(responseJson.tds_sufficiency.balance);
              getAllAddress();
              getState();
              if (responseJson.contractor_pan_alert == 1) {
                setAnnouncementPop(true);
                setAnnouncementPop1(true);
                setContractorMessage(responseJson.contractor_pan_alert_message);
              }
              if (responseJson.is_approved == 2) {
                setIsKYC(true);
              } else if (responseJson.is_approved == 0) {
                setIsPending(true);
              }
            } else {
              setLoading(false);
              setAllCart([]);
              setControls("");
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
    var getAllAddress = function getAllAddress() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/get_all_address`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_all_address:", responseJson);
            if (responseJson.bstatus === 1) {
              setLoading(false);
              setMyAddress(responseJson.address_list.alternate_addresses);
            } else {
              setLoading(false);
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
    var removeCart = function removeCart(cartId, productId) {
      _reactNative.Alert.alert(t("Warning"), t("Do you want to Remove Item from cart") + "?", [{
        text: t("Cancel"),
        onPress: function onPress() {
          return null;
        }
      }, {
        text: t("Yes"),
        onPress: function onPress() {
          _asyncStorage.default.getItem('userToken').then(function (val) {
            if (val != null) {
              var formdata = new FormData();
              formdata.append("token", JSON.parse(val).token);
              formdata.append("APIkey", `${_Config.API_KEY}`);
              formdata.append("orgId", JSON.parse(val).orgId);
              formdata.append("cart_id", cartId);
              formdata.append("product_id", productId);
              fetch(`${_Config.BASE_URL}/removecart`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                body: formdata
              }).then(function (response) {
                return response.json();
              }).then(function (responseJson) {
                //console.log("Remove Cart:", responseJson);
                if (responseJson.bstatus == 1) {
                  setLoading(true);
                  getAllData();
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
                //console.log("Remove Cart Error:", error);
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
      }], {
        cancelable: false
      });
    };
    var onPlaceOrder = function onPlaceOrder() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("cartId", controls.cart_id);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/place_order`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Order Placed:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setSuccessOrder(true);
              setmsg(responseJson.message);
              setTdsMsg(responseJson.tds_deduction_msg);
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
      navigation.replace('Home');
    };
    var announcedYes = function announcedYes() {
      setAnnouncementPop2(true);
      setAnnouncementPop1(false);
    };
    var onYes = function onYes() {
      setAnnouncementPop2(false);
      navigation.navigate('PanUplode');
    };
    var onNo = function onNo() {
      setAnnouncementPop2(false);
      setAnnouncementPop3(true);
    };
    var onOK = function onOK() {
      if (!check) {
        _nativeBase.Toast.show({
          description: t("Please Check Declearation")
        });
      } else {
        setAnnouncementPop3(false);
        setAnnouncementPop(false);
      }
    };
    var openAdd = function openAdd() {
      setShowAdd(true);
      setSubmitType("Add");
    };
    var onSelectState = function onSelectState(val) {
      setState(val);
      setDistrict("");
      setLoading(true);
      getCity(val);
    };
    var getState = function getState() {
      var formdata = new FormData();
      formdata.append("stateId", "");
      fetch(`${_Config.BASE_URL}/get_state_city_list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        console.log("get_state_city_list:", responseJson);
        setLoading(false);
        if (responseJson.bstatus === 1) {
          setStateList(responseJson.states);
        }
      }).catch(function (error) {
        setLoading(false);
      });
    };
    var getCity = function getCity(stateid) {
      var formdata = new FormData();
      formdata.append("stateId", stateid);
      fetch(`${_Config.BASE_URL}/get_state_city_list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: formdata
      }).then(function (response) {
        return response.json();
      }).then(function (responseJson) {
        console.log("get_state_city_list:", responseJson);
        setLoading(false);
        if (responseJson.bstatus === 1) {
          setDistrictList(responseJson.city_list);
        }
      }).catch(function (error) {
        setLoading(false);
      });
    };
    var openEdit = function openEdit() {
      setShowAdd(true);
      setAddress1(myAddress.line1);
      setAddress2(myAddress.line2);
      setState(myAddress.state_id);
      setDistrict(myAddress.city_id);
      setPinCode(myAddress.post_code);
      setSubmitType("Edit");
      getCity(myAddress.state_id);
    };
    var closeAdd = function closeAdd() {
      setShowAdd(false);
      setAddress1("");
      setAddress2("");
      setState("");
      setDistrict("");
      setPinCode("");
      setSubmitType("");
    };
    var onSave = function onSave() {
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
      } else if (district == "") {
        _nativeBase.Toast.show({
          description: t("Please select District")
        });
      } else if (pinCode.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Pincode")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("add_address_line1", address1);
            formdata.append("add_address_line2", address2);
            formdata.append("add_address_line3", "");
            formdata.append("add_state", state);
            formdata.append("add_city", district);
            formdata.append("add_pincode", pinCode);
            console.log(formdata);
            fetch(`${_Config.BASE_URL}/add_new_ship_address`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("add_new_ship_address:", responseJson);
              if (responseJson.bstatus == 1) {
                setShowAdd(false);
                getAllData();
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
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
      }
    };
    var onEdit = function onEdit() {
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
      } else if (district == "") {
        _nativeBase.Toast.show({
          description: t("Please select District")
        });
      } else if (pinCode.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Pincode")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("add_address_line1", address1);
            formdata.append("add_address_line2", address2);
            formdata.append("add_address_line3", "");
            formdata.append("add_state", state);
            formdata.append("add_city", district);
            formdata.append("add_pincode", pinCode);
            formdata.append("address_id", myAddress.add_id);
            formdata.append("table_name", myAddress.ref_table);
            console.log(formdata);
            fetch(`${_Config.BASE_URL}/update_ship_address`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("update_ship_address:", responseJson);
              if (responseJson.bstatus == 1) {
                setShowAdd(false);
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
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
          component: t("My Cart"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [allCart.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), allCart.map(function (item, index) {
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: "4",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                    style: styles.productimage,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: item.productImage ? {
                        uri: item.baseUrl + item.productImage[0].product_image
                      } : _$$_REQUIRE(_dependencyMap[14]),
                      style: {
                        width: 100,
                        height: 90
                      },
                      resizeMode: "contain"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    style: styles.productdetails,
                    space: "1",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      fontWeight: "bold",
                      children: item.productName
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      marginY: "1",
                      fontWeight: "bold",
                      fontSize: "lg",
                      color: _MainStyle.darkColor,
                      children: [item.pricePoints, " ", t("points")]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      space: 1,
                      alignItems: "center",
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                        space: 1,
                        style: {
                          alignItems: 'center'
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          style: {
                            width: 50,
                            textAlign: 'center',
                            backgroundColor: '#cccccc',
                            borderRadius: 15,
                            overflow: 'hidden'
                          },
                          fontSize: "md",
                          fontWeight: "medium",
                          children: item.quantity
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                        onPress: function onPress() {
                          return removeCart(item.cart_id, item.product_id);
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                          name: "trash",
                          size: 22,
                          color: "#f04e23"
                        })
                      })]
                    })]
                  })]
                })
              }, index);
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
        backgroundColor: "#eeeeee",
        padding: 5,
        width: "100%",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
          justifyContent: "space-between",
          alignContent: "center",
          children: [myAddress != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            marginBottom: 5,
            space: 2,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("Address Line 1"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.line1
              })]
            }), myAddress.line2 != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("Address Line 2"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.line2
              })]
            }), myAddress.line3 != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("Address Line 3"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.line3
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("Country"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.country
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("State"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.state
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("City"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.city
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              justifyContent: 'space-between',
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                children: [t("Pincode"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: myAddress.post_code
              })]
            })]
          }), myAddress != "" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return openEdit();
            },
            width: '100%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Edit Shipping Address")
            })
          }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return openAdd();
            },
            width: '100%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Add Shipping Address")
            })
          })]
        })
      }), controls != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        backgroundColor: "#f0f2e5",
        borderTopRadius: 30,
        padding: 5,
        width: "100%",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderColor: orgDetails.color,
          borderWidth: 8,
          backgroundColor: _MainStyle.lightColor,
          borderRadius: 40,
          overflow: 'hidden',
          padding: 1,
          marginBottom: 4,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: 'center',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: "#444444",
              fontSize: "xs",
              fontWeight: "medium",
              children: [t("Oredr Value Points"), ":"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: "#111111",
              fontSize: "md",
              fontWeight: "bold",
              children: balance.total_point_spent_amount
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: 'center',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: "#444444",
              fontSize: "xs",
              fontWeight: "medium",
              children: [t("Total TDS Point"), ":"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: "#111111",
              fontSize: "md",
              fontWeight: "bold",
              children: balance.total_tds_point
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: 'center',
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: "#444444",
              fontSize: "xs",
              fontWeight: "medium",
              children: [t("Grossup Value"), ":"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: "#111111",
              fontSize: "md",
              fontWeight: "bold",
              children: balance.grossup_value
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          justifyContent: "space-between",
          alignContent: "center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              color: "#444444",
              fontSize: "xs",
              fontWeight: "medium",
              children: [t("Grand Total"), ":"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 1,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "xl",
                fontWeight: "bold",
                children: controls.grandtotal_in_point
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#111111",
                fontSize: "sm",
                fontWeight: "bold",
                children: t("Points")
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return onPlaceOrder();
            },
            width: 160,
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Checkout")
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
      }), successOrder && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          colors: ["#f0f2e5", "#ffffff"],
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
            paddingX: "10",
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: tdsmsg
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
      }), announcementPop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeLinearGradient.default, {
          colors: ["#f0f2e5", "#ffffff"],
          start: {
            x: 0.5,
            y: 0
          },
          style: {
            width: 300,
            borderRadius: 15,
            overflow: 'hidden'
          },
          children: [announcementPop1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingX: "5",
            paddingY: "10",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              mt: 8,
              mb: 5,
              fontSize: "2xl",
              fontWeight: "bold",
              color: "#111111",
              children: t("Annoumcement")
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: contractorMessage
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 100,
                borderRadius: 10,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return announcedYes();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t("Yes")
              })
            })]
          }), announcementPop2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingX: "5",
            paddingY: "10",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "document-attach-outline",
              size: 100,
              color: "#111111"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: [t("Do you want to upload PAN"), "?"]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 3,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "sm",
                style: {
                  backgroundColor: '#111111',
                  width: 100,
                  borderRadius: 10,
                  overflow: 'hidden'
                },
                onPress: function onPress() {
                  return onYes();
                },
                marginY: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#ffffff",
                  fontSize: "sm",
                  fontWeight: "medium",
                  children: t("Yes")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "sm",
                style: {
                  backgroundColor: '#111111',
                  width: 100,
                  borderRadius: 10,
                  overflow: 'hidden'
                },
                onPress: function onPress() {
                  return onNo();
                },
                marginY: 4,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#ffffff",
                  fontSize: "sm",
                  fontWeight: "medium",
                  children: t("NO")
                })
              })]
            })]
          }), announcementPop3 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 1,
            w: "100%",
            paddingX: "5",
            paddingY: "10",
            alignItems: "center",
            justifyContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: "document-attach-outline",
              size: 100,
              color: "#111111"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              textAlign: "center",
              fontSize: "sm",
              fontWeight: "medium",
              color: "#111111",
              mb: 3,
              children: t("Do you want to upload PAN. Yes/No")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
              space: 3,
              marginTop: 3,
              paddingX: 5,
              alignItems: "center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_checkbox.default, {
                value: check,
                onValueChange: function onValueChange() {
                  return setCheck(!check);
                },
                tintColors: {
                  true: _MainStyle.successColor
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                width: "85%",
                fontSize: "xs",
                color: _MainStyle.darkColor,
                children: t("I declare I don’t have PAN")
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              size: "sm",
              style: {
                backgroundColor: '#111111',
                width: 100,
                borderRadius: 10,
                overflow: 'hidden'
              },
              onPress: function onPress() {
                return onOK();
              },
              marginY: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: "#ffffff",
                fontSize: "sm",
                fontWeight: "medium",
                children: t("Ok")
              })
            })]
          })]
        })
      }), showAdd && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.spincontainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          colors: ["#f0f2e5", "#ffffff"],
          style: {
            borderRadius: 30,
            overflow: 'hidden',
            width: '80%'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              padding: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                borderColor: "#bbbbbb",
                borderBottomWidth: 1,
                mb: "4",
                pb: "3",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  fontSize: "16",
                  fontWeight: "bold",
                  textAlign: "center",
                  children: t("Add Address")
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                space: 3,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    size: "md",
                    value: address1,
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
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    size: "md",
                    value: address2,
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
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    placeholder: t("Select State") + " *",
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
                        label: item.name,
                        value: item.id
                      }, index);
                    })
                  })
                }), state != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    placeholder: t("Select District") + " *",
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
                    selectedValue: district,
                    onValueChange: function onValueChange(value) {
                      return setDistrict(value);
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
                    children: districtList.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: item.name,
                        value: item.id
                      }, index);
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    size: "md",
                    value: pinCode,
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
              }), submitType == "Add" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "sm",
                style: {
                  backgroundColor: _MainStyle.successColor,
                  marginTop: 30,
                  borderRadius: 30,
                  overflow: 'hidden',
                  height: 45
                },
                onPress: function onPress() {
                  return onSave();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#ffffff",
                  fontSize: "sm",
                  fontWeight: "medium",
                  children: t("Save")
                })
              }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                size: "sm",
                style: {
                  backgroundColor: _MainStyle.successColor,
                  marginTop: 30,
                  borderRadius: 30,
                  overflow: 'hidden',
                  height: 45
                },
                onPress: function onPress() {
                  return onEdit();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#ffffff",
                  fontSize: "sm",
                  fontWeight: "medium",
                  children: t("Edit Save")
                })
              })]
            })
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
            return closeAdd();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontSize: "sm",
            children: t('Cancel')
          })
        })]
      }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.spincontainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
          animating: loading,
          size: "large",
          color: _MainStyle.darkColor
        })
      })]
    });
  };
  var styles = _reactNative.StyleSheet.create({
    bgimage: {
      flex: 1,
      justifyContent: 'center'
    },
    solidBtn: {
      width: '48%',
      borderColor: '#111111',
      borderWidth: 2,
      backgroundColor: '#111111',
      borderRadius: 10,
      overflow: 'hidden'
    },
    productbox: {
      borderRadius: 15,
      width: '96%',
      margin: '2%',
      backgroundColor: '#f6f6f6',
      padding: 15,
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
    productimage: {
      borderColor: '#dddddd',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderRadius: 10,
      width: '38%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    productdetails: {
      width: '58%'
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
  var _default = exports.default = CartScreen;
