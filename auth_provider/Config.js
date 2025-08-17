import {Platform} from 'react-native';

export const OS_TYPE = Platform.OS == 'ios' ? 'ios' : 'android';
export const APP_VERSION = Platform.OS == 'ios' ? '1.0.0' : '1.2.2';


// UAT base url
/* export const URL = "https://uat-mandres.straightline.in";
const BASE_URL = "https://uat-mandres.straightline.in/heidelberg_loyalty/v1/heidelberg_req";
export const API_KEY = 'b20504beeea0d0c94e45fbb4fa4fda3c8774ded4';
*/

// LIVE base url
export const URL = 'https://api.straightline.in';
const BASE_URL = 'https://api.straightline.in/heidelberg_loyalty/v1/heidelberg_req';
export const API_KEY = '643f8067c6c096c27b691715939b5cbc83721b9c';


export {BASE_URL};
