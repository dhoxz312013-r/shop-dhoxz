export interface JokiPackage {
  id: string;
  duration: string;
  price: string;
  highlight?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  isAvailable: boolean;
  statusText?: string;
  priceText?: string;
  packages?: JokiPackage[];
}

export interface OrderStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}
