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
  var ViewOrdersScreen = function ViewOrdersScreen(_ref) {
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
      orderList = _React$useState6[0],
      setOrderList = _React$useState6[1];
    var _React$useState7 = _react.default.useState(1),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      pageNumber = _React$useState8[0],
      setPageNumber = _React$useState8[1];
    var _React$useState9 = _react.default.useState(1),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      totalPages = _React$useState10[0],
      setTotalPages = _React$useState10[1];
    var _React$useState11 = _react.default.useState(false),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      feedbackPOP = _React$useState12[0],
      setFeedbackPOP = _React$useState12[1];
    var _React$useState13 = _react.default.useState([]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      categoryList = _React$useState14[0],
      setCategoryList = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      category = _React$useState16[0],
      setCategory = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      categoryType = _React$useState18[0],
      setCategoryType = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      description = _React$useState20[0],
      setDescription = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      rating = _React$useState22[0],
      setRating = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      image1 = _React$useState24[0],
      setImage1 = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      image2 = _React$useState26[0],
      setImage2 = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      selectedProduct = _React$useState28[0],
      setSelectedProduct = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      imageType = _React$useState30[0],
      setImageType = _React$useState30[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
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
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/myorders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("myorders:", JSON.stringify(responseJson));
            if (responseJson.bstatus === 1) {
              setLoading(false);
              setOrderList(responseJson.order_list);
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
    var openComplaint = function openComplaint(item, cate) {
      setFeedbackPOP(true);
      setSelectedProduct(item);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("categoryId", cate);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/get_complain_category`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_complain_category:", responseJson);
            if (responseJson.bstatus === 1) {
              setLoading(false);
              setCategoryList(responseJson.categories);
              setCategoryType(responseJson.type);
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
    var closeComplaint = function closeComplaint() {
      setFeedbackPOP(false);
      setSelectedProduct("");
      setCategory("");
      setDescription("");
      setRating("");
      setImage1("");
      setImage2("");
    };
    var onSubmitComplaint = function onSubmitComplaint() {
      if (category == '') {
        _nativeBase.Toast.show({
          description: t("Please select Category")
        });
      } else if (description.trim() == '') {
        _nativeBase.Toast.show({
          description: t("Please enter Description")
        });
      } else if (category.type == 1 && rating == '') {
        _nativeBase.Toast.show({
          description: t("Please give some Retings")
        });
      } else {
        setLoading(true);
        _asyncStorage.default.getItem('userToken').then(function (val) {
          if (val != null) {
            var formdata = new FormData();
            formdata.append("token", JSON.parse(val).token);
            formdata.append("APIkey", `${_Config.API_KEY}`);
            formdata.append("orgId", JSON.parse(val).orgId);
            formdata.append("comp_category_id", category);
            formdata.append("dcm_orders_id", selectedProduct.orderId);
            formdata.append("dcm_order_items_id", selectedProduct.orderItemId);
            formdata.append("dcm_product_id", selectedProduct.prod_id);
            formdata.append("complain_description", description);
            formdata.append("image1", image1);
            formdata.append("image2", image2);
            formdata.append("rating", rating);
            formdata.append("type", categoryType);
            console.log(formdata);
            fetch(`${_Config.BASE_URL}/submit_complain`, {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              body: formdata
            }).then(function (response) {
              return response.json();
            }).then(function (responseJson) {
              console.log("submit_complain:", responseJson);
              if (responseJson.bstatus === 1) {
                getAllData();
                _nativeBase.Toast.show({
                  description: responseJson.message
                });
                closeComplaint();
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
              console.log("submit_complain Error:", error);
              _nativeBase.Toast.show({
                description: t("Sorry! Something went wrong. Maybe network request failed.")
              });
            });
          }
        });
      }
    };
    var onPickerOpen = function onPickerOpen(val) {
      onOpen();
      setImageType(val);
    };
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
            if (imageType == "Image1") {
              setImage1(response.assets[0].base64);
            } else if (imageType == "Image2") {
              setImage2(response.assets[0].base64);
            }
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
            if (imageType == "Image1") {
              setImage1(response.assets[0].base64);
            } else if (imageType == "Image2") {
              setImage2(response.assets[0].base64);
            }
          }
        });
      }
    };
    var onSelectCate = function onSelectCate(cate) {
      setLoading(true);
      openComplaint(selectedProduct, cate);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("My Order"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 5,
            children: [orderList.length == 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
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
            }), orderList.map(function (item, index) {
              var _item$product_image, _item$product_image$;
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
                colors: ["#f0f2e5", "#ffffff"],
                flex: 1,
                style: {
                  borderRadius: 30,
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                  space: 4,
                  padding: 5,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
                    space: 2,
                    width: '30%',
                    alignItems: 'center',
                    marginTop: 5,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                      style: {
                        width: '100%',
                        borderColor: _MainStyle.greyColor,
                        borderWidth: 1,
                        height: 100,
                        borderRadius: 6,
                        bottom: 20,
                        overflow: 'hidden'
                      },
                      children: (item == null ? undefined : item.BaseUrl) && (item == null ? undefined : (_item$product_image = item.product_image) == null ? undefined : (_item$product_image$ = _item$product_image[2]) == null ? undefined : _item$product_image$.product_image) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                        source: {
                          uri: item.BaseUrl + item.product_image[0].product_image
                        },
                        style: {
                          width: '100%',
                          height: 100,
                          resizeMode: 'cover'
                        }
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                    space: 1,
                    width: '60%',
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                      fontFamily: _MainStyle.fontBold,
                      fontSize: "14",
                      color: _MainStyle.darkColor,
                      children: item.productName
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignContent: 'center',
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Box, {
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                          fontSize: "14",
                          fontFamily: _MainStyle.fontBold,
                          color: _MainStyle.darkColor,
                          textAlign: 'center',
                          children: [t("Order ID"), ": ", item.orderId]
                        })
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignContent: 'center',
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "14",
                        color: _MainStyle.darkColor,
                        children: [t("Order Item Id"), ": ", item.orderItemId]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      style: {
                        justifyContent: "space-between",
                        alignContent: 'center',
                        marginTop: 5
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontWeight: "bold",
                        fontSize: "14",
                        color: _MainStyle.darkColor,
                        children: ["Grand Total: ", item.totalPoints, " ", t("Points")]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignContent: 'center',
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "14",
                        color: _MainStyle.darkColor,
                        children: [t("Date"), ": ", (0, _moment.default)(item.orderInDate).format('DD MMMM, YYYY')]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.HStack, {
                      alignContent: 'center',
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                        fontFamily: _MainStyle.fontBold,
                        fontSize: "14",
                        color: _MainStyle.darkColor,
                        children: [t("Status"), ": ", item.status]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignContent: 'center',
                      space: 3,
                      marginTop: 5,
                      right: 5,
                      width: '100%',
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                        variant: "outline",
                        size: 'xs',
                        width: 120,
                        right: 20,
                        borderRadius: 30,
                        borderWidth: 10,
                        backgroundColor: _MainStyle.darkColor,
                        onPress: function onPress() {
                          return navigation.navigate('OrderDetails', {
                            productname: item.productName,
                            OrderID: item.orderId,
                            OrderItemID: item.orderItemId,
                            OrderDate: item.orderInDate,
                            pricePoint: item.pricePoint,
                            totalPoints: item.totalPoints,
                            quantity: item.quantity,
                            status: item.status,
                            productimage: item.BaseUrl + item.product_image[0].product_image
                          });
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: "#bbbbbb",
                          fontFamily: _MainStyle.fontBold,
                          fontSize: '16',
                          children: t("Details")
                        })
                      }), item.canRaiseIssue == 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                        variant: "outline",
                        size: 'xs',
                        width: 150,
                        right: 20,
                        borderRadius: 30,
                        borderWidth: 10,
                        backgroundColor: _MainStyle.darkColor,
                        onPress: function onPress() {
                          return openComplaint(item, category);
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                          color: "#bbbbbb",
                          fontFamily: _MainStyle.fontBold,
                          fontSize: '16',
                          children: t("Complaint")
                        })
                      })]
                    })]
                  })]
                }, index)
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
      }), feedbackPOP && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: _MainStyle.MainStyle.spincontainer,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
          start: {
            x: 0,
            y: 0
          },
          colors: ["#f0f2e5", "#f0f2e5", "#ffffff"],
          style: {
            position: 'relative',
            width: '80%',
            borderRadius: 20,
            overflow: 'hidden'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            space: 6,
            padding: 8,
            style: {
              justifyContent: 'center',
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
              style: {
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10
              },
              children: t("Raise Complaint")
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
              width: '100%',
              space: 5,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                  variant: "unstyled",
                  size: "md",
                  placeholder: t("Select Category") + " *",
                  selectedValue: category,
                  onValueChange: function onValueChange(value) {
                    setCategory(value), onSelectCate(value);
                  },
                  _selectedItem: {
                    backgroundColor: '#eeeeee',
                    endIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "checkmark-circle",
                      size: 22,
                      color: "#2BBB86",
                      style: {
                        right: 0,
                        position: 'absolute'
                      }
                    })
                  },
                  children: categoryList.map(function (item, index) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                      label: item.category_name,
                      value: item.id
                    }, index);
                  })
                })
              }), categoryType == 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "md",
                  onChangeText: function onChangeText(text) {
                    return setRating(text);
                  },
                  keyboardType: "number-pad",
                  variant: "unstyled",
                  placeholder: t("Rating") + " *"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                style: _MainStyle.MainStyle.inputbox,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                  size: "md",
                  onChangeText: function onChangeText(text) {
                    return setDescription(text);
                  },
                  multiline: true,
                  height: 100,
                  textAlignVertical: "top",
                  variant: "unstyled",
                  placeholder: t("Description") + " *"
                })
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
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.inputbox, {
                      position: 'relative'
                    }],
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: image1 != "" ? {
                        uri: 'data:image/jpeg;base64,' + image1
                      } : _$$_REQUIRE(_dependencyMap[18]),
                      alt: "image",
                      resizeMode: "contain",
                      style: {
                        width: '100%',
                        height: 120
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return onPickerOpen("Image1");
                      },
                      style: {
                        backgroundColor: 'red',
                        borderRadius: 30,
                        overflow: 'hidden',
                        padding: 10,
                        position: 'absolute',
                        bottom: 5,
                        right: 5
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "camera",
                        size: 26,
                        color: "#ffffff"
                      })
                    })]
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
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.inputbox, {
                      position: 'relative'
                    }],
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: image2 != "" ? {
                        uri: 'data:image/jpeg;base64,' + image2
                      } : _$$_REQUIRE(_dependencyMap[18]),
                      alt: "image",
                      resizeMode: "contain",
                      style: {
                        width: '100%',
                        height: 120
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
                      onPress: function onPress() {
                        return onPickerOpen("Image2");
                      },
                      style: {
                        backgroundColor: 'red',
                        borderRadius: 30,
                        overflow: 'hidden',
                        padding: 10,
                        position: 'absolute',
                        bottom: 5,
                        right: 5
                      },
                      justifyContent: "center",
                      alignItems: "center",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "camera",
                        size: 26,
                        color: "#ffffff"
                      })
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
                style: [_MainStyle.MainStyle.solidbtn, {
                  backgroundColor: 'black',
                  width: '100%'
                }],
                onPress: function onPress() {
                  return onSubmitComplaint();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                  color: _MainStyle.lightColor,
                  fontFamily: _MainStyle.fontSemiBold,
                  fontSize: "md",
                  children: t('Submit')
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TouchableOpacity, {
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
            return closeComplaint();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
            color: _MainStyle.lightColor,
            fontSize: "sm",
            children: t('Cancel')
          })
        })]
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
  var _default = exports.default = ViewOrdersScreen;
