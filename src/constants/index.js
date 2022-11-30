import {Platform, Dimensions, StatusBar} from 'react-native';
import store from '../store';
const {width, height} = Dimensions.get('window');

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const base_unit_width = 375;
const base_unit_height = 812;
const base_aspect_ratio = base_unit_height / base_unit_width;
export const ASPECT_DIFF = ASPECT_RATIO / base_aspect_ratio;

function map(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function normalizeX(size) {
  return (
    map(size, 0, base_unit_width, 0, SCREEN_WIDTH) *
    (ASPECT_RATIO / base_aspect_ratio)
  );
}

export function normalizeY(size) {
  return (
    map(size, 0, base_unit_height, 0, SCREEN_HEIGHT) *
    (ASPECT_RATIO / base_aspect_ratio)
  );
}

export const SCREEN_WIDTH = width > height ? height : width;
export const SCREEN_HEIGHT = width > height ? width : height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const PLATFORM_IOS = Platform.OS === 'ios' ? true : false;
export const STATUSBAR_HEIGHT = PLATFORM_IOS ? 0 : StatusBar.currentHeight;

export const HEADERHEIGHT = 36;
// export const IMAGE_CACHE = 'reload';
export const IMAGE_CACHE = 'force-cache';
// export const IMAGE_CACHE = 'default';
export const COPYRIGHT = 'Copyright © 2020 Deikho';
export const REDUX_STORE_VERSION = '5';
const INTERNAL_APP_VERSION_ANDROID = 1.1; //version code
const INTERNAL_APP_VERSION_IOS = 1.1; //version.build
export const VERSION_FOR_SERVER = 1.1;
//react-native-device info is a big package for only one thing, and it gives wired version for android and ios
export const APP_VERSION = PLATFORM_IOS
  ? INTERNAL_APP_VERSION_IOS
  : INTERNAL_APP_VERSION_ANDROID;

export const ONESIGNAL_APP_ID = 'c3e9603f-b407-4f10-b8ef-ad73619a56fb';

export const BILLING_SERVER_BASE = 'http://api.deikho.com/';
//export const BILLING_SERVER_BASE = 'http://54.85.189.2:8000/';

export const SERVER_BASE = 'https://deikho.com/'; //PROD
// export const SERVER_BASE = 'http://54.164.85.196/'; //PROD

export const API_BASE = `${SERVER_BASE}api/`;

export const AXIOS_CONFIG_NOAUTH = {
  headers: {'Content-Type': 'Application/json', Accept: 'Application/json'},
};

export let AXIOS_CONFIG = () => {
  let token = store.getState().auth.user
    ? store.getState().auth.user.token
    : '';
  return {headers: {Authorization: `Bearer ${token}`}};
};
export function isWithSafeArea() {
  let isIPhoneX = false;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    isIPhoneX =
      (SCREEN_WIDTH === X_WIDTH && SCREEN_HEIGHT === X_HEIGHT) ||
      (SCREEN_WIDTH === XSMAX_WIDTH && SCREEN_HEIGHT === XSMAX_HEIGHT);
  }
  return isIPhoneX;
}

export const emailValidationRegex =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const RNDCOLOR = () =>
  'rgb(' +
  Math.floor(Math.random() * 150 + 50) +
  ',' +
  Math.floor(Math.random() * 100 + 100) +
  ',' +
  Math.floor(Math.random() * 100 + 150) +
  ')';

export const WEATHER_API_KEY = '07ab95c7009cb5efffd899efa0860ccf';
export const BASE_WEATHER_URL =
  'https://api.openweathermap.org/data/2.5/weather?';

export const HOME_ACTIVE = require('../Assets/TabBarIcons/home.png');
export const HOME_INACTIVE = require('../Assets/TabBarIcons/home.png');

export const BOOKLOGS_ACTIVE = require('../Assets/TabBarIcons/booklogs.png');
export const BOOKLOGS_INACTIVE = require('../Assets/TabBarIcons/booklogs.png');

export const PROFILE_ACTIVE = require('../Assets/TabBarIcons/profile.png');
export const PROFILE_INACTIVE = require('../Assets/TabBarIcons/profile.png');

export const NOTIFICATIONS_ACTIVE = require('../Assets/TabBarIcons/notifications.png');
export const NOTIFICATIONS_INACTIVE = require('../Assets/TabBarIcons/notifications.png');

export const MENU_ACTIVE = require('../Assets/TabBarIcons/Menu.png');
export const MENU_INACTIVE = require('../Assets/TabBarIcons/Menu.png');

export const PORTRAIT = 'PORTRAIT';
export const LANDSCAPE = 'LANDSCAPE';

export const WEB_TERMS = 'http://deikho.com/terms';
export const WEB_ABOUTUS = 'http://deikho.com/aboutus';
export const WEB_PRIVACYPOLICY = 'http://deikho.com/privacypolicy';
export const WEB_CONTACTUS = 'http://deikho.com/contactus';

export const PASSWORD_LENGTH_ERROR = 'Minimum 5 characters required';
export const CONFIRM_PASSWORD_ERROR = 'Does not match with confirm password';
