import { BASE_NUMBER } from '../settings/constants';
import { Maybe, Nothing, Pair } from '../types/bepswap';

export const getPair = (info?: string): Pair => ({
  source: info?.split('-')[0]?.toLowerCase() ?? Nothing,
  target: info?.split('-')[1]?.toLowerCase() ?? Nothing,
});

export const getUserFormat = (value?: number) => {
  if (value) {
    return Number((value / BASE_NUMBER).toFixed(2));
  }

  return 0;
};

export const getBaseNumberFormat = (value?: number | string) => {
  if (value && !Number.isNaN(Number(value))) {
    return Number((Number(value) * BASE_NUMBER).toFixed(2));
  }

  return 0;
};

export const getFixedNumber = (value?: number | string, point = 2) => {
  if (!value || (value && Number.isNaN(Number(value)))) {
    return Number(Number(0).toFixed(point));
  }

  return Number(Number(value).toFixed(point));
};

export const getTickerFormat = (symbol?: Maybe<string>) => {
  if (!symbol) return '';
  return symbol.split('-')[0].toLowerCase();
};

export const compareShallowStr = (str1: string, str2: string) => {
  try {
    return str1.toLowerCase() === str2.toLowerCase();
  } catch (error) {
    return false;
  }
};

export const emptyString = '';
