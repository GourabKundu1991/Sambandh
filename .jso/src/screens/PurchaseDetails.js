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
  var _RangeSlider = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[12]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[15]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PurchaseDetailsScreen = function PurchaseDetailsScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _route$params = route.params,
      saleId = _route$params.saleId,
      ApproveArr = _route$params.ApproveArr,
      RejectArr = _route$params.RejectArr;
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
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      orgDetails = _React$useState6[0],
      setOrgDetails = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      purchaseData = _React$useState8[0],
      setPurchaseData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      reasonPopup = _React$useState10[0],
      setReasonPopup = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      reasonStatus = _React$useState12[0],
      setReasonStatus = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      reasonList = _React$useState14[0],
      setReasonList = _React$useState14[1];
    var _React$useState15 = _react.default.useState(''),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      comment = _React$useState16[0],
      setComment = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      selectedReason = _React$useState18[0],
      setSelectedReason = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      audit = _React$useState20[0],
      setAudit = _React$useState20[1];
    var _React$useState21 = _react.default.useState(false),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      showBagUpdatePopup = _React$useState22[0],
      setShowBagUpdatePopup = _React$useState22[1];
    var _React$useState23 = _react.default.useState(''),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      newBagQty = _React$useState24[0],
      setNewBagQty = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      userType = _React$useState26[0],
      setUserType = _React$useState26[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
        _asyncStorage.default.getItem('userToken').then(function (valUser) {
          if (valUser != null) {
            setUserType(JSON.parse(valUser).user_type);
          }
        });
        console.log("ApproveArr: ", ApproveArr);
        console.log("RejectArr: ", RejectArr);
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
        if (val) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("sale_id", saleId);
          fetch(`${_Config.BASE_URL}/sale_details`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            console.log("sale_details Response:", responseJson);
            if (responseJson.bstatus === 1) {
              setPurchaseData(responseJson.sale_data);
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              if (responseJson.msg_code === "msg_1000") {
                _asyncStorage.default.clear();
                navigation.replace('Intro');
              }
            }
          }).catch(function () {
            setLoading(false);
            _nativeBase.Toast.show("Sorry! Something went wrong. Maybe network request failed.");
          });
        }
      });
    };
    var openReasonPop = function openReasonPop(type) {
      setReasonPopup(true);
      setReasonStatus(type);
      setSelectedReason("");
      if (type == "Approve") {
        setReasonList(ApproveArr);
      } else {
        setReasonList(RejectArr);
      }
      setAudit("");
    };
    var closeReasonPop = function closeReasonPop() {
      setReasonPopup(false);
      setReasonStatus("");
      setSelectedReason("");
      setReasonList([]);
      setComment("");
      setAudit("");
    };
    var handleRejectReasons = function handleRejectReasons() {
      if (selectedReason == '') {
        _nativeBase.Toast.show({
          description: t("Please select Reason Type")
        });
      } else {
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("sale_id", saleId);
            formdata.append("reason_id", selectedReason);
            formdata.append("other_text", comment);
            formdata.append("audited", audit);
            fetch(`${_Config.BASE_URL}/approve_sale`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("approve_sale Response:", responseJson);
              if (responseJson.bstatus === 1) {
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                closeReasonPop();
                setTimeout(function () {
                  setLoading(false);
                  navigation.goBack();
                }, 1000);
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
            }).catch(function () {
              setLoading(false);
              _nativeBase.Toast.show({
                description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
              });
            });
          }
        });
      }
    };
    var onBagUpdate = function onBagUpdate() {
      if (newBagQty.trim() == '') {
        _nativeBase.Toast.show({
          description: t("Please Enter New Quantity (Bags)")
        });
      } else if (Number(purchaseData.claimed_quantity) <= newBagQty) {
        _nativeBase.Toast.show({
          description: t("New bag quantity should be less than previous claimed bag quantity")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("sale_id", saleId);
            formdata.append("quantity", newBagQty);
            fetch(`${_Config.BASE_URL}/update_sale_quantity`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("update_sale_quantity Response:", responseJson.message);
              if (responseJson.bstatus == 1) {
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                closeBagPop();
                getAllData();
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
            }).catch(function () {
              setLoading(false);
              _nativeBase.Toast.show("Sorry! Something went wrong. Maybe network request failed.");
            });
          }
        });
      }
    };
    var closeBagPop = function closeBagPop() {
      setShowBagUpdatePopup(false);
      setNewBagQty("");
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Purchase Details"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 8,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                space: 6,
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
                    children: t("Bags Sold")
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignpurchaseDatas: 'center',
                    space: 2,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: [purchaseData.tonnage_sold, " Bag(s)"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                      onPress: function onPress() {
                        return setShowBagUpdatePopup(true);
                      },
                      backgroundColor: _MainStyle.successColor,
                      style: {
                        paddingHorizontal: 8,
                        paddingVertical: 3,
                        borderRadius: 20,
                        overflow: 'hidden'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "pencil",
                        size: 14,
                        color: _MainStyle.lightColor
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  paddingX: 1,
                  space: 2,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Name'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.Contact_Name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Influencer ID'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.ID
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                    onPress: function onPress() {
                      return Linking.openURL(`tel:${purchaseData.ph_number}`);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontRegular,
                        color: _MainStyle.darkGrey,
                        children: [t("Influencer Phone"), ":"]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        alignpurchaseDatas: 'center',
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
                          children: purchaseData.ph_number
                        })]
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Product'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.Product
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Claimed Quantity'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.claimed_quantity + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Unit Price'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.unit_price
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Enrolling Officer'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.officer_Name + " (" + purchaseData.officerExternalId + ")"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Category'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.category
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Dealer Name'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.dealer_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('MTD Purchase'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.MTD + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Site Address'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.site_address
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Purchase Date'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: (0, _moment.default)(purchaseData.Sale_Date).format("DD-MM-YYYY")
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Created Date'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      width: 150,
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: (0, _moment.default)(purchaseData.Sale_Registered_On).format("DD-MM-YYYY")
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                space: 6,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                  justifyContent: "center",
                  backgroundColor: _MainStyle.lightColor,
                  paddingY: 3,
                  paddingX: 5,
                  borderRadius: 30,
                  overflow: 'hidden',
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "md",
                    color: _MainStyle.darkGrey,
                    fontFamily: _MainStyle.fontBold,
                    children: t("Counter Sales")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  paddingX: 1,
                  space: 2,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Last Month Approved Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.dealer_last_month_approved_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('MTD Approved Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.dealer_MTD_approved_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                space: 6,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                  justifyContent: "center",
                  backgroundColor: _MainStyle.lightColor,
                  paddingY: 3,
                  paddingX: 5,
                  borderRadius: 30,
                  overflow: 'hidden',
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "md",
                    color: _MainStyle.darkGrey,
                    fontFamily: _MainStyle.fontBold,
                    children: t("Influencer Sales")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  paddingX: 1,
                  space: 2,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Last Month Pending Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.influencer_last_month_pending_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('Last Month Approved Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.influencer_last_month_approved_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('MTD Pending Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.influencer_MTD_pending_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontRegular,
                      color: _MainStyle.darkGrey,
                      children: [t('MTD Approved Tertiary Sales'), ":"]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      color: _MainStyle.darkColor,
                      textAlign: "right",
                      children: purchaseData.influencer_MTD_approved_tertiary_sales + " " + purchaseData.unit_name
                    })]
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          justifyContent: 'space-evenly',
          alignItems: 'center',
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              openReasonPop("Reject");
            },
            width: '45%',
            backgroundColor: _MainStyle.dangerColor,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: userType == "TR" ? t("Not Verify") : t("Reject")
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              openReasonPop("Approve");
            },
            width: '45%',
            backgroundColor: _MainStyle.successColor,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: userType == "TR" ? t("Verify") : t("Approve")
            })
          })]
        })]
      }), reasonPopup && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
            space: 8,
            padding: 5,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 3,
              width: '100%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: 'md',
                textAlign: 'center',
                style: {
                  fontFamily: _MainStyle.fontBold,
                  marginVertical: 10
                },
                children: t("Reason for ") + reasonStatus
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                  size: "md",
                  selectedValue: selectedReason,
                  onValueChange: function onValueChange(value) {
                    setSelectedReason(value);
                  },
                  placeholder: "Select Reason Type *",
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
                  borderRadius: 30,
                  px: 4,
                  children: reasonList.map(function (item, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: item.reasons,
                      value: item.id
                    }, index);
                  })
                })
              }), reasonStatus == "Approve" && userType != "TR" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                  size: "md",
                  selectedValue: audit,
                  onValueChange: function onValueChange(value) {
                    setAudit(value);
                  },
                  placeholder: "Purchase Audited",
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
                  borderRadius: 30,
                  px: 4,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: 'Yes',
                    value: 'Yes'
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                    label: 'No',
                    value: 'No'
                  })]
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  multiline: true,
                  textAlignVertical: "top",
                  height: 100,
                  size: "md",
                  variant: "unstyled",
                  placeholder: t('Enter Comments'),
                  onChangeText: function onChangeText(text) {
                    return setComment(text);
                  }
                })
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.solidbtn, {
                backgroundColor: 'black',
                width: '100%'
              }],
              onPress: function onPress() {
                return handleRejectReasons();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                children: t('Submit')
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
            return closeReasonPop();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontSize: "sm",
            children: t('Cancel')
          })
        })]
      }), showBagUpdatePopup && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
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
            space: 8,
            padding: 5,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              space: 5,
              width: '100%',
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                fontSize: 'md',
                textAlign: 'center',
                fontFamily: _MainStyle.fontBold,
                children: t("Please Update Bag Quantity")
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontSize: 'lg',
                color: orgDetails.color,
                textAlign: 'center',
                style: {
                  fontFamily: _MainStyle.fontBold
                },
                children: [t("Claimed Quantity"), " : ", purchaseData.claimed_quantity, " Bags"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "md",
                  variant: "unstyled",
                  keyboardType: "number-pad",
                  placeholder: t('New Quantity (Bags) *'),
                  onChangeText: function onChangeText(text) {
                    return setNewBagQty(text);
                  }
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                fontSize: 'xs',
                color: _MainStyle.dangerColor,
                textAlign: 'center',
                fontFamily: _MainStyle.fontBold,
                children: [t("*** New bag quantity should be less than previous claimed bag quantity"), "."]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              style: [_MainStyle.MainStyle.solidbtn, {
                backgroundColor: 'black',
                width: '100%'
              }],
              onPress: function onPress() {
                return onBagUpdate();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontSemiBold,
                fontSize: "md",
                children: t('Submit')
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
            return closeBagPop();
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

  /* const styles = StyleSheet.create({}); */
  var _default = exports.default = PurchaseDetailsScreen;
