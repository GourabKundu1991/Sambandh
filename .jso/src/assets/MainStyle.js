  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.warningColor = exports.successColor = exports.rareColor = exports.lightGrey = exports.lightColor = exports.greyColor = exports.fontSemiBold = exports.fontRegular = exports.fontBold = exports.darkGrey = exports.darkColor = exports.dangerColor = exports.baseSemiColor = exports.baseDarkColor = exports.baseColor = exports.MainStyle = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var baseColor = exports.baseColor = "#007F3E";
  var rareColor = exports.rareColor = "#A6185A";
  var baseDarkColor = exports.baseDarkColor = "#956EDC";
  var baseSemiColor = exports.baseSemiColor = "#ebedff";
  var dangerColor = exports.dangerColor = "#D50032";
  var successColor = exports.successColor = "#4BA54D";
  var warningColor = exports.warningColor = "#FF5722";
  var lightColor = exports.lightColor = "#ffffff";
  var darkColor = exports.darkColor = "#000000";
  var greyColor = exports.greyColor = "#DFDFDF";
  var lightGrey = exports.lightGrey = "#F4F4F4";
  var darkGrey = exports.darkGrey = "#707274";
  var fontRegular = exports.fontRegular = "Mulish-Regular";
  var fontBold = exports.fontBold = "Mulish-Bold";
  var fontSemiBold = exports.fontSemiBold = "Mulish-SemiBold";
  var MainStyle = exports.MainStyle = _reactNative.StyleSheet.create({
    spincontainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    logo: {
      height: 50,
      resizeMode: 'contain'
    },
    lable: {
      fontFamily: fontSemiBold,
      color: darkColor,
      marginBottom: 5
    },
    inputbox: {
      backgroundColor: lightColor,
      borderColor: greyColor,
      borderWidth: 1,
      borderRadius: 30,
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: 5
    },
    solidbtn: {
      height: 50,
      backgroundColor: baseColor,
      borderRadius: 30,
      overflow: 'hidden'
    },
    outlinebtn: {
      height: 43,
      borderColor: baseColor,
      borderWidth: 1,
      borderRadius: 30,
      overflow: 'hidden'
    },
    pagibox: {
      width: 35,
      height: 35,
      borderRadius: 30
    },
    popbox: {
      width: '80%',
      backgroundColor: "#fcfcfc",
      borderRadius: 15,
      overflow: 'hidden',
      minHeight: 300,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30
    }
    /* quickbox: { width: '29.33%', padding: 2, height: 125, borderColor: greyColor, borderWidth: 1, borderRadius: 12, margin: '2%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    quickicon: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#eeeeee", marginBottom: 5 },
    tabbtn: {borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: 'hidden' , borderRadius: 0, width: '24%'},
    productbox: { width: '50%', padding: 8 },
    productimage: { backgroundColor: lightGrey, marginBottom: 5, borderRadius: 8, width: '100%', height: 160, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    productimagebig: { backgroundColor: lightGrey, marginBottom: 5, borderRadius: 8, width: '100%', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' } */
  });
