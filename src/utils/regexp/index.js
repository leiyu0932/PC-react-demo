export const numberExp = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/;

export const notNegativeNumberExp = /^(0|([1-9]\d*))(\.\d+)?$/;

export const positiveInteger = /^([1-9]\d*)$/;

// export const phoneNumberExpLow = /^[\d+()\s-]{4,15}$/
export const phoneNumberExpLow = /^[\d+]{6,20}$/;

export const phoneNumberExp = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

export const phoneAndMoblieNumberExp = /(^(\d{3,4})?[1-9]\d{6,7}$)|(^1[3-9]\d{9}$)/;

// export const textExp = /^[^(`↵~!@#$^&*=|{}':;',.<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？)]+$/
// export const textExp = /^[^`↵~!@#$^&=|{}':;'.<>?~！@#￥……&——|{}‘；：”“'。、？]+$/
export const textExp = /^[^`↵~!@#$^&=|{}';'<>?~！@#&——|{}‘；”“。？]+$/;

export const moneyCapitalExp = /^(0|([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;

export const instCodeExp = /^[\w-]+$/;

export const zhEnNumer = /^[\u4E00-\u9FA5\w]+$/;

export const enNumber = /^[A-Za-z0-9]+$/;

export const emailExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const identity = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

export const passport = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
