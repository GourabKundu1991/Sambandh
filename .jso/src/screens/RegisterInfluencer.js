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
  var _reactNativeModalDatetimePicker = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[10]));
  var _moment = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[11]));
  var _reactI18next = _$$_REQUIRE(_dependencyMap[12]);
  var _MainStyle = _$$_REQUIRE(_dependencyMap[13]);
  var _Header = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[14]));
  var _reactNativeMultipleSelect = _interopRequireDefault(_$$_REQUIRE(_dependencyMap[15]));
  var _jsxRuntime = _$$_REQUIRE(_dependencyMap[16]);
  function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
  function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  var RegisterInfluencerScreen = function RegisterInfluencerScreen(_ref) {
    var navigation = _ref.navigation;
    var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;
    var _React$useState = _react.default.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];
    var _useDisclose = (0, _nativeBase.useDisclose)(),
      isOpen = _useDisclose.isOpen,
      onOpen = _useDisclose.onOpen,
      onClose = _useDisclose.onClose;
    var _React$useState3 = _react.default.useState(''),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      orgDetails = _React$useState4[0],
      setOrgDetails = _React$useState4[1];
    var _React$useState5 = _react.default.useState(""),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      contactGeo = _React$useState6[0],
      setContactGeo = _React$useState6[1];
    var _React$useState7 = _react.default.useState([]),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      districtList = _React$useState8[0],
      setDistrictList = _React$useState8[1];
    var _React$useState9 = _react.default.useState([]),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      subDistrictList = _React$useState10[0],
      setsubDistrictList = _React$useState10[1];
    var _React$useState11 = _react.default.useState([]),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      categoryList = _React$useState12[0],
      setCategoryList = _React$useState12[1];
    var _React$useState13 = _react.default.useState(""),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      firstName = _React$useState14[0],
      setFirstName = _React$useState14[1];
    var _React$useState15 = _react.default.useState(""),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      middleName = _React$useState16[0],
      setMiddleName = _React$useState16[1];
    var _React$useState17 = _react.default.useState(""),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      lastName = _React$useState18[0],
      setLastName = _React$useState18[1];
    var _React$useState19 = _react.default.useState(""),
      _React$useState20 = (0, _slicedToArray2.default)(_React$useState19, 2),
      mobile = _React$useState20[0],
      setMobile = _React$useState20[1];
    var _React$useState21 = _react.default.useState(""),
      _React$useState22 = (0, _slicedToArray2.default)(_React$useState21, 2),
      gender = _React$useState22[0],
      setGender = _React$useState22[1];
    var _React$useState23 = _react.default.useState(""),
      _React$useState24 = (0, _slicedToArray2.default)(_React$useState23, 2),
      dob = _React$useState24[0],
      setDOB = _React$useState24[1];
    var _React$useState25 = _react.default.useState(""),
      _React$useState26 = (0, _slicedToArray2.default)(_React$useState25, 2),
      maritalStatus = _React$useState26[0],
      setMaritalStatus = _React$useState26[1];
    var _React$useState27 = _react.default.useState(""),
      _React$useState28 = (0, _slicedToArray2.default)(_React$useState27, 2),
      anniversary = _React$useState28[0],
      setAnniversary = _React$useState28[1];
    var _React$useState29 = _react.default.useState(""),
      _React$useState30 = (0, _slicedToArray2.default)(_React$useState29, 2),
      profileImage = _React$useState30[0],
      setProfileImage = _React$useState30[1];
    var _React$useState31 = _react.default.useState(""),
      _React$useState32 = (0, _slicedToArray2.default)(_React$useState31, 2),
      address1 = _React$useState32[0],
      setAddress1 = _React$useState32[1];
    var _React$useState33 = _react.default.useState(""),
      _React$useState34 = (0, _slicedToArray2.default)(_React$useState33, 2),
      address2 = _React$useState34[0],
      setAddress2 = _React$useState34[1];
    var _React$useState35 = _react.default.useState(""),
      _React$useState36 = (0, _slicedToArray2.default)(_React$useState35, 2),
      landMark = _React$useState36[0],
      setLandMark = _React$useState36[1];
    var _React$useState37 = _react.default.useState(""),
      _React$useState38 = (0, _slicedToArray2.default)(_React$useState37, 2),
      ao = _React$useState38[0],
      setAo = _React$useState38[1];
    var _React$useState39 = _react.default.useState(""),
      _React$useState40 = (0, _slicedToArray2.default)(_React$useState39, 2),
      region = _React$useState40[0],
      setRegion = _React$useState40[1];
    var _React$useState41 = _react.default.useState(""),
      _React$useState42 = (0, _slicedToArray2.default)(_React$useState41, 2),
      rmo = _React$useState42[0],
      setRmo = _React$useState42[1];
    var _React$useState43 = _react.default.useState(""),
      _React$useState44 = (0, _slicedToArray2.default)(_React$useState43, 2),
      district = _React$useState44[0],
      setDistrict = _React$useState44[1];
    var _React$useState45 = _react.default.useState(""),
      _React$useState46 = (0, _slicedToArray2.default)(_React$useState45, 2),
      subdistrict = _React$useState46[0],
      setSubDistrict = _React$useState46[1];
    var _React$useState47 = _react.default.useState(""),
      _React$useState48 = (0, _slicedToArray2.default)(_React$useState47, 2),
      city = _React$useState48[0],
      setCity = _React$useState48[1];
    var _React$useState49 = _react.default.useState(""),
      _React$useState50 = (0, _slicedToArray2.default)(_React$useState49, 2),
      pinCode = _React$useState50[0],
      setPinCode = _React$useState50[1];
    var _React$useState51 = _react.default.useState(""),
      _React$useState52 = (0, _slicedToArray2.default)(_React$useState51, 2),
      category = _React$useState52[0],
      setCategory = _React$useState52[1];
    var _React$useState53 = _react.default.useState(""),
      _React$useState54 = (0, _slicedToArray2.default)(_React$useState53, 2),
      monthlyLifting = _React$useState54[0],
      setMonthlyLifting = _React$useState54[1];
    var _React$useState55 = _react.default.useState(""),
      _React$useState56 = (0, _slicedToArray2.default)(_React$useState55, 2),
      aadhaarCard = _React$useState56[0],
      setAadhaarCard = _React$useState56[1];
    var _React$useState57 = _react.default.useState(""),
      _React$useState58 = (0, _slicedToArray2.default)(_React$useState57, 2),
      aadhaarFrontImage = _React$useState58[0],
      setAadhaarFrontImage = _React$useState58[1];
    var _React$useState59 = _react.default.useState(""),
      _React$useState60 = (0, _slicedToArray2.default)(_React$useState59, 2),
      aadhaarBackImage = _React$useState60[0],
      setAadhaarBackImage = _React$useState60[1];
    var _React$useState61 = _react.default.useState(""),
      _React$useState62 = (0, _slicedToArray2.default)(_React$useState61, 2),
      panCard = _React$useState62[0],
      setPanCard = _React$useState62[1];
    var _React$useState63 = _react.default.useState(""),
      _React$useState64 = (0, _slicedToArray2.default)(_React$useState63, 2),
      panImage = _React$useState64[0],
      setPanImage = _React$useState64[1];
    var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDatePickerVisible = _useState2[0],
      setDatePickerVisibility = _useState2[1];
    var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAnniversaryDatePickerVisible = _useState4[0],
      setAnniversaryDatePickerVisibility = _useState4[1];
    var _React$useState65 = _react.default.useState(""),
      _React$useState66 = (0, _slicedToArray2.default)(_React$useState65, 2),
      dateType = _React$useState66[0],
      setDateType = _React$useState66[1];
    var showDatePicker = function showDatePicker(val) {
      setDateType(val);
      if (val == "dob") {
        setDatePickerVisibility(true);
      } else {
        setAnniversaryDatePickerVisibility(true);
      }
    };
    var hideDatePicker = function hideDatePicker() {
      setDatePickerVisibility(false);
    };
    var handleConfirm = function handleConfirm(date) {
      hideDatePicker();
      if (dateType == "dob") {
        setDOB(date);
      } else {
        setAnniversary(date);
      }
    };
    var _React$useState67 = _react.default.useState(false),
      _React$useState68 = (0, _slicedToArray2.default)(_React$useState67, 2),
      isStateOpen = _React$useState68[0],
      setIsStateOpen = _React$useState68[1];
    var _React$useState69 = _react.default.useState(""),
      _React$useState70 = (0, _slicedToArray2.default)(_React$useState69, 2),
      statePicker = _React$useState70[0],
      setStatePicker = _React$useState70[1];
    var _React$useState71 = _react.default.useState(""),
      _React$useState72 = (0, _slicedToArray2.default)(_React$useState71, 2),
      searchDealer = _React$useState72[0],
      setSearchDealer = _React$useState72[1];
    var _React$useState73 = _react.default.useState(""),
      _React$useState74 = (0, _slicedToArray2.default)(_React$useState73, 2),
      searchAltDealer = _React$useState74[0],
      setSearchAltDealer = _React$useState74[1];
    var _React$useState75 = _react.default.useState(false),
      _React$useState76 = (0, _slicedToArray2.default)(_React$useState75, 2),
      isDealerOpen = _React$useState76[0],
      setIsDealerOpen = _React$useState76[1];
    var _React$useState77 = _react.default.useState(""),
      _React$useState78 = (0, _slicedToArray2.default)(_React$useState77, 2),
      dealerTypr = _React$useState78[0],
      setDealerType = _React$useState78[1];
    var _React$useState79 = _react.default.useState(""),
      _React$useState80 = (0, _slicedToArray2.default)(_React$useState79, 2),
      dealer = _React$useState80[0],
      setDealer = _React$useState80[1];
    var _React$useState81 = _react.default.useState([]),
      _React$useState82 = (0, _slicedToArray2.default)(_React$useState81, 2),
      dealerList = _React$useState82[0],
      setDealerList = _React$useState82[1];
    var _React$useState83 = _react.default.useState([]),
      _React$useState84 = (0, _slicedToArray2.default)(_React$useState83, 2),
      counter = _React$useState84[0],
      setCounter = _React$useState84[1];
    var _React$useState85 = _react.default.useState([]),
      _React$useState86 = (0, _slicedToArray2.default)(_React$useState85, 2),
      counterList = _React$useState86[0],
      setCounterList = _React$useState86[1];
    var _React$useState87 = _react.default.useState(false),
      _React$useState88 = (0, _slicedToArray2.default)(_React$useState87, 2),
      isPicker = _React$useState88[0],
      setIsPicker = _React$useState88[1];
    var _React$useState89 = _react.default.useState(""),
      _React$useState90 = (0, _slicedToArray2.default)(_React$useState89, 2),
      imageType = _React$useState90[0],
      setImageType = _React$useState90[1];
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
            if (imageType == "AadhaarFrontImage") {
              setAadhaarFrontImage(response.assets[0].base64);
            } else if (imageType == "AadhaarBackImage") {
              setAadhaarBackImage(response.assets[0].base64);
            } else if (imageType == "PanImage") {
              setPanImage(response.assets[0].base64);
            } else if (imageType == "ProfileImage") {
              setProfileImage(response.assets[0].base64);
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
            if (imageType == "AadhaarFrontImage") {
              setAadhaarFrontImage(response.assets[0].base64);
            } else if (imageType == "AadhaarBackImage") {
              setAadhaarBackImage(response.assets[0].base64);
            } else if (imageType == "PanImage") {
              setPanImage(response.assets[0].base64);
            } else if (imageType == "ProfileImage") {
              setProfileImage(response.assets[0].base64);
            }
          }
        });
      }
    };
    var _React$useState91 = _react.default.useState(""),
      _React$useState92 = (0, _slicedToArray2.default)(_React$useState91, 2),
      registrationType = _React$useState92[0],
      setRegistrationType = _React$useState92[1];
    (0, _react.useEffect)(function () {
      _asyncStorage.default.getItem('loginType').then(function (valColor) {
        if (valColor != null) {
          setOrgDetails(JSON.parse(valColor));
        }
      });
      setLoading(true);
      getAllData(district, dealer);
    }, []);
    var getAllData = function getAllData(distId, delId) {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        console.log(val);
        if (val != null) {
          var formdata = new FormData();
          formdata.append("token", JSON.parse(val).token);
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("district", distId);
          formdata.append("dealer_id", delId);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/pre_registration`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("pre_registration:", responseJson);
            if (responseJson.bstatus == 1) {
              setLoading(false);
              setContactGeo(responseJson.contact_geo);
              setCategoryList(responseJson.contractors_category);
              setDistrictList(responseJson.district);
              setDealerList(responseJson.dealer_list);
              setCounterList(responseJson.secondary_dealer_list);
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
    var onSelectDistrict = function onSelectDistrict(valDist) {
      setDistrict(valDist);
      getAllData(valDist, dealer);
      setSubDistrict("");
      setLoading(true);
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("orgId", JSON.parse(val).org_id);
          formdata.append("districtId", valDist);
          fetch(`${_Config.BASE_URL}/get_sub_district`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("get_sub_district:", responseJson);
            if (responseJson.status == 'success') {
              setLoading(false);
              setsubDistrictList(responseJson.sub_district);
            } else {
              setsubDistrictList([]);
              _nativeBase.Toast.show({
                description: responseJson.message
              });
              setTimeout(function () {
                setLoading(false);
                if (responseJson.msg_code == "msg_1000") {
                  _asyncStorage.default.clear();
                  navigation.navigate('Login');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            //console.log("state_district_wise_pincode_list Error:", error);
            _nativeBase.Toast.show({
              description: t("Sorry! Somthing went Wrong. Maybe Network request Failed")
            });
          });
        }
      });
    };
    var onSelectDealer = function onSelectDealer(value) {
      setCounter("");
      setDealer(value);
      getAllData(district, value);
    };
    var onCheckSubmit = function onCheckSubmit() {
      _reactNative.Keyboard.dismiss();
      if (firstName.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter First Name")
        });
      } else if (lastName.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Last Name")
        });
      } else if (mobile.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Monile Number")
        });
      } else if (gender == "") {
        _nativeBase.Toast.show({
          description: t("Please select Gender")
        });
      } else if (dob == "") {
        _nativeBase.Toast.show({
          description: t("Please select Date of Birth")
        });
      } else if (maritalStatus == "") {
        _nativeBase.Toast.show({
          description: t("Please select Marital Status")
        });
      } else if (maritalStatus == "Married" && anniversary == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Date of Anniversary")
        });
      } else if (profileImage == "") {
        _nativeBase.Toast.show({
          description: t("Please attach Profile Image")
        });
      } else if (address1.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Address Line 1")
        });
      } else if (address2.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Address Line 2")
        });
      } else if (district == "") {
        _nativeBase.Toast.show({
          description: t("Please select District")
        });
      } else if (subdistrict == "") {
        _nativeBase.Toast.show({
          description: t("Please select Sub District")
        });
      } else if (city.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter City")
        });
      } else if (pinCode.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Pincode")
        });
      } else if (category == "") {
        _nativeBase.Toast.show({
          description: t("Please select Category")
        });
      } else if (monthlyLifting.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Monthly Consumption")
        });
      } else if (aadhaarCard.trim() == "") {
        _nativeBase.Toast.show({
          description: t("Please enter Aadhaar Card Number")
        });
      } else if (aadhaarFrontImage == "") {
        _nativeBase.Toast.show({
          description: t("Please attach Aadhaar Front Image")
        });
      } else if (aadhaarBackImage == "") {
        _nativeBase.Toast.show({
          description: t("Please attach Aadhaar Back Image")
        });
      } else if (panCard.trim() != "" && panImage == "") {
        _nativeBase.Toast.show({
          description: t("Please Attach Pan Image")
        });
      } else {
        onSubmit();
        setLoading(true);
      }
    };
    var onSubmit = function onSubmit() {
      _asyncStorage.default.getItem('userToken').then(function (val) {
        if (val != null) {
          var formdata = new FormData();
          formdata.append("APIkey", `${_Config.API_KEY}`);
          formdata.append("orgId", JSON.parse(val).orgId);
          formdata.append("token", JSON.parse(val).token);
          formdata.append("first_name", firstName);
          formdata.append("middle_name", middleName);
          formdata.append("last_name", lastName);
          formdata.append("gender", gender);
          formdata.append("mobile", mobile);
          formdata.append("dob", (0, _moment.default)(dob).format("YYYY-MM-DD"));
          formdata.append("marital_status", maritalStatus);
          formdata.append("wedding_anniversary", anniversary != "" ? (0, _moment.default)(anniversary).format("YYYY-MM-DD") : "");
          formdata.append("profileImage", profileImage);
          formdata.append("address_line1", address1);
          formdata.append("address_line2", address2);
          formdata.append("addLine3", landMark);
          formdata.append("district_id", district);
          formdata.append("sub_district_id", subdistrict);
          formdata.append("city", city);
          formdata.append("post_code", pinCode);
          formdata.append("category", category);
          formdata.append("primary_dealer_id", dealer);
          formdata.append("dealer_id", counter);
          formdata.append("avgMonthlyLifting", monthlyLifting);
          formdata.append("aadhar_card_number", aadhaarCard);
          formdata.append("aadhaarImage", aadhaarFrontImage);
          formdata.append("aadharImgBack", aadhaarBackImage);
          formdata.append("pan_card_number", panCard);
          formdata.append("panImage", panImage);
          console.log(formdata);
          fetch(`${_Config.BASE_URL}/registration`, {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formdata
          }).then(function (response) {
            return response.json();
          }).then(function (responseJson) {
            console.log("Registration:", responseJson);
            if (responseJson.bstatus == 1) {
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
                  navigation.navigate('Login');
                }
              }, 1000);
            }
          }).catch(function (error) {
            setLoading(false);
            console.log("Registration Error:", error);
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
      /*  } */
    };
    var dobdate = new Date();
    var year = dobdate.getFullYear();
    var month = dobdate.getMonth();
    var day = dobdate.getDate();
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.NativeBaseProvider, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: _MainStyle.lightColor
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
        flex: 1,
        backgroundColor: _MainStyle.lightColor,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Header.default, {
          component: t("Register Influencer"),
          themeColor: orgDetails.color,
          navigation: navigation
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
          automaticallyAdjustKeyboardInsets: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
            padding: 5,
            space: 6,
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  borderColor: "#bbbbbb",
                  borderBottomWidth: 1,
                  mb: "4",
                  pb: "3",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "16",
                    fontWeight: "bold",
                    textAlign: "center",
                    children: t("Personal Details")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setFirstName(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "person-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("First Name") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setMiddleName(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "person-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Middle Name")
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setLastName(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "person-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Last Name") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setMobile(text);
                      },
                      keyboardType: "number-pad",
                      maxLength: 10,
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "phone-portrait-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Contact Number") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                      size: "md",
                      placeholder: t("Select Gender") + " *",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "male-female-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: gender,
                      onValueChange: function onValueChange(value) {
                        return setGender(value);
                      },
                      variant: "unstyled",
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
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: "Male",
                        value: "m"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: "Female",
                        value: "f"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                    style: _MainStyle.MainStyle.inputbox,
                    onPress: function onPress() {
                      return showDatePicker("dob");
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      paddingY: _reactNative.Platform.OS == "ios" ? "1.5" : "2.5",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "calendar-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          marginRight: 10,
                          textAlign: 'center'
                        }
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: dob != "" ? "#111111" : "#999999",
                        fontSize: "sm",
                        children: dob != "" ? (0, _moment.default)(dob).format("DD MMMM, YYYY") : t("Date of Birth") + " *"
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      placeholder: t("Marital Status *"),
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "male-female-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: maritalStatus,
                      onValueChange: function onValueChange(value) {
                        return setMaritalStatus(value);
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
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: "Married",
                        value: "Married"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                        label: "Single",
                        value: "Single"
                      })]
                    })
                  }), maritalStatus == "Married" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                    style: _MainStyle.MainStyle.inputbox,
                    onPress: function onPress() {
                      return showDatePicker("anniversary");
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      paddingY: _reactNative.Platform.OS == "ios" ? "1.5" : "2.5",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "calendar-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          marginRight: 10,
                          textAlign: 'center'
                        }
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                        color: anniversary != "" ? "#111111" : "#999999",
                        fontSize: "sm",
                        children: anniversary != "" ? (0, _moment.default)(anniversary).format("DD MMMM, YYYY") : t("Date of Anniversary")
                      })]
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    mt: "2",
                    space: 0,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "attach-outline",
                      size: 22,
                      color: "#666666"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: "#666666",
                      fontSize: "md",
                      textTransform: "capitalize",
                      children: [t("Profile Image"), " *"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: profileImage != "" ? {
                        uri: 'data:image/jpeg;base64,' + profileImage
                      } : _$$_REQUIRE(_dependencyMap[17]),
                      alt: "image",
                      resizeMode: "contain",
                      style: {
                        width: '100%',
                        height: 160
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                      onPress: function onPress() {
                        return onPickerOpen("ProfileImage");
                      },
                      bg: _MainStyle.warningColor,
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
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  borderColor: "#bbbbbb",
                  borderBottomWidth: 1,
                  mb: "4",
                  pb: "3",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "16",
                    fontWeight: "bold",
                    textAlign: "center",
                    children: t("Business Details")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setAddress1(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Address Line 1") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setAddress2(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Address Line 2") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      value: contactGeo.region,
                      readOnly: true,
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Reghion")
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      value: contactGeo.rmo,
                      readOnly: true,
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("RMO")
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      value: contactGeo.ao,
                      readOnly: true,
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("AO")
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      placeholder: t("Select District") + " *",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: district,
                      onValueChange: function onValueChange(value) {
                        return onSelectDistrict(value);
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
                      children: districtList.map(function (item, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                          label: item.name,
                          value: item.id
                        }, index);
                      })
                    })
                  }), district != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      placeholder: t("Select District") + " *",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: subdistrict,
                      onValueChange: function onValueChange(value) {
                        return setSubDistrict(value);
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
                      children: subDistrictList.map(function (item, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                          label: item.name,
                          value: item.id
                        }, index);
                      })
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setCity(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("City") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      keyboardType: "number-pad",
                      maxLength: 6,
                      onChangeText: function onChangeText(text) {
                        return setPinCode(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Pincode") + " *"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  borderColor: "#bbbbbb",
                  borderBottomWidth: 1,
                  mb: "4",
                  pb: "3",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "16",
                    fontWeight: "bold",
                    textAlign: "center",
                    children: t("Dealer Details")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      placeholder: t("Select Category") + " *",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "options-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: category,
                      onValueChange: function onValueChange(value) {
                        return setCategory(value);
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
                          label: item.name,
                          value: item.id
                        }, index);
                      })
                    })
                  }), dealerList != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select, {
                      variant: "unstyled",
                      size: "md",
                      placeholder: t("Select District") + " *",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "location-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      selectedValue: dealer,
                      onValueChange: function onValueChange(value) {
                        return onSelectDealer(value);
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
                      children: dealerList.map(function (item, index) {
                        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Select.Item, {
                          label: item.name_with_external,
                          value: item.contact_id
                        }, index);
                      })
                    })
                  }), counterList != "" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeMultipleSelect.default, {
                      hideTags: true,
                      items: counterList,
                      uniqueKey: "contact_id",
                      onSelectedItemsChange: function onSelectedItemsChange(text) {
                        return setCounter(text);
                      },
                      selectedItems: counter,
                      selectText: "Select Counter",
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
                      displayKey: "company_name",
                      searchInputStyle: {
                        color: '#CCC'
                      },
                      submitButtonColor: orgDetails.color,
                      submitButtonText: "Done",
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
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      keyboardType: "number-pad",
                      onChangeText: function onChangeText(text) {
                        return setMonthlyLifting(text);
                      },
                      variant: "unstyled",
                      InputLeftElement: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                        name: "cash-outline",
                        size: 20,
                        color: "#666666",
                        style: {
                          width: 25,
                          marginLeft: 10,
                          textAlign: 'center'
                        }
                      }),
                      placeholder: t("Monthly Comsumption (in Bags)") + " *"
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeLinearGradient.default, {
              colors: ["#f0f2e5", "#ffffff"],
              flex: 1,
              style: {
                borderRadius: 30,
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.VStack, {
                padding: 5,
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Stack, {
                  borderColor: "#bbbbbb",
                  borderBottomWidth: 1,
                  mb: "4",
                  pb: "3",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Text, {
                    color: _MainStyle.darkColor,
                    fontSize: "16",
                    fontWeight: "bold",
                    textAlign: "center",
                    children: t("KYC Details")
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Stack, {
                  space: 3,
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
                      onChangeText: function onChangeText(text) {
                        return setAadhaarCard(text);
                      },
                      keyboardType: "number-pad",
                      maxLength: 12,
                      variant: "unstyled",
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
                      placeholder: t("Aadhaar Card No.") + " *"
                    })
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    mt: "3",
                    space: 0,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "attach-outline",
                      size: 22,
                      color: "#666666"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: "#666666",
                      fontSize: "md",
                      textTransform: "capitalize",
                      children: [t("Attach Aadhaar Front Image"), " *"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: aadhaarFrontImage != "" ? {
                        uri: 'data:image/jpeg;base64,' + aadhaarFrontImage
                      } : _$$_REQUIRE(_dependencyMap[17]),
                      alt: "image",
                      resizeMode: "contain",
                      style: {
                        width: '100%',
                        height: 160
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                      onPress: function onPress() {
                        return onPickerOpen("AadhaarFrontImage");
                      },
                      bg: _MainStyle.warningColor,
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
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                    alignItems: "center",
                    mt: "3",
                    space: 0,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Ionicons.default, {
                      name: "attach-outline",
                      size: 22,
                      color: "#666666"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.Text, {
                      color: "#666666",
                      fontSize: "md",
                      textTransform: "capitalize",
                      children: [t("Attach Aadhaar Back Image"), " *"]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    style: _MainStyle.MainStyle.inputbox,
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.Image, {
                      source: aadhaarBackImage != "" ? {
                        uri: 'data:image/jpeg;base64,' + aadhaarBackImage
                      } : _$$_REQUIRE(_dependencyMap[17]),
                      alt: "image",
                      resizeMode: "contain",
                      style: {
                        width: '100%',
                        height: 160
                      }
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                      onPress: function onPress() {
                        return onPickerOpen("AadhaarBackImage");
                      },
                      bg: _MainStyle.warningColor,
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
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
                    style: [_MainStyle.MainStyle.inputbox, {
                      marginTop: 15
                    }],
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Input, {
                      size: "md",
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
                      placeholder: t("Pan Card No.")
                    })
                  }), panCard != "" && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_nativeBase.HStack, {
                      alignItems: "center",
                      mt: "3",
                      mb: "3",
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
                        } : _$$_REQUIRE(_dependencyMap[17]),
                        alt: "image",
                        resizeMode: "contain",
                        style: {
                          width: '100%',
                          height: 160
                        }
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Pressable, {
                        onPress: function onPress() {
                          return onPickerOpen("PanImage");
                        },
                        bg: _MainStyle.warningColor,
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
                      })]
                    })]
                  })]
                })]
              })
            })]
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.VStack, {
          backgroundColor: "#f0f2e5",
          borderTopRadius: 30,
          padding: 5,
          width: "100%",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_nativeBase.Button, {
            onPress: function onPress() {
              return onCheckSubmit();
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
        isVisible: isDatePickerVisible,
        mode: "date",
        onConfirm: handleConfirm,
        onCancel: hideDatePicker,
        minimumDate: new Date((0, _moment.default)().subtract(100, "years")),
        maximumDate: new Date((0, _moment.default)().subtract(18, "years"))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModalDatetimePicker.default, {
        isVisible: isAnniversaryDatePickerVisible,
        mode: "date",
        onConfirm: handleConfirm,
        onCancel: hideDatePicker
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
  var _default = exports.default = RegisterInfluencerScreen;
