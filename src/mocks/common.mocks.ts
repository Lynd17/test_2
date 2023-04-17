import iphone12 from '../images/iphone-12.png';
import xiaomi11 from '../images/xiaomi-m11.png';
import samsung72 from '../images/samsung-a72.png';
import samsung21 from '../images/samsung-s21.png';
import iphoneXr from '../images/apple-iphone-xr.png';
import realme8 from '../images/realme-8.png';
import { ISmartphone, ITableParam } from '../types/common.types';

export const smartphones: ISmartphone[] = [
  {
    id: 1,
    name: 'Apple iPhone 12',
    imageUrl: iphone12,
    brand: 'Apple',
    releasedIn: '2020',
    diagonal: 6.1,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 60,
    nfc: false,
    esim: true,
    wirelessCharging: true,
    price: 81990,
  },
  {
    id: 2,
    name: 'Xiaomi Mi 11 Lite',
    imageUrl: xiaomi11,
    brand: 'Xiaomi',
    releasedIn: '2021',
    diagonal: 6.55,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 90,
    nfc: true,
    esim: true,
    wirelessCharging: false,
    price: 27490,
  },
  {
    id: 3,
    name: 'Samsung Galaxy A72',
    imageUrl: samsung72,
    brand: 'Apple',
    releasedIn: '2020',
    diagonal: 6.1,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 60,
    nfc: false,
    esim: true,
    wirelessCharging: true,
    price: 81990,
  },
  {
    id: 4,
    name: 'Samsung Galaxy S21',
    imageUrl: samsung21,
    brand: 'Xiaomi',
    releasedIn: '2021',
    diagonal: 6.55,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 90,
    nfc: true,
    esim: true,
    wirelessCharging: false,
    price: 27490,
  },
  {
    id: 5,
    name: 'Apple iPhone Xr',
    imageUrl: iphoneXr,
    brand: 'Xiaomi',
    releasedIn: '2021',
    diagonal: 6.55,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 90,
    nfc: true,
    esim: true,
    wirelessCharging: false,
    price: 27490,
  },
  {
    id: 6,
    name: 'Realme 8 Pro',
    imageUrl: realme8,
    brand: 'Xiaomi',
    releasedIn: '2021',
    diagonal: 6.55,
    manufacturer: 'Китай',
    memory: 128,
    refreshRate: 90,
    nfc: true,
    esim: true,
    wirelessCharging: false,
    price: 27490,
  },
];

export const paramsToView: ITableParam[] = [
  {
    label: 'Производитель',
    key: 'brand',
  },
  {
    label: 'Год релиза',
    key: 'releasedIn',
  },
  {
    label: 'Диагональ экрана (дюйм)',
    key: 'diagonal',
  },
  {
    label: 'Страна-производитель',
    key: 'manufacturer',
  },
  {
    label: 'Объем памяти',
    key: 'memory',
  },
  {
    label: 'NFC',
    key: 'nfc',
  },
  {
    label: 'Поддержка eSIM',
    key: 'esim',
  },
  {
    label: 'Поддержка беспроводной зарядки',
    key: 'wirelessCharging',
  },
  {
    label: 'Стоимость',
    key: 'price',
  },
];
