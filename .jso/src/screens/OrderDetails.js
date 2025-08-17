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
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var OrderDetailsScreen = function OrderDetailsScreen(_ref) {
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
    var _React$useState3 = _react.default.useState(""),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      cartcount = _React$useState4[0],
      setCartCount = _React$useState4[1];
    var _React$useState5 = _react.default.useState(true),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      step1 = _React$useState6[0],
      setStep1 = _React$useState6[1];
    var _React$useState7 = _react.default.useState(false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      step2 = _React$useState8[0],
      setStep2 = _React$useState8[1];
    var _React$useState9 = _react.default.useState(route.params),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      mypropsdata = _React$useState10[0],
      setMypropsData = _React$useState10[1];
    var _React$useState11 = _react.default.useState(''),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      orgDetails = _React$useState12[0],
      setOrgDetails = _React$useState12[1];
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
    var CancelOrder = function CancelOrder(orderId, Itemid) {
      _reactNative.Alert.alert(t("Warning"), t("Are you sure to cancel this order") + "?", [{
        text: t("Close"),
        onPress: function onPress() {
          return console.log("Cancel Pressed");
        },
        style: "cancel"
      }, {
        text: t("Sure"),
        onPress: function onPress() {
          setLoading(true);
          _asyncStorage.default.getItem('userToken').then(function (val) {
            if (val) {
              var formdata = new FormData();
              formdata.append("APIkey", `${_Config.API_KEY}`);
              formdata.append("token", JSON.parse(val).token);
              formdata.append("orgId", JSON.parse(val).orgId);
              formdata.append("orderId", orderId);
              formdata.append("itemId", Itemid);
              formdata.append("status", "Cancelled");
              fetch(`${_Config.BASE_URL}/cancel_order`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                body: formdata
              }).then(function (response) {
                return response.json();
              }).then(function (responseJson) {
                setLoading(false);
                console.log("Cancel Response:", responseJson);
                if (responseJson.bstatus === 1) {
                  _nativeBase.Toast.show({
                    description: responseJson.message
                  });
                  navigation.goBack();
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
        }
      }], {
        cancelable: false
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
          component: t("Order Details"),
          themeColor: orgDetails.color,
          navigation: navigation,
          cartcount: cartcount
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              bg: "#F1F1F1",
              borderRadius: 12,
              px: 4,
              py: 3,
              justifyContent: "space-between",
              alignItems: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                width: '100%',
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "semibold",
                    fontSize: "sm",
                    color: "gray.600",
                    children: "Order Number:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    fontSize: 'xl',
                    color: _MainStyle.darkColor,
                    children: route.params.OrderID
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "semibold",
                    fontSize: "sm",
                    color: "gray.600",
                    children: "Order Item Id:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    fontSize: 'lg',
                    color: _MainStyle.darkColor,
                    children: route.params.OrderItemID
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: {
                uri: mypropsdata.productimage
              },
              style: {
                width: '100%',
                height: 300,
                borderRadius: 30,
                overflow: 'hidden',
                borderWidth: 3,
                borderColor: _MainStyle.greyColor
              },
              resizeMode: "contain"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              fontWeight: "bold",
              fontSize: "xl",
              textAlign: 'center',
              color: _MainStyle.darkColor,
              children: route.params.productname
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              fontWeight: "bold",
              fontSize: "2xl",
              textAlign: 'center',
              color: _MainStyle.baseColor,
              children: [mypropsdata.pricePoint ? mypropsdata.pricePoint : "", " ", t("Points")]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              bg: "#F1F1F1",
              borderRadius: 12,
              px: 4,
              py: 3,
              justifyContent: "space-between",
              alignItems: "center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                space: 2,
                width: '100%',
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "semibold",
                    fontSize: "sm",
                    color: "gray.600",
                    children: "Order Quantity:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    fontSize: 'lg',
                    color: _MainStyle.darkColor,
                    children: route.params.quantity
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "semibold",
                    fontSize: "sm",
                    color: "gray.600",
                    children: "Order Date:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    fontSize: 'lg',
                    color: _MainStyle.darkColor,
                    children: route.params.OrderDate
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontWeight: "semibold",
                    fontSize: "sm",
                    color: "gray.600",
                    children: "Order Status:"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontFamily: _MainStyle.fontBold,
                    fontSize: 'lg',
                    color: _MainStyle.darkColor,
                    children: route.params.status
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
            justifyContent: "space-between",
            alignContent: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                color: "#444444",
                fontSize: "xs",
                fontWeight: "medium",
                children: [t("Total Points"), ":"]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                space: 1,
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#111111",
                  fontSize: "xl",
                  fontWeight: "bold",
                  children: route.params.totalPoints
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: "#111111",
                  fontSize: "sm",
                  fontWeight: "bold",
                  children: t("Points")
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
              disabled: route.params.status != "Open",
              style: {
                opacity: route.params.status == "Open" ? 1 : 0.5
              },
              onPress: function onPress() {
                return CancelOrder(route.params.OrderID, route.params.OrderItemID);
              },
              width: 160,
              backgroundColor: _MainStyle.dangerColor,
              borderRadius: 30,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                color: _MainStyle.lightColor,
                fontFamily: _MainStyle.fontBold,
                fontSize: "md",
                children: t("Cancel Order")
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = OrderDetailsScreen;
