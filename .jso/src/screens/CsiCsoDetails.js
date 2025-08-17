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
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _reactNativeMultipleSelect = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[14]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var CsiCsoDetailsScreen = function CsiCsoDetailsScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
    var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
      width = _useWindowDimensions.width,
      height = _useWindowDimensions.height;
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
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      userType = _React$useState6[0],
      setUserType = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      CSI = _React$useState8[0],
      setCSI = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      csiList = _React$useState10[0],
      setCsiList = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      CSO = _React$useState12[0],
      setCSO = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      csoList = _React$useState14[0],
      setCsoList = _React$useState14[1];
    (0, _react.useEffect)(function () {
      setLoading(true);
      setUserType(route.params.user);
      var unsubscribe = navigation.addListener('focus', function () {
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
      });
      getAllData(CSI);
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(csiID) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          setCSI(JSON.parse(val).hier_id);
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("type", route.params.user == "CSH" ? 1 : 2);
          formdata.append("csiId", route.params.user == "CSH" ? csiID ? csiID[0] : "" : JSON.parse(val).hier_id);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/get_csi_cso_details`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_csi_cso_details:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              if (route.params.user == "CSH") {
                setCsiList(responseJson.csi_details);
                setCsoList(responseJson.cso_details);
              } else if (route.params.user == "CSI") {
                setCsiList([]);
                setCsoList(responseJson.cso_details);
              }
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
    var onSelectCSI = function onSelectCSI(val) {
      setLoading(true);
      setCSO("");
      setCSI(val);
      getAllData(val);
    };
    var goNext = function goNext() {
      navigation.navigate("MemberBase", {
        baseType: route.params.baseType,
        pageName: route.params.pageName,
        csoID: CSO
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
          component: userType + " " + t("Details"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              style: {
                position: 'relative',
                width: '100%',
                borderRadius: 20,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                space: 6,
                padding: 8,
                style: {
                  justifyContent: 'center',
                  alignItems: 'center'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 3,
                  width: '100%',
                  children: [userType == "CSH" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeMultipleSelect.default, {
                      hideTags: true,
                      items: csiList,
                      uniqueKey: "id",
                      onSelectedItemsChange: function onSelectedItemsChange(text) {
                        return onSelectCSI(text);
                      },
                      selectedItems: CSI,
                      selectText: "Select CSI",
                      searchInputPlaceholderText: "Search Items...",
                      onChangeInput: function onChangeInput(text) {
                        return console.log(text);
                      },
                      altFontFamily: "ProximaNova-Light",
                      tagRemoveIconColor: "#CCC",
                      tagBorderColor: "#CCC",
                      tagTextColor: "#CCC",
                      selectedItemTextColor: _MainStyle.successColor,
                      selectedItemIconColor: _MainStyle.successColor,
                      itemTextColor: "#000000",
                      displayKey: "name_with_external",
                      searchInputStyle: {
                        color: '#CCC'
                      },
                      single: true,
                      styleDropdownMenuSubsection: {
                        height: 50,
                        top: 5,
                        paddingLeft: 15,
                        borderWidth: 1,
                        borderColor: "#dddddd",
                        borderRadius: 30
                      },
                      styleListContainer: {
                        maxHeight: 250,
                        overflow: 'scroll'
                      }
                    })
                  }), CSI != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeMultipleSelect.default, {
                      hideTags: true,
                      items: csoList,
                      uniqueKey: "id",
                      onSelectedItemsChange: function onSelectedItemsChange(text) {
                        return setCSO(text);
                      },
                      selectedItems: CSO,
                      selectText: "Select CSO",
                      searchInputPlaceholderText: "Search Items...",
                      onChangeInput: function onChangeInput(text) {
                        return console.log(text);
                      },
                      altFontFamily: "ProximaNova-Light",
                      tagRemoveIconColor: "#CCC",
                      tagBorderColor: "#CCC",
                      tagTextColor: "#CCC",
                      selectedItemTextColor: _MainStyle.successColor,
                      selectedItemIconColor: _MainStyle.successColor,
                      itemTextColor: "#000000",
                      displayKey: "name_with_external",
                      searchInputStyle: {
                        color: '#CCC'
                      },
                      submitButtonColor: orgDetails.color,
                      submitButtonText: "Done",
                      single: true,
                      styleDropdownMenuSubsection: {
                        height: 50,
                        top: 5,
                        paddingLeft: 15,
                        borderWidth: 1,
                        borderColor: "#dddddd",
                        borderRadius: 30
                      },
                      styleListContainer: {
                        maxHeight: 250,
                        overflow: 'scroll'
                      }
                    })
                  })]
                })
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            disabled: CSI == "" || CSO == "",
            style: {
              opacity: CSI != "" && CSO != "" ? 1 : 0.4
            },
            onPress: function onPress() {
              return goNext();
            },
            width: '100%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Next")
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

  /* const styles = StyleSheet.create({
  }); */
  var _default = exports.default = CsiCsoDetailsScreen;
