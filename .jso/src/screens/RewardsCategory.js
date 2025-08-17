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
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RewardsCateScreen = function RewardsCateScreen(_ref) {
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
    var _React$useState9 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      pageNumber = _React$useState10[0],
      setPageNumber = _React$useState10[1];
    var _React$useState11 = _react.default.useState(true),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      isLoadMore = _React$useState12[0],
      setIsLoadMore = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      allProducts = _React$useState14[0],
      setAllProducts = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      inCart = _React$useState16[0],
      setInCart = _React$useState16[1];
    var _React$useState17 = _react.default.useState([]),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      allCategory = _React$useState18[0],
      setAllCategory = _React$useState18[1];
    var _React$useState19 = _react.default.useState(0),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      cateId = _React$useState20[0],
      setCateId = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      sortBy = _React$useState22[0],
      setSortBy = _React$useState22[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      pointRange = _React$useState24[0],
      setPointRange = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      fromValue = _React$useState26[0],
      setFromValue = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      toValue = _React$useState28[0],
      setToValue = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      userType = _React$useState30[0],
      setUserType = _React$useState30[1];
    var _React$useState31 = _react.default.useState(""),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      cartcount = _React$useState32[0],
      setCartCount = _React$useState32[1];
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      imageBase = _React$useState34[0],
      setImageBase = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      availablePoint = _React$useState36[0],
      setAvailablePoint = _React$useState36[1];
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      filtervalue = _React$useState38[0],
      setFilterValue = _React$useState38[1];
    var _React$useState39 = _react.default.useState(false),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      filteration = _React$useState40[0],
      setFiltertion = _React$useState40[1];
    var _React$useState41 = _react.default.useState(0),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      canRedeem = _React$useState42[0],
      setCanRedeem = _React$useState42[1];
    var _React$useState43 = _react.default.useState(0),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      canSubmitKYC = _React$useState44[0],
      setCanSubmitKYC = _React$useState44[1];
    var _React$useState45 = _react.default.useState(""),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      canSubmitKYCText = _React$useState46[0],
      setCanSubmitKYCText = _React$useState46[1];
    var _React$useState47 = _react.default.useState(0),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      loadMoreShow = _React$useState48[0],
      setLoadMoreShow = _React$useState48[1];
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
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/catalog`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("catalog:", responseJson);
            if (responseJson.bstatus == 1) {
              setAllProducts(responseJson.products);
              countCart();
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
    var renderProduct = function renderProduct(_ref2) {
      var item = _ref2.item,
        index = _ref2.index;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
        colors: ["#f0f2e5", "#ffffff"],
        flex: 1,
        style: styles.productbox,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.navigate("ProductDetails", {
              details: item
            });
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
            style: styles.productimage,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
              source: {
                uri: item.BaseUrl + item.ProductImage
              },
              style: {
                width: 100,
                height: 90
              },
              resizeMode: "contain"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            fontSize: "sm",
            color: _MainStyle.darkColor,
            mb: "2",
            children: item.productName.substring(0, 30)
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
            fontSize: "md",
            fontWeight: "bold",
            color: orgDetails.color,
            children: [item.pricePoints, " ", t("Points")]
          })]
        })
      }, index);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Rewards"),
          themeColor: orgDetails.color,
          navigation: navigation,
          cartcount: cartcount
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [allProducts.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
              flexWrap: "wrap",
              justifyContent: 'space-between',
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, {
                scrollEnabled: false,
                data: allProducts,
                renderItem: renderProduct,
                numColumns: 2
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
      borderRadius: 20,
      width: '44%',
      marginHorizontal: '3%',
      marginBottom: '6%',
      padding: 15,
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
  var _default = exports.default = RewardsCateScreen;
