import { sprintf, vsprintf } from 'sprintf-js';
import camelCase from 'lodash/camelCase';
import Vue from 'vue';
import _ from 'lodash';
import moment from 'moment';

const translateSyntax = (originTranslation, replaceStrings) => {
  if (Array.isArray(replaceStrings)) {
    return vsprintf(originTranslation, replaceStrings);
  }
  return sprintf(originTranslation, replaceStrings);
};

export const isNumber = (number) => {
  const re = /^[+-]?\d+\.?\d*$/;
  return re.test(number);
};

export const isEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isPassword = (pwd) => {
  const re = /^(?=^.{6,20}$)((?=.*[A-Za-z0-9])(?=.*[A-za-z])(?=.*[0-9]))^.*$/;
  return re.test(pwd);
};

function createType(type) {
  return {
    base: `${type}`,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`,
    processing: `${type}_PROCESSING`,
    processingKey: camelCase(`${type}Processing`),
    dataKey: camelCase(`${type}Data`),
    error: camelCase(`${type}Error`),
  };
}

export const createTypes = (type) => {
  if (_.isString(type)) return createType(type);

  if (_.isArray(type)) {
    return _.fromPairs(_.map(type, value => ([value, createType(value)])));
  }

  return {};
};

/* eslint-disable no-param-reassign */
export const createMutations = (types) => {
  const mutation = {};
  Object.keys(types).forEach((key) => {
    const type = types[key];
    const camelCaseType = camelCase(type.base);

    mutation[type.base] = (state, payload) => {
      switch (payload.type) {
        case type.processing:
          Vue.set(state, type.processingKey, payload.value);
          break;
        case type.success:
          Vue.set(state, type.dataKey, payload.data);
          Vue.set(state.status, camelCaseType, payload.status);
          Vue.set(state.message, camelCaseType, payload.message);
          Vue.set(state, type.processingKey, false);
          break;
        case type.failure:
          Vue.set(state.error, camelCaseType, payload.error);
          Vue.set(state, type.processingKey, false);
          break;
        default:
          console.error('Please check the types!');
          break;
      }
    };
  });
  return mutation;
};

export function get(path, defaultValue) {
  return function (object) {
    return _.get(object, path, defaultValue);
  };
}

export function toMomentDate(data) {
  return moment(data);
}

export function toLocal24Time(data, format = 'YYYY/MM/DD HH:mm:ss') {
  if (!data) return '';

  return toMomentDate(data).format(format);
}


const decimalAdjust = (type, value, exp) => {
  // If the exp is undefined or zero...

  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Shift
  value = value.toString().split('e');
  value = Math[type](+(`${value[0]}e${(value[1] ? (+value[1] - exp) : -exp)}`));
  // Shift back
  value = value.toString().split('e');
  return +(`${value[0]}e${(value[1] ? (+value[1] + exp) : exp)}`);
};

// Decimal round
export const round10 = (v, e) => decimalAdjust('round', v, e);
// Decimal floor
export const floor10 = (v, e) => decimalAdjust('floor', v, e);
// Decimal ceil
export const ceil10 = (v, e) => decimalAdjust('ceil', v, e);

export const isNotEmpty = obj => obj && Object.keys(obj).length > 0;

export const isEmpty = obj => !obj || Object.keys(obj).length === 0;

export default translateSyntax;

export function timeGap(duration) {
  if (duration < 0) return '';

  const hours = Math.floor(duration / 3600);
  const lessOneHour = duration - (3600 * hours);
  const minutes = Math.floor(lessOneHour / 60);
  const seconds = lessOneHour - (60 * minutes);

  const result = `${hours > 0 ? `${_.padStart(hours, 2, '0')}:` : ''}`
    + `${_.padStart(minutes, 2, '0')}:${_.padStart(seconds, 2, '0')}`;

  return result;
}

export function adjustTime(systemTime, targetTime) {
  const localTimeObj = toMomentDate();
  const systemTimeObj = toMomentDate(systemTime);
  const targetTimeObj = toMomentDate(targetTime);
  const offset = localTimeObj.diff(systemTimeObj, 'milliseconds');
  const newTimeObj = targetTimeObj.add(offset, 'milliseconds');

  return newTimeObj;
}
