export interface ISmartphone {
  id: number;
  name: string;
  imageUrl: string;
  brand: string;
  releasedIn: string;
  diagonal: number;
  manufacturer: string;
  memory: number;
  refreshRate: number;
  nfc: boolean;
  esim: boolean;
  wirelessCharging: boolean;
  price: number;
}

export interface ITableParam {
  label: string;
  key: string;
}
