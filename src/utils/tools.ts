/* eslint-disable */
import { decodeHtml } from '@tencent/imutils';
import { LOCAL_DEFAULT_BUSS } from 'src/common/const';

export const deepEqual = function (x: any, y: any) {
  if (x == y) {
    return true;
  }
  if (typeof x === 'object' && x != null && typeof y === 'object' && y != null) {
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (const prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  }
  return false;
};

export const isObject = function (o: unknown): o is Dictionary<unknown> {
  return o === Object(o);
};

export const isFormData = function (f: unknown): boolean {
  return f instanceof FormData;
};

export const nonNullable = (x: unknown) => {
  return x !== undefined && x !== null;
};

export const isNullable = (x: unknown): x is null | undefined => {
  return !nonNullable(x);
};

export const isToday = (timestamp: number) => {
  const today = new Date();
  const date = new Date(timestamp * 1000);
  return (
    today.getFullYear() == date.getFullYear() &&
    today.getMonth() == date.getMonth() &&
    today.getDate() == date.getDate()
  );
};

/**
 * 指定小数位数进行四舍五入
 * @param num 需要四舍五入的数字
 * @param digit 保留的小数位数
 */
export const roundDecimal = (num: number, digit: number) => {
  const x = Math.pow(10, digit);
  return Math.round(num * x) / x;
};

export const secondsToHours = (seconds: number) => {
  return roundDecimal(seconds / 60 / 60, 1);
};

export const secondsToMinutes = (seconds: number) => {
  return roundDecimal(seconds / 60, 1);
};

export const safeText = (text: any, unit = '') => (nonNullable(text) ? `${text}${unit}` : '-');

export const safePercentText = (text: any) => safeText(text, '%');

export const safeHourText = (text: number) => safeText(text, '小时');

export const safeMinuteText = (text: number) => safeText(text, '分钟');

export const fullScreen = function (element: HTMLElement, exit: () => void) {
  const win: any = window;
  if (win.ActiveXObject) {
    const WsShell = new win.ActiveXObject('WScript.Shell');
    WsShell.SendKeys('{F11}');
  } else {
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
      /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
      /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  }
};

/**
 * 时间格式转换
 * @param i 单位秒
 * @return
 * 昨天，分钟
 * 年 月 日 hour：minute
 * */
export function timeDecoder(i: number) {
  const now = new Date().getTime();
  const elapse = now / 1000 - i;
  let s;
  if (elapse < 48 * 60 * 60 && elapse > 24 * 60 * 60) {
    s = '昨天';
  } else if (elapse < 24 * 60 * 60 && elapse > 60 * 60) {
    s = `${Math.round(elapse / (60 * 60))}小时前`;
  } else if (elapse < 60 * 60 && elapse > 60) {
    s = `${Math.round(elapse / 60)}分钟前`;
  } else if (elapse < 60 && elapse >= -60) {
    s = '刚刚';
  } else {
    const date = new Date(i * 1000);
    s = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  return s;
}

export const safeArray: <T>(arrayOrItem: T[]) => typeof arrayOrItem extends T[] ? T[] : NonNullable<T>[] = (
  arrayOrItem,
) => (Array.isArray(arrayOrItem) ? arrayOrItem : isNullable(arrayOrItem) ? [] : [arrayOrItem]);

export function enumEntries<T>(t: T): ReadonlyArray<readonly [keyof T, T[keyof T]]> {
  const entries = Object.entries(t);
  const plainStringEnum = entries.every(([key, value]) => typeof value === 'string');
  return (plainStringEnum ? entries : entries.filter(([k, v]) => typeof v !== 'string')) as any;
}

export function enumKeys<T>(t: T): ReadonlyArray<keyof T> {
  return enumEntries(t).map(([key]) => key);
}

export function enumValues<T>(t: T): ReadonlyArray<T[keyof T]> {
  const values = Object.values(t);
  const plainStringEnum = values.every((x) => typeof x === 'string');
  return plainStringEnum ? values : values.filter((x) => typeof x !== 'string');
}

export function renderMsgTpl(str: string) {
  return decodeHtml(str.replace(/<br>/g, '\n'));
}

// 业务id的列表，用于做区分java&node接口的白名单
const defaultWhiteList = ['1', '2', '5', '171', '462', '163', '187', '285', '271', '363', '3', '906'];
export function useJavaInterface() {
  const currentBid = localStorage.getItem(LOCAL_DEFAULT_BUSS);
  if (!currentBid) return false;
  if (localStorage.getItem('IS_LOCAL')) {
    return false;
  }
  return defaultWhiteList.includes(currentBid);
}

export const camelToLine = (obj: { [key: string]: any }): Object => {
  const newObj: { [key: string]: any } = {};
  for (let key in obj) {
    newObj[key.replace(/([A-Z])/g, '_$1').toLowerCase()] = obj[key];
  }
  return newObj;
};
