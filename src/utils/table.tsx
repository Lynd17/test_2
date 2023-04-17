import React from 'react';
import check from '../images/check-mark.svg';
import x from '../images/x-mark.svg';

interface ILogo {
  url: string;
}

export const Logo: React.FC<ILogo> = ({ url }) => {
  return <img src={url} alt={url} />;
};

export const parseValueByParam = (key: string, value: string | number | boolean) => {
  switch (key) {
    case 'diagonal':
      return String(value).replace('.', ',');
    case 'memory':
      return `${value} Гб`;
    case 'nfc':
      return <Logo url={value ? check : x} />;
    case 'esim':
      return <Logo url={value ? check : x} />;
    case 'wirelessCharging':
      return <Logo url={value ? check : x} />;
    case 'price':
      return `${String(value).substring(0, 2)} ${String(value).substring(2, 5)} ₽`;
    default:
      return value;
  }
};
