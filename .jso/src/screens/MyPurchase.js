  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _toConsumableArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncToGenerator2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[4]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[5]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[7]);
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[9]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[12]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[16]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[18]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var MyPurchaseScreen = function MyPurchaseScreen(_ref) {
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
    var _React$useState3 = _react.default.useState(''),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      orgDetails = _React$useState4[0],
      setOrgDetails = _React$useState4[1];
    var _React$useState5 = _react.default.useState([]),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      purchaseList = _React$useState6[0],
      setPurchaseList = _React$useState6[1];
    var _React$useState7 = _react.default.useState(1),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      pageNumber = _React$useState8[0],
      setPageNumber = _React$useState8[1];
    var _React$useState9 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      totalPages = _React$useState10[0],
      setTotalPages = _React$useState10[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState11 = _react.default.useState(0),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      loadMoreShow = _React$useState12[0],
      setLoadMoreShow = _React$useState12[1];
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
        if (val) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("pageNumber", "1");
          fetch(`${_Config.BASE_URL}/my_sale_report`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            console.log("My Purchase Response:", responseJson);
            if (responseJson.bstatus === 1) {
              setPurchaseList(responseJson.sale_details || []);
              setTotalPages(responseJson.total_pages || 1);
              setPageNumber(1);
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
            fetch(`${_Config.BASE_URL}/my_sale_report`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              setLoading(false);
              console.log("LoadMore Purchase Response:", responseJson);
              if (responseJson.bstatus === 1) {
                setPurchaseList(function (prev) {
                  return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(responseJson.sale_details || []));
                });
                setPageNumber(nextPage);
                setTotalPages(responseJson.total_pages || totalPages);
              } else {
                setPageNumber(1);
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("My Purchases"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: purchaseList.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#f0f2e5", "#ffffff"],
                flex: 1,
                style: {
                  borderRadius: 30,
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  padding: 5,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: "space-between",
                    marginBottom: 2,
                    backgroundColor: _MainStyle.lightColor,
                    paddingY: 3,
                    paddingX: 5,
                    borderRadius: 15,
                    overflow: 'hidden',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkGrey,
                      fontFamily: _MainStyle.fontBold,
                      children: "Bags Sold"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: [item.tonnage_sold || "0", " Bags"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                    paddingX: 3,
                    children: [{
                      label: 'Product',
                      value: item.product_name
                    }, {
                      label: 'Claimed Quantity',
                      value: `${item.claimed_quantity} ${item.unit_name}`
                    }, {
                      label: 'Unit Price',
                      value: item.unit_price
                    }, {
                      label: 'Category',
                      value: item.category
                    }, {
                      label: 'Dealer Name',
                      value: item.puchased_from
                    }, {
                      label: 'Dealer Code',
                      value: item.dealer_code
                    }, {
                      label: 'Site Address',
                      value: item.site_address || "N/A"
                    }, {
                      label: 'Date',
                      value: item.sale_date
                    }, {
                      label: 'Reason',
                      value: item.comments
                    }, {
                      label: 'Status',
                      value: item.status
                    }].map(function (field, idx) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                        children: field.value != '' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                          justifyContent: "space-between",
                          marginTop: 2,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                            color: _MainStyle.darkGrey,
                            children: [field.label, ":"]
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            fontWeight: "bold",
                            textAlign: "right",
                            color: field.label === 'Status' ? field.value.toLowerCase() === 'approved' ? _MainStyle.successColor : _MainStyle.dangerColor : _MainStyle.darkColor,
                            children: field.value
                          })]
                        })
                      }, idx);
                    })
                  })]
                })
              }, index);
            })
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
  var _default = exports.default = MyPurchaseScreen;
