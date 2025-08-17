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
  var _datetimepicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[16]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[18]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[19]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[20]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ApproveInfluencerScreen = function ApproveInfluencerScreen(_ref) {
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
    var _React$useState3 = _react.default.useState([]),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      influencers = _React$useState4[0],
      setInfluencers = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      searchTerm = _React$useState6[0],
      setSearchTerm = _React$useState6[1];
    var _React$useState7 = _react.default.useState(''),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      orgDetails = _React$useState8[0],
      setOrgDetails = _React$useState8[1];
    var _React$useState9 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      pageNumber = _React$useState10[0],
      setPageNumber = _React$useState10[1];
    var _React$useState11 = _react.default.useState(1),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      totalPages = _React$useState12[0],
      setTotalPages = _React$useState12[1];
    var _React$useState13 = _react.default.useState(0),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      loadMoreShow = _React$useState14[0],
      setLoadMoreShow = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      reasonPopup = _React$useState16[0],
      setReasonPopup = _React$useState16[1];
    var _React$useState17 = _react.default.useState(''),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      comment = _React$useState18[0],
      setComment = _React$useState18[1];
    var _React$useState19 = _react.default.useState(''),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      selectedInfluId = _React$useState20[0],
      setInfluId = _React$useState20[1];
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
    var getAllData = function getAllData(status) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("searchText", searchTerm);
          formdata.append("pageNumber", "1");
          fetch(`${_Config.BASE_URL}/influncer_approval`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("influncer_approval:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setInfluencers(responseJson.influncers);
              setTotalPages(responseJson.total_pages || 1);
              setPageNumber(1);
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
    var onSearch = function onSearch() {
      setLoading(true);
      getAllData();
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
            formdata.append("searchText", searchTerm);
            formdata.append("pageNumber", nextPage);
            fetch(`${_Config.BASE_URL}/influncer_approval`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              setLoading(false);
              console.log("influncer_approval Response:", responseJson);
              if (responseJson.bstatus === 1) {
                setInfluencers(function (prev) {
                  return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(responseJson.influncers || []));
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
    var onApprove = function onApprove(influID) {
      _reactNative.Alert.alert(t("Warning"), t("Are you sure want to Approve this Influncer") + "?", [{
        text: t("Cancel"),
        onPress: function onPress() {
          return console.log("Cancel Pressed");
        },
        style: "cancel"
      }, {
        text: t("Yes"),
        onPress: function onPress() {
          setLoading(true);
          _asyncStorage.default.getItem('userToken').then(function (val) {
            if (val != null) {
              var formdata = new FormData();
              formdata.append("token", JSON.parse(val).token);
              formdata.append("APIkey", `${_Config.API_KEY}`);
              formdata.append("orgId", JSON.parse(val).orgId);
              formdata.append("influncer_id", influID);
              fetch(`${_Config.BASE_URL}/approve_influncer`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                body: formdata
              }).then(function (response) {
                return response.json();
              }).then(function (responseJson) {
                console.log("approve_influncer:", responseJson);
                if (responseJson.bstatus == 1) {
                  _nativeBase.Toast.show({
                    description: responseJson.message
                  });
                  getAllData();
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
    var onReject = function onReject(influID) {
      setReasonPopup(true);
      setInfluId(influID);
    };
    var submitReject = function submitReject() {
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("influncer_id", selectedInfluId);
          formdata.append("reason", comment);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/reject_influncer`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("reject_influncer:", responseJson);
            if (responseJson.bstatus == 1) {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              getAllData();
              setReasonPopup(false);
              setComment("");
              setInfluId("");
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Approve Influencer"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
              style: _MainStyle.MainStyle.inputbox,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                fontFamily: _MainStyle.fontBold,
                size: "md",
                variant: "unstyled",
                placeholder: t('ID / Name / Phone'),
                InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                  name: "search",
                  size: 20,
                  color: "#000000",
                  style: {
                    width: 25,
                    marginLeft: 10
                  }
                }),
                onChangeText: function onChangeText(text) {
                  return setSearchTerm(text);
                },
                InputRightElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  style: [_MainStyle.MainStyle.solidbtn, {
                    backgroundColor: 'black',
                    width: 90
                  }],
                  onPress: function onPress() {
                    return onSearch();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.lightColor,
                    fontFamily: _MainStyle.fontSemiBold,
                    fontSize: "sm",
                    children: t('Search')
                  })
                })
              })
            }), influencers.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), influencers.map(function (item, index) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
                      children: t("Influencer ID")
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontSize: "sm",
                      color: _MainStyle.darkColor,
                      fontWeight: "bold",
                      children: item.id
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                      paddingX: 3,
                      width: '70%',
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "md",
                        color: _MainStyle.darkColor,
                        fontFamily: _MainStyle.fontBold,
                        children: item.name
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Category"), ": ", item.category]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontBold,
                        children: [t("Date"), ": ", (0, _moment.default)(item.enrollment_date).format("DD-MM-YYYY")]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                        style: {
                          marginTop: 10
                        },
                        onPress: function onPress() {
                          return Linking.openURL(`tel:${item.ph_number}`);
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
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
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      backgroundColor: orgDetails.color,
                      size: 'sm',
                      style: {
                        width: 90
                      },
                      borderRadius: 30,
                      overflow: 'hidden',
                      onPress: function onPress() {
                        return navigation.navigate('InfluencerDetails', {
                          influencerId: item.id
                        });
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "sm",
                        children: t('View')
                      })
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      backgroundColor: _MainStyle.dangerColor,
                      size: 'sm',
                      style: {
                        width: '45%',
                        marginTop: 15
                      },
                      borderRadius: 30,
                      overflow: 'hidden',
                      onPress: function onPress() {
                        return onReject(item.id);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "sm",
                        children: t('Reject')
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                      backgroundColor: _MainStyle.successColor,
                      size: 'sm',
                      style: {
                        width: '45%',
                        marginTop: 15
                      },
                      borderRadius: 30,
                      overflow: 'hidden',
                      onPress: function onPress() {
                        return onApprove(item.id);
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: _MainStyle.lightColor,
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "sm",
                        children: t('Approve')
                      })
                    })]
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
                children: t("Enter Reason for Reject")
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
                return submitReject();
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
            return setReasonPopup(false), setComment(""), setInfluId("");
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
  var styles = _reactNative.StyleSheet.create({});
  var _default = exports.default = ApproveInfluencerScreen;
