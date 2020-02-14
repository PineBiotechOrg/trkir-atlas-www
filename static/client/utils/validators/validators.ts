import filter from 'lodash/filter';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import isFinite from 'lodash/isFinite';
import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import trim from 'lodash/trim';
import moment from 'moment';

import {Indexed} from 'infrastructure/utils';

import {
    REGEXP_EMAIL,
    REGEXP_PHONE,
    REGEXP_TIME,
    REGEXP_URL,
} from './consts';

export function isPositiveInt(value: string | number) {
    return /^\d+$/.test(`${value}`) && parseInt(`${value}`, 10) > 0;
}

export function isNotEmpty(v: any) {
    if (isString(v)) {
        return !!trim(v);
    }

    if (isArray(v)) {
        return !isEmpty(v);
    }

    if (isObject(v)) {
        return !isEmpty(v);
    }

    return !isNil(v);
}

export function customIsEmpty(v: any) {
    return !isNotEmpty(v);
}

/**
 * @param list - список элементов
 * @param elem - искомый элемент
 * @param key - признак уникальности
 */
export function isUniq(list: any, elem: Indexed, key: string) {
    if (isArray(list)) {
        return filter(list, item => item[key] === elem[key]).length < 2;
    }

    return true;
}

// TODO переименовать в isNotNegativeNumber
export function isNumber(value: string | number) {
    const val = Number(value);
    return !isNaN(val) && val >= 0;
}

export function isPositiveNumber(v: string | number) {
    return isNumber(v) && Number(v) > 0;
}

export function isInteger(value: string | number) {
    const val = Number(value);
    return Number.isInteger(val);
}

/**
 * Для случаев, когда есть обязательное поле с числом
 */
export function isRequiredNumber(value: string | number) {
    if (isFinite(value)) {
        return true;
    }

    if (!value) {
        return false;
    }

    const val = Number(value);

    return !isNaN(val);
}

// Email не обязателен
export function isEmail(value: string) {
    if (!value) {
        return true;
    }

    return REGEXP_EMAIL.test(value);
}

export function isUrl(value: string) {
    return REGEXP_URL.test(value);
}

export function isTime(value: string) {
    if (!value || value.length !== 5) {
        return false;
    }

    if (!REGEXP_TIME.test(value)) {
        return false;
    }

    const [h, m] = value.split(':').map(Number);

    return h < 24 && m < 60;
}

export const isDatesSameOrBefore = (dateA: string, dateB: string) => {
    return dateA && dateB && moment(dateA).isSameOrBefore(moment(dateB));
};

export const isTimesBefore = (timeA: string, timeB: string) => {
    return moment(timeA, 'hh:mm').isBefore(moment(timeB, 'hh:mm'));
};

export const isPhone = (value: string) => REGEXP_PHONE.test(value);

export const isOneOf = (keys: string[]) => (value: string) => keys.includes(value);

export const isHtml = (value: any) =>
    typeof value === 'string' && ['<!DOCTYPE html>', '<html>'].some(html => value.includes(html));

export const isJSON = (value: string) => {
    if (!value) {
        return false;
    }

    try {
        JSON.parse(value);
    } catch (err) {
        return false;
    }

    return true;
};

export const isNotPercent = (value: number) => value < 0 || value > 1;

// Проверяет что строка без пробелов внутри, крайние пробелы убираются
export const isWithoutSpaces = (string: string) => (string ? !/\s/.test(string.trim()) : false);

export const maxStringLength = (length: number) => (string = '') => {
    return string.length <= length;
};

export const isNumberInRange = (min: number, max: number) => (value: number) =>
    !!value && !isNaN(Number(value)) && value >= min && value <= max;
