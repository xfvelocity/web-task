export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface StoreState {
  basket: BasketState;
}

export interface BasketState {
  items: Item[];
}
