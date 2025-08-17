  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[5]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[6]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[8]);
  var _Config = _$$_REQUIRE(_dependencyMap[9]);
  var _RangeSlider = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[11]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[14]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ApprovePurchaseScreen = function ApprovePurchaseScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
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
      dataFound = _React$useState8[0],
      setDataFound = _React$useState8[1];
    var _React$useState9 = _react.default.useState(true),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      isLoadMore = _React$useState10[0],
      setIsLoadMore = _React$useState10[1];
    var _React$useState11 = _react.default.useState([]),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      allProducts = _React$useState12[0],
      setAllProducts = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      inCart = _React$useState14[0],
      setInCart = _React$useState14[1];
    var _React$useState15 = _react.default.useState([]),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      allCategory = _React$useState16[0],
      setAllCategory = _React$useState16[1];
    var _React$useState17 = _react.default.useState(0),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      canRedeem = _React$useState18[0],
      setCanRedeem = _React$useState18[1];
    var _React$useState19 = _react.default.useState(0),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      canSubmitKYC = _React$useState20[0],
      setCanSubmitKYC = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      canSubmitKYCText = _React$useState22[0],
      setCanSubmitKYCText = _React$useState22[1];
    var _React$useState23 = _react.default.useState(0),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      loadMoreShow = _React$useState24[0],
      setLoadMoreShow = _React$useState24[1];
    var _React$useState25 = _react.default.useState('All'),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      selected = _React$useState26[0],
      setSelected = _React$useState26[1];
    var _React$useState27 = _react.default.useState('all'),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      value = _React$useState28[0],
      setValue = _React$useState28[1];
    var _React$useState29 = _react.default.useState([]),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      purchaseData = _React$useState30[0],
      setPurchaseData = _React$useState30[1];
    var _React$useState31 = _react.default.useState([]),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      purchaseList = _React$useState32[0],
      setPurchaseList = _React$useState32[1];
    var _React$useState33 = _react.default.useState(1),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      pageNumber = _React$useState34[0],
      setPageNumber = _React$useState34[1];
    var _React$useState35 = _react.default.useState(1),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      totalPages = _React$useState36[0],
      setTotalPages = _React$useState36[1];
    var _React$useState37 = _react.default.useState([]),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      approveData = _React$useState38[0],
      SetApproveData = _React$useState38[1];
    var _React$useState39 = _react.default.useState([]),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      rejectData = _React$useState40[0],
      SetRejectData = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      userType = _React$useState42[0],
      setUserType = _React$useState42[1];
    var _React$useState43 = _react.default.useState(""),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      typeId = _React$useState44[0],
      setTypeId = _React$useState44[1];
    var _React$useState45 = _react.default.useState([]),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      typeList = _React$useState46[0],
      setTypeList = _React$useState46[1];
    var _React$useState47 = _react.default.useState(""),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      verifyTr = _React$useState48[0],
      setVerifyTr = _React$useState48[1];
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
        getAllData(typeId, verifyTr);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          console.log(val);
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            fetch(`${_Config.BASE_URL}/pre_registration`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("pre_registration:", responseJson);
              if (responseJson.bstatus == 1) {
                setLoading(false);
                setTypeList(responseJson.contractors_category);
              }
            }).catch(function (error) {
              setLoading(false);
            });
          }
        });
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(cateId, TrId) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("pageNumber", "1");
          formdata.append("trViewTransaction", userType == "TR" ? "1" : "");
          formdata.append("verifiedByTr", TrId);
          formdata.append("influencerTypeId", cateId);
          fetch(`${_Config.BASE_URL}/sale_approval`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            console.log("sale_approval Response:", responseJson);
            if (responseJson.bstatus == 1) {
              setPurchaseList(responseJson.sale_data);
              setTotalPages(responseJson.total_pages);
              SetApproveData(responseJson.accept_reasons);
              SetRejectData(responseJson.reject_reasons);
              setPageNumber(1);
            } else {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setPurchaseList(responseJson.sale_data);
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
    };
    var loadMore = /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)(function* () {
        var nextPage = pageNumber + 1;
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("pageNumber", nextPage);
            fetch(`${_Config.BASE_URL}/sale_approval`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              setLoading(false);
              console.log("sale_approval Response:", responseJson);
              if (responseJson.bstatus === 1) {
                setPurchaseList(function (prev) {
                  return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(responseJson.sale_details || []));
                });
                setPageNumber(nextPage);
                setTotalPages(responseJson.total_pages);
              } else {
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                setPageNumber(1);
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
      });
      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();
    var onSelectType = function onSelectType(val) {
      setTypeId(val);
      setLoading(true);
      getAllData(val, verifyTr);
    };
    var onSelectTR = function onSelectTR(val) {
      setVerifyTr(val);
      setLoading(true);
      getAllData(typeId, val);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: userType == "TR" ? t("Verify Purchase") : t("Approve Purchase"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [userType == "Officer" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
                space: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    placeholder: t("Infulencer Category"),
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "options-outline",
                      size: 20,
                      color: "#666666",
                      style: {
                        width: 25,
                        marginLeft: 10,
                        textAlign: 'center'
                      }
                    }),
                    selectedValue: typeId,
                    onValueChange: function onValueChange(value) {
                      return onSelectType(value);
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "All",
                      value: ""
                    }), typeList.map(function (item, index) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: item.name,
                        value: item.id
                      }, index);
                    })]
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                    variant: "unstyled",
                    size: "md",
                    placeholder: t("Filter By"),
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "options-outline",
                      size: 20,
                      color: "#666666",
                      style: {
                        width: 25,
                        marginLeft: 10,
                        textAlign: 'center'
                      }
                    }),
                    selectedValue: verifyTr,
                    onValueChange: function onValueChange(value) {
                      return onSelectTR(value);
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "All",
                      value: ""
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: "Verified by TR",
                      value: "1"
                    })]
                  })
                })]
              })
            }), purchaseList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), purchaseList.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: [item.tonnage_sold || "0", " Bag(s)"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                    paddingX: 3,
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
                        children: item.Contact_Name
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
                        children: item.ID
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return _reactNative.Linking.openURL(`tel:${item.ph_number}`);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        justifyContent: "space-between",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontFamily: _MainStyle.fontRegular,
                          color: _MainStyle.darkGrey,
                          children: [t("Influencer Phone"), ":"]
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
                            children: item.ph_number
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
                        children: item.Product
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
                        children: item.claimed_quantity + " " + item.unit_name
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
                        children: item.unit_price
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
                        children: item.officer_Name + " (" + item.officerExternalId + ")"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                    style: [_MainStyle.MainStyle.solidbtn, {
                      backgroundColor: _MainStyle.darkColor,
                      height: 40
                    }],
                    onPress: function onPress() {
                      return navigation.navigate("PurchaseDetails", {
                        saleId: item.sale_id,
                        ApproveArr: approveData,
                        RejectArr: rejectData
                      });
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      color: _MainStyle.lightColor,
                      fontFamily: _MainStyle.fontBold,
                      fontSize: "sm",
                      children: t('Details')
                    })
                  })]
                })
              }, index);
            }), pageNumber > totalPages && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              paddingY: "3",
              paddingX: "6",
              justifyContent: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                variant: "outline",
                size: "sm",
                rounded: 30,
                onPress: loadMore,
                borderColor: "gray.400",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "gray.600",
                  children: t("Load More")
                })
              })
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
      borderRadius: 10
    },
    outlineBtn: {
      width: '48%',
      borderColor: '#111111',
      borderWidth: 2,
      backgroundColor: 'none',
      borderRadius: 10
    },
    inputbox: {
      backgroundColor: 'rgba(0,0,0,0.06)',
      borderRadius: 12,
      width: '100%',
      overflow: 'hidden',
      marginVertical: 7
    },
    noti: {
      color: '#ffffff',
      width: 18,
      height: 18,
      borderRadius: 20,
      position: 'absolute',
      top: -5,
      right: -3,
      fontSize: 11,
      lineHeight: 18,
      paddingTop: 1,
      textAlign: 'center',
      overflow: 'hidden'
    },
    productbox: {
      position: 'relative',
      borderRadius: 15,
      width: '44%',
      marginHorizontal: '3%',
      marginBottom: '6%',
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
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 10,
      width: '100%',
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
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
  var _default = exports.default = ApprovePurchaseScreen;
