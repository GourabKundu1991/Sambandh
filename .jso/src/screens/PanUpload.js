  var _interopRequireDefault = _$$_REQUIRE(_dependencyMap[0]);
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;
  var _slicedToArray2 = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[1]));
  var _asyncStorage = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[2]));
  var _nativeBase = _$$_REQUIRE(_dependencyMap[3]);
  var _react = _interopRequireWildcard(_$$_REQUIRE(_dependencyMap[4]));
  var _reactNative = _$$_REQUIRE(_dependencyMap[5]);
  var _reactNativeLinearGradient = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[6]));
  var _Ionicons = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[7]));
  var _Config = _$$_REQUIRE(_dependencyMap[8]);
  var _reactNativeImagePicker = _$$_REQUIRE(_dependencyMap[9]);
  var _reactI18next = _$$_REQUIRE(_dependencyMap[10]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _MainStyle = _$$_REQUIRE(_dependencyMap[12]);
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[13]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var PanUploadScreen = function PanUploadScreen(_ref) {
    var navigation = _ref.navigation,
      route = _ref.route;
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
    var _React$useState5 = _react.default.useState(true),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      modalVisible = _React$useState6[0],
      setModalVisible = _React$useState6[1];
    var _React$useState7 = _react.default.useState(""),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      panCard = _React$useState8[0],
      setPanCard = _React$useState8[1];
    var _React$useState9 = _react.default.useState(""),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      panImage = _React$useState10[0],
      setPanImage = _React$useState10[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('loginType').then(function (valColor) {
        if (valColor != null) {
          setOrgDetails(JSON.parse(valColor));
        }
      });
    }, []);
    var openProfilePicker = function openProfilePicker(type) {
      onClose();
      if (type == "library") {
        (0, _reactNativeImagePicker.launchImageLibrary)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response);
          if (response.assets != undefined) {
            setPanImage(response.assets[0].base64);
          }
        });
      } else if (type == "camera") {
        (0, _reactNativeImagePicker.launchCamera)({
          mediaType: 'photo',
          includeBase64: true,
          maxHeight: 1500,
          maxWidth: 1500
        }, function (response) {
          //console.log(response.assets);
          if (response.assets != undefined) {
            setPanImage(response.assets[0].base64);
          }
        });
      }
    };
    var onSubmit = function onSubmit() {
      _reactNative.Keyboard.dismiss();
      if (panCard.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Pan Card Number")
        });
      } else if (panCard.trim() != "" && panImage == "") {
        _nativeBase.Toast.show({
          description: t("Please Attach Pan Image")
        });
      } else {
        updatePan();
        setLoading(true);
      }
    };
    var updatePan = function updatePan() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("pan_file", panImage);
          formdata.append("pan_number", panCard);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/update_pan_kyc`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Update Pan:", responseJson);
            if (responseJson.bstatus === 1) {
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                navigation.goBack();
              }, 1000);
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
            console.log("Update Pan Error:", error);
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
    onSkip = function onSkip() {
      setModalVisible(false);
      updatePan();
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("PAN Upload"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                    size: "lg",
                    value: panCard,
                    onChangeText: function onChangeText(text) {
                      return setPanCard(text);
                    },
                    variant: "unstyled",
                    maxLength: 10,
                    InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "card-outline",
                      size: 20,
                      color: "#666666",
                      style: {
                        width: 25,
                        marginLeft: 10,
                        textAlign: 'center'
                      }
                    }),
                    placeholder: t("Pan Card No.") + " *"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  alignItems: "center",
                  mt: "3",
                  mb: "2",
                  space: 0,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                    name: "attach-outline",
                    size: 22,
                    color: "#666666"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                    color: "#666666",
                    fontSize: "md",
                    textTransform: "capitalize",
                    children: [t("Attach Pan Image"), " *"]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                  style: _MainStyle.MainStyle.inputbox,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                    source: panImage != "" ? {
                      uri: 'data:image/jpeg;base64,' + panImage
                    } : _$$_REQUIRE(_dependencyMap[14]),
                    alt: "image",
                    resizeMode: "contain",
                    style: {
                      width: '100%',
                      height: 160
                    }
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                    onPress: onOpen,
                    bg: _MainStyle.dangerColor,
                    position: "absolute",
                    bottom: "3",
                    right: "3",
                    width: "50",
                    height: "50",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "30",
                    overflow: "hidden",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "camera",
                      size: 26,
                      color: "#ffffff"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet, {
                    isOpen: isOpen,
                    onClose: onClose,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Actionsheet.Content, {
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: "#666666",
                        fontSize: "md",
                        textAlign: "center",
                        children: t("Select Image Source")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                        onPress: function onPress() {
                          return openProfilePicker("library");
                        },
                        children: t("Load from Library")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                        onPress: function onPress() {
                          return openProfilePicker("camera");
                        },
                        children: t("Use Camera")
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Actionsheet.Item, {
                        onPress: function onPress() {
                          return openProfilePicker("cancel");
                        },
                        children: t("Cancel")
                      })]
                    })
                  })]
                })]
              })
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return onSubmit();
            },
            width: '100%',
            backgroundColor: orgDetails.color,
            borderRadius: 30,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              color: orgDetails.name == "Zuari" ? _MainStyle.darkColor : _MainStyle.lightColor,
              fontFamily: _MainStyle.fontBold,
              fontSize: "md",
              children: t("Submit")
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
  var _default = exports.default = PanUploadScreen;
