export const amountTypeFormattor = ({ value }: { value: number }): string => {
  if (!value) return '';
  const formattedAmount = '$' + Number(value.toFixed(2)).toLocaleString('en');

  // Pad extra 0's at end, if necessary
  const split = formattedAmount.split('.');
  if (split.length === 1) return formattedAmount + '.00';
  if (split[1].length === 1) return formattedAmount + '0';
  return formattedAmount;
};

export const dateTypeFormattor = ({ value }: { value: Date }): string => {
  const padTo2Digits = (num: number) => num.toString().padStart(2, '0');
  return [padTo2Digits(value.getMonth() + 1), padTo2Digits(value.getDate()), value.getFullYear()].join('-');
};
