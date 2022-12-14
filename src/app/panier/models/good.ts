export enum GoodEnum {
  ESSENTIAL, BOOK, OTHER
}

export interface Good {
  name: string;
  price: number;
  quantity: number;
  type: GoodEnum;
  imported: boolean;
}
