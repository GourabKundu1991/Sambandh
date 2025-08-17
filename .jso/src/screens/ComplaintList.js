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
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _reactNativeGestureHandler = _$$_REQUIRE(_dependencyMap[11]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _native = _$$_REQUIRE(_dependencyMap[13]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[16]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[17]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ComplaintListScreen = function ComplaintListScreen(_ref) {
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
      complaintList = _React$useState6[0],
      setComplaintList = _React$useState6[1];
    var _React$useState7 = _react.default.useState(1),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      pageNumber = _React$useState8[0],
      setPageNumber = _React$useState8[1];
    var _React$useState9 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      totalPages = _React$useState10[0],
      setTotalPages = _React$useState10[1];
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
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("pageNumber", 1);
          fetch(`${_Config.BASE_URL}/get_complaints`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_complaints:", responseJson);
            if (responseJson.bstatus === 1) {
              setLoading(false);
              setComplaintList(responseJson.conplaints);
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("My Complaints"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [complaintList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), complaintList.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#f0f2e5", "#ffffff"],
                flex: 1,
                style: {
                  borderRadius: 30,
                  overflow: 'hidden',
                  padding: 15
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  space: 3,
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
                      children: t("Complain ID")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: item.complain_id
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      paddingX: 3,
                      width: '100%',
                      space: 1,
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Product Name"), ": ", item.product_name]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("status"), ": ", item.status]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Category Name"), ": ", item.category_name]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        marginY: 2,
                        justifyContent: "space-between",
                        backgroundColor: '#eeeeee',
                        paddingY: 3,
                        paddingX: 5,
                        borderRadius: 10,
                        overflow: 'hidden',
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: _MainStyle.darkGrey,
                          textAlign: 'center',
                          fontFamily: _MainStyle.fontBold,
                          children: [t("Complain Description"), ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: _MainStyle.darkColor,
                          textAlign: 'center',
                          fontWeight: "bold",
                          children: item.complain_description
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        marginY: 2,
                        justifyContent: "space-between",
                        backgroundColor: '#eeeeee',
                        paddingY: 3,
                        paddingX: 5,
                        borderRadius: 10,
                        overflow: 'hidden',
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: _MainStyle.darkGrey,
                          textAlign: 'center',
                          fontFamily: _MainStyle.fontBold,
                          children: [t("Complain Remarks"), ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: _MainStyle.darkColor,
                          textAlign: 'center',
                          fontWeight: "bold",
                          children: item.complain_remarks
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                          style: {
                            width: '48%'
                          },
                          space: 2,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                            alignItems: "center",
                            space: 0,
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                              name: "attach-outline",
                              size: 18,
                              color: "#666666"
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                              color: "#666666",
                              fontSize: "sm",
                              textTransform: "capitalize",
                              children: t("Image 1")
                            })]
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                            style: [_MainStyle.MainStyle.inputbox, {
                              position: 'relative'
                            }],
                            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                              source: item.image1 != "" ? {
                                uri: item.image1
                              } : _$$_REQUIRE(_dependencyMap[18]),
                              alt: "image",
                              resizeMode: "contain",
                              style: {
                                width: '100%',
                                height: 100
                              }
                            })
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                          style: {
                            width: '48%'
                          },
                          space: 2,
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                            alignItems: "center",
                            space: 0,
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                              name: "attach-outline",
                              size: 18,
                              color: "#666666"
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                              color: "#666666",
                              fontSize: "sm",
                              textTransform: "capitalize",
                              children: t("Image 2")
                            })]
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                            style: [_MainStyle.MainStyle.inputbox, {
                              position: 'relative'
                            }],
                            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                              source: item.image2 != "" ? {
                                uri: item.image2
                              } : _$$_REQUIRE(_dependencyMap[18]),
                              alt: "image",
                              resizeMode: "contain",
                              style: {
                                width: '100%',
                                height: 100
                              }
                            })
                          })]
                        })]
                      })]
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = ComplaintListScreen;
