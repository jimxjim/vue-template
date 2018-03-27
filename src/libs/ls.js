import isNil from 'lodash/isNil';

const LOGIN_INFO = 'loginInfo';
const LOGIN_KEYIN = 'loginKeyin';
const TICKER_SMS = 'tickerSMS';
const TICKER_EMAIL = 'tickerEmail';

function getter(id) {
  const data = localStorage.getItem(id);

  if (isNil(data) || data === 'undefined') return {};

  return JSON.parse(data);
}

function setter(id, data) {
  localStorage.setItem(id, JSON.stringify(data));
  return true;
}
export function getLoginInfo() {
  return getter(LOGIN_INFO);
}

export function getAccessToken() {
  const loginInfo = getLoginInfo();

  return (loginInfo && loginInfo.accessToken) || '';
}

export function setLoginInfo(data) {
  return setter(LOGIN_INFO, data);
}

export function getLoginKeyin() {
  return getter(LOGIN_KEYIN);
}

export function setLoginKeyin(data) {
  return setter(LOGIN_KEYIN, data);
}

export function getTickerSMS() {
  return getter(TICKER_SMS);
}

export function setTickerSMS(data) {
  return setter(TICKER_SMS, data);
}

export function getTickerEmail() {
  return getter(TICKER_EMAIL);
}

export function setTickerEmail(data) {
  return setter(TICKER_EMAIL, data);
}

export function clear() {
  setLoginInfo({});
  setTickerSMS({});
  setTickerEmail({});
}
