export interface ProductSpec {
  label: string;
  value: string;
}

export interface Accessory {
  name: string;
  included: boolean;
  note?: string;
  count?: number;
}

export interface Seller {
  name: string;
  location: string;
  rating: number;
  itemsSold: number;
  avatar: string;
  verified: boolean;
}

export interface PricePoint {
  date: string;
  price: number;
}
