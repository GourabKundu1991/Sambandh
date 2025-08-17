  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[11]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var HeaderComponents = function HeaderComponents(_ref) {
    var navigation = _ref.navigation,
      themeColor = _ref.themeColor,
      component = _ref.component,
      cartcount = _ref.cartcount;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(''),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      userId = _React$useState2[0],
      SetUserId = _React$useState2[1];
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var CryptoJS = _$$_REQUIRE(_dependencyMap[12]);
          var decryptData = CryptoJS.AES.decrypt(val, _Config.secretKey).toString(CryptoJS.enc.Utf8);
          SetUserId(JSON.parse(decryptData).userCode);
          // SetNotificationCount(unreadCount);
        }
      });
    }, []);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
      backgroundColor: themeColor,
      padding: 15,
      borderBottomRadius: 30,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        padding: 2,
        borderRadius: 30,
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: 'space-between',
        width: '100%',
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          width: 30,
          onPress: function onPress() {
            return navigation.goBack();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "chevron-back",
            size: 30,
            color: _MainStyle.darkColor
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
          fontSize: "md",
          fontFamily: _MainStyle.fontBold,
          color: _MainStyle.darkColor,
          children: component
        }), component == 'Product Details' || component == 'Rewards' ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
          style: {
            paddingRight: 8
          },
          onPress: function onPress() {
            return navigation.navigate('Cart');
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
            name: "cart",
            size: 30,
            color: _MainStyle.darkColor
          }), cartcount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
            style: {
              position: 'absolute',
              backgroundColor: 'red',
              borderRadius: 10,
              width: 18,
              height: 18,
              justifyContent: 'center',
              alignItems: 'center',
              top: -5,
              left: 0
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              style: {
                color: _MainStyle.lightColor,
                lineHeight: 14,
                fontSize: 12,
                fontWeight: 'bold'
              },
              children: cartcount
            })
          })]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
          width: 30
        })]
      })
    });
  };
  var _default = exports.default = HeaderComponents;
