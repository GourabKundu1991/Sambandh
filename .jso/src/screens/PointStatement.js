  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[2]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[3]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _Config = _$$_REQUIRE(_dependencyMap[6]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[7]);
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[8]));
  var _Events = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[9]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[10]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _datetimepicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[14]);
  var _Footer = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _reactNativeRenderHtml = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[16]));
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[17]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[18]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PointStatementScreen = function PointStatementScreen(_ref) {
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
      pointBalance = _React$useState8[0],
      setPointBalance = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      points = _React$useState10[0],
      setPoints = _React$useState10[1];
    var _React$useState11 = _react.default.useState(""),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      startDate = _React$useState12[0],
      setStartDate = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      endDate = _React$useState14[0],
      setEndDate = _React$useState14[1];
    var _React$useState15 = _react.default.useState(false),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      showStartPicker = _React$useState16[0],
      setShowStartPicker = _React$useState16[1];
    var _React$useState17 = _react.default.useState(false),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      showEndPicker = _React$useState18[0],
      setShowEndPicker = _React$useState18[1];
    var _React$useState19 = _react.default.useState(1),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      pageNumber = _React$useState20[0],
      setPageNumber = _React$useState20[1];
    var _React$useState21 = _react.default.useState(true),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      isLoadMore = _React$useState22[0],
      setIsLoadMore = _React$useState22[1];
    var formatDate = function formatDate(date) {
      if (!date) return '';
      return date.toLocaleDateString();
    };
    var clearDates = function clearDates() {
      setStartDate("");
      setEndDate("");
      setLoading(true);
      getAllData("", "");
    };
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
        getAllData(startDate, endDate);
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData(dateStart, dateEnd) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("from_date", dateStart != "" ? (0, _moment.default)(dateStart).format("YYYY-MM-DD") : "");
          formdata.append("to_date", dateEnd != "" ? (0, _moment.default)(dateEnd).format("YYYY-MM-DD") : "");
          formdata.append("page", 1);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/pointstatements`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("pointstatements:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setPoints(responseJson.trnasc_list);
              setPointBalance(responseJson.current_balance);
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
    var loadMore = function loadMore() {
      var num = pageNumber + 1;
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("from_date", startDate);
          formdata.append("to_date", endDate);
          formdata.append("page", num);
          fetch(`${_Config.BASE_URL}/pointstatements`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Point Statements:", responseJson);
            if (responseJson.status == 'success') {
              setLoading(false);
              var newArrya = points.concat(responseJson.trnasc_list);
              setPoints(newArrya);
              setPageNumber(num);
            } else {
              setLoading(false);
              setIsLoadMore(false);
              setPageNumber(1);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("Point Statements Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        } else {
          setLoading(false);
          _asyncStorage.default.clear();
          navigation.navigate('Login');
        }
      });
    };
    var onSearch = function onSearch() {
      setLoading(true);
      getAllData(startDate, endDate);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Point Statement"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              padding: "4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: styles.dateRow,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
                  style: styles.dateBox,
                  onPress: function onPress() {
                    return setShowStartPicker(true);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "calendar",
                    size: 20,
                    color: "#D9531E"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    style: styles.dateText,
                    children: startDate ? formatDate(startDate) : 'Start Date *'
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
                  style: styles.dateBox,
                  onPress: function onPress() {
                    return setShowEndPicker(true);
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "calendar",
                    size: 20,
                    color: "#D9531E"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    style: styles.dateText,
                    children: endDate ? formatDate(endDate) : 'End Date *'
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                style: styles.buttonRow,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                  style: styles.clearBtn,
                  onPress: clearDates,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    style: styles.clearText,
                    children: "Clear"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
                  style: styles.searchBtn,
                  onPress: function onPress() {
                    return onSearch();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    style: styles.searchText,
                    children: "Search"
                  })
                })]
              }), showStartPicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_datetimepicker.default, {
                value: startDate || new Date(),
                mode: "date",
                display: "default",
                onChange: function onChange(event, selectedDate) {
                  setShowStartPicker(false);
                  setStartDate(selectedDate);
                }
              }), showEndPicker && /*#__PURE__*/(0, _jsxRuntime.jsx)(_datetimepicker.default, {
                value: endDate || new Date(),
                mode: "date",
                display: "default",
                onChange: function onChange(event, selectedDate) {
                  setShowEndPicker(false);
                  setEndDate(selectedDate);
                }
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
              alignItems: 'center',
              marginBottom: 4,
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                style: {
                  borderColor: _MainStyle.greyColor,
                  borderWidth: 1,
                  padding: 18,
                  width: '85%',
                  borderRadius: 50,
                  marginTop: 40,
                  position: 'relative'
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                  alignSelf: 'center',
                  style: {
                    backgroundColor: orgDetails.color,
                    padding: 8,
                    width: '85%',
                    borderRadius: 40,
                    marginTop: -38,
                    overflow: 'hidden'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                    fontSize: "md",
                    fontFamily: _MainStyle.fontBold,
                    textAlign: 'center',
                    children: t("Available Points")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                  color: _MainStyle.darkColor,
                  marginTop: 3,
                  fontSize: "xl",
                  fontWeight: 'bold',
                  textAlign: 'center',
                  children: [pointBalance, /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "md",
                    fontWeight: 'normal',
                    children: t(" Points")
                  })]
                })]
              })
            }), points.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                padding: "4",
                space: "3",
                children: points.map(function (item, index) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Box, {
                    borderWidth: "1",
                    borderColor: "#aaaaaa",
                    borderStyle: "dashed",
                    borderRadius: "10",
                    overflow: "hidden",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      bg: "#ffffff",
                      borderTopRadius: "10",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                        padding: "2",
                        w: "33%",
                        children: item.transaction_type == "Credit" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                          style: {
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            overflow: 'hidden'
                          },
                          bg: _MainStyle.dangerColor,
                          justifyContent: 'center',
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            textAlign: 'center',
                            color: _MainStyle.lightColor,
                            fontWeight: 'black',
                            style: styles.note,
                            children: "C"
                          })
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                          style: {
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            overflow: 'hidden'
                          },
                          bg: _MainStyle.successColor,
                          justifyContent: 'center',
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            textAlign: 'center',
                            color: _MainStyle.lightColor,
                            fontWeight: 'black',
                            style: styles.note,
                            children: "D"
                          })
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        padding: "2",
                        w: "33%",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "xs",
                          color: "#666666",
                          children: [t("Points"), ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: "#111111",
                          fontWeight: "medium",
                          children: item.reward_points
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                        padding: "2",
                        w: "33%",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                            fontSize: "xs",
                            color: "#666666",
                            children: [t("Sub Type"), ":"]
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                            fontSize: "sm",
                            color: "#111111",
                            fontWeight: "medium",
                            children: item.subtype
                          })]
                        })
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        padding: "2",
                        w: "33%",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "xs",
                          color: "#666666",
                          children: [t("Date"), ":"]
                        }), item.transaction_type == "Credit" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: "#111111",
                          fontWeight: "medium",
                          children: (0, _moment.default)(item.till_date).format("DD-MM-YYYY")
                        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: "#111111",
                          fontWeight: "medium",
                          children: (0, _moment.default)(item.created_at).format("DD-MM-YYYY")
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        padding: "2",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "xs",
                          color: "#666666",
                          children: [t("Description"), ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: "#111111",
                          fontWeight: "medium",
                          children: item.transaction_desc
                        })]
                      })]
                    }), item.comment != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignItems: "center",
                      bg: "#eeeeee",
                      borderBottomRadius: "10",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                        padding: "2",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "xs",
                          color: "#666666",
                          children: [t("Narration"), ":"]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          fontSize: "sm",
                          color: "#111111",
                          fontWeight: "medium",
                          children: item.comment
                        })]
                      })
                    })]
                  }, index);
                })
              }), isLoadMore && points.length > 7 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                pb: "3",
                paddingX: "6",
                justifyContent: "center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                  variant: "outline",
                  size: 'xs',
                  rounded: 30,
                  onPress: function onPress() {
                    return loadMore();
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: "#bbbbbb",
                    children: t("Load More")
                  })
                })
              })]
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
    container: {
      width: '80%',
      height: 150,
      margin: 20,
      top: 40,
      left: '5%',
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 25,
      elevation: 5
    },
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    dateBox: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      flex: 0.48,
      padding: 12,
      borderRadius: 10
    },
    dateText: {
      marginLeft: 8,
      fontSize: 14,
      color: '#444'
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    clearBtn: {
      flex: 0.48,
      backgroundColor: '#888',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center'
    },
    searchBtn: {
      flex: 0.48,
      backgroundColor: '#000',
      paddingVertical: 12,
      borderRadius: 10,
      alignItems: 'center'
    },
    clearText: {
      color: '#fff',
      fontWeight: 'bold'
    },
    searchText: {
      color: '#fff',
      fontWeight: 'bold'
    }
  });
  var _default = exports.default = PointStatementScreen;
