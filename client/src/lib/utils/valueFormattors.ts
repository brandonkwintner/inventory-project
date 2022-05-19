import { AMOUNT_FORMATTOR_REGEX } from '../constants';

export const amountTypeFormattor = ({ value }: { value: number }): string => {
  const formattedAmount = Math.floor(value).toString().replace(AMOUNT_FORMATTOR_REGEX, '$1,');
  return '$' + formattedAmount;
};

export const dateTypeFormattor = ({ value }: { value: Date }): string => {
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');
  return [padTo2Digits(value.getMonth() + 1), padTo2Digits(value.getDate()), value.getFullYear()].join('-');
};
