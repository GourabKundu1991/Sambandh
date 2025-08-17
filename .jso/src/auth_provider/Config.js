  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.URL = exports.OS_TYPE = exports.BASE_URL = exports.APP_VERSION = exports.API_KEY = undefined;
  var _reactNative = _$$_REQUIRE(_dependencyMap[0]);
  var OS_TYPE = exports.OS_TYPE = _reactNative.Platform.OS == 'ios' ? 'ios' : 'android';
  var APP_VERSION = exports.APP_VERSION = _reactNative.Platform.OS == 'ios' ? '1.0.0' : '1.2.2';

  // UAT base url
  /* export const URL = "https://uat-mandres.straightline.in";
  const BASE_URL = "https://uat-mandres.straightline.in/heidelberg_loyalty/v1/heidelberg_req";
  export const API_KEY = 'b20504beeea0d0c94e45fbb4fa4fda3c8774ded4';
  */

  // LIVE base url
  var URL = exports.URL = 'https://api.straightline.in';
  var BASE_URL = exports.BASE_URL = 'https://api.straightline.in/heidelberg_loyalty/v1/heidelberg_req';
  var API_KEY = exports.API_KEY = '643f8067c6c096c27b691715939b5cbc83721b9c';
