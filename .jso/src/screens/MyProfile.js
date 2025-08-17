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
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[12]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[13]));
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[14]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var ViewProfileScreen = function ViewProfileScreen(_ref) {
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
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      points = _React$useState6[0],
      setPoints = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      profileData = _React$useState8[0],
      setProfileData = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      userId = _React$useState10[0],
      setUserId = _React$useState10[1];
    (0, _react.useEffect)(function () {
      var unsubscribe = navigation.addListener('focus', function () {
        setLoading(true);
        _asyncStorage.default.getItem('loginType').then(function (valColor) {
          if (valColor != null) {
            setOrgDetails(JSON.parse(valColor));
          }
        });
        getAllData();
      });
      return unsubscribe;
    }, []);
    var getAllData = function getAllData() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        setUserId(JSON.parse(val).userCode);
        if (val) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          fetch(`${_Config.BASE_URL}/profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            setLoading(false);
            console.log("Profile Response:", responseJson);
            if (responseJson.bstatus === 1) {
              setProfileData(responseJson.profile);
              setPoints(responseJson.available_point);
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
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("My Profile"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
              alignSelf: 'center',
              borderWidth: 5,
              borderColor: orgDetails.color,
              borderRadius: 100,
              overflow: "hidden",
              size: 130,
              backgroundColor: "#ffffff",
              zIndex: 9,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Avatar, {
                size: "full",
                source: profileData != null && profileData.profile_image ? {
                  uri: profileData.profile_image
                } : _$$_REQUIRE(_dependencyMap[17])
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden',
                marginTop: -90
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                space: 2,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                  backgroundColor: orgDetails.color,
                  borderRadius: 30,
                  overflow: 'hidden',
                  py: 3,
                  alignItems: "center",
                  marginTop: 20,
                  marginBottom: 5,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    fontSize: "lg",
                    fontWeight: "bold",
                    color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                    children: profileData.name
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    fontSize: "sm",
                    color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
                    children: [t("Member ID"), ": ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontWeight: "bold",
                      children: userId
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                    backgroundColor: _MainStyle.lightColor,
                    px: 4,
                    py: 1,
                    borderRadius: 30,
                    mt: 3,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      fontSize: "md",
                      color: _MainStyle.darkColor,
                      children: [t("Available Point:"), " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        color: _MainStyle.darkColor,
                        fontWeight: 'bold',
                        children: [" ", points, " Points"]
                      })]
                    })
                  })]
                }), [{
                  label: 'Mobile',
                  value: profileData.mobile
                }, {
                  label: 'Category',
                  value: profileData.category
                }, {
                  label: 'DOB',
                  value: profileData.dob
                }, {
                  label: 'Email',
                  value: profileData.email
                }, {
                  label: 'Address Line 1',
                  value: profileData.address_line_1
                }, {
                  label: 'Address Line 2',
                  value: profileData.address_line_2
                }, {
                  label: 'Region',
                  value: profileData.region
                }, {
                  label: 'RMO',
                  value: profileData.rmo
                }, {
                  label: 'AO',
                  value: profileData.ao
                }, {
                  label: 'State',
                  value: profileData.state
                }, {
                  label: 'District',
                  value: profileData.district
                }, {
                  label: 'Sub District',
                  value: profileData.sub_district
                }, {
                  label: 'Pin Code',
                  value: profileData.pin
                }, {
                  label: 'Maritial Status',
                  value: profileData.maritialstatus
                }, {
                  label: 'Anniversary',
                  value: profileData.anniversary
                }, {
                  label: 'Aadhar Number',
                  value: profileData.aadhaar_number
                }, {
                  label: 'PAN Number',
                  value: profileData.pan_number
                }, {
                  label: 'PAN status',
                  value: profileData.pan_availability
                }, {
                  label: 'Aadhar Image Front',
                  value: profileData.aadhaar_front,
                  isImage: true
                }, {
                  label: 'Aadhar Image Back',
                  value: profileData.aadhaar_back,
                  isImage: true
                }, {
                  label: 'PAN Image',
                  value: profileData.pan,
                  isImage: true
                }].map(function (item, index) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                    children: item.value && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontSize: "sm",
                        color: _MainStyle.darkGrey,
                        fontFamily: _MainStyle.fontSemiBold,
                        children: [item.label, ":"]
                      }), item.isImage ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                        source: {
                          uri: item.value
                        },
                        style: {
                          width: 70,
                          height: 70,
                          borderRadius: 8,
                          marginVertical: 10,
                          backgroundColor: _MainStyle.greyColor
                        },
                        resizeMode: "contain"
                      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        fontSize: "sm",
                        fontFamily: _MainStyle.fontBold,
                        color: _MainStyle.darkColor,
                        textAlign: "right",
                        children: item.value
                      })]
                    })
                  }, index);
                })]
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
  var _default = exports.default = ViewProfileScreen;
