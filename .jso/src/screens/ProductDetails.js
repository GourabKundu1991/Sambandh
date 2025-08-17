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
  var _reactNativeRenderHtml = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[10]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ProductDetailsScreen = function ProductDetailsScreen(_ref) {
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
    var _React$useState5 = _react.default.useState(''),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      orgDetails = _React$useState6[0],
      setOrgDetails = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      prodData = _React$useState8[0],
      setProdData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      prodImage = _React$useState10[0],
      setProdImage = _React$useState10[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        setProdData(route.params.details);
        setProdImage(route.params.details.BaseUrl + route.params.details.ProductImage);
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
        countCart();
      });
      return unsubscribe;
    }, []);
    var countCart = function countCart() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/cart_count`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("cart_count:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setCartCount(responseJson.cart_count);
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
    var AddToCard = function AddToCard(type) {
      setLoading(true);
      console.log(prodData);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("prod_id", prodData.productId);
          formdata.append("price_in_points", prodData.pricePoints);
          formdata.append("prod_name", prodData.productName);
          formdata.append("price", prodData.pricePoints);
          formdata.append("quantity", 1);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/addcart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("addcart:", responseJson);
            _nativeBase.Toast.show({
              description: t(responseJson.message)
            });
            if (responseJson.bstatus == 1) {
              countCart();
              if (type == "Redeem") {
                navigation.navigate("Cart");
              }
            } else {
              setLoading(false);
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
          component: t("Product Details"),
          themeColor: orgDetails.color,
          navigation: navigation,
          cartcount: cartcount
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: {
                backgroundColor: '#eeeeee',
                borderWidth: 5,
                borderColor: '#eeeeee'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                source: {
                  uri: prodImage
                },
                width: '100%',
                height: 230,
                style: {
                  borderRadius: 5,
                  overflow: 'hidden'
                },
                resizeMode: "contain"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              fontSize: "lg",
              textAlign: 'center',
              color: _MainStyle.darkColor,
              children: prodData.productName
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
              fontWeight: "bold",
              textAlign: 'center',
              fontSize: "xl",
              color: orgDetails.color,
              children: [prodData.pricePoints, " ", t("Points")]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              space: 4,
              mb: 10,
              px: 4,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                bg: "#F1F1F1",
                borderRadius: 12,
                px: 4,
                py: 3,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "semibold",
                  fontSize: "md",
                  color: "gray.600",
                  children: "Item Code:"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "bold",
                  fontSize: "20",
                  color: "black",
                  children: prodData.ProductCode
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                bg: "#F1F1F1",
                borderRadius: 12,
                px: 4,
                py: 3,
                width: "100%",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  fontWeight: "semibold",
                  fontSize: "md",
                  color: "gray.600",
                  children: "Description:"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeRenderHtml.RenderHTML, {
                  contentWidth: width,
                  baseStyle: {
                    color: '#444444',
                    fontSize: 14
                  },
                  source: {
                    html: prodData.ProductDesc
                  }
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
          justifyContent: 'space-evenly',
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            variant: 'outline',
            borderColor: orgDetails.color,
            onPress: function onPress() {
              return AddToCard("Add");
            },
            width: '45%',
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.color,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Add to Cart")
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return AddToCard("Redeem");
            },
            width: '45%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Buy Now")
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = ProductDetailsScreen;
