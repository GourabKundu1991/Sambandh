  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _nativeBase = _$$_REQUIRE(_dependencyMap[1]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[2]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[3]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[4]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[5]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[6]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[8]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var FooterComponents = function FooterComponents(_ref) {
    var navigation = _ref.navigation,
      component = _ref.component,
      cartcount = _ref.cartcount,
      canredeem = _ref.canredeem;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
        backgroundColor: _MainStyle.lightColor,
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 5,
        borderColor: _MainStyle.lightGrey,
        borderTopWidth: 1,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.replace('Home', {
              pageTitle: t("Home")
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: component == "Home" ? "home" : "home-outline",
              size: 20,
              color: component == "Home" ? _MainStyle.baseColor : _MainStyle.darkGrey
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: component == "Home" ? _MainStyle.baseColor : _MainStyle.darkGrey,
              fontSize: "10",
              fontFamily: _MainStyle.fontRegular,
              children: t("Home")
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.navigate('Cart', {
              pageTitle: t("My Cart")
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: component == "Cart" ? "cart" : "cart-outline",
              size: 20,
              color: component == "Cart" ? _MainStyle.baseColor : _MainStyle.darkGrey
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: component == "Cart" ? _MainStyle.baseColor : _MainStyle.darkGrey,
              fontSize: "10",
              fontFamily: _MainStyle.fontRegular,
              children: t("My Cart")
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.navigate("RewardsCategory", {
              pageTitle: t("Rewards Category")
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: component == "RewardsCategory" ? "gift" : "gift-outline",
              size: 20,
              color: component == "RewardsCategory" ? _MainStyle.baseColor : _MainStyle.darkGrey
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: component == "RewardsCategory" ? _MainStyle.baseColor : _MainStyle.darkGrey,
              fontSize: "10",
              fontFamily: _MainStyle.fontRegular,
              children: t("Rewards")
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            return navigation.navigate('MyProfile', {
              pageTitle: t("My Profile")
            });
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
              name: component == "Profile" ? "person" : "person-outline",
              size: 20,
              color: component == "Profile" ? _MainStyle.baseColor : _MainStyle.darkGrey
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: component == "Profile" ? _MainStyle.baseColor : _MainStyle.darkGrey,
              fontSize: "10",
              fontFamily: _MainStyle.fontRegular,
              children: t("Profile")
            })]
          })
        })]
      })
    });
  };
  var _default = exports.default = FooterComponents;
