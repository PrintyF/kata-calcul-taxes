import { Injectable } from '@angular/core';
import { Good, GoodEnum } from '../models/good';

@Injectable({
  providedIn: 'root'
})
export class TaxesService {

  constructor() { }

  private roundUpFiveCent(price: number): number {
    return parseFloat((Math.ceil(price * 20) / 20).toFixed(2));
  }

  getTTCGoodPrice(good: Good): number {
    let priceTTC = good.price;
    let taxes = 0;

    if (good.type === GoodEnum.BOOK)
      taxes += this.roundUpFiveCent(priceTTC * 0.1) * good.quantity;
    else if (good.type === GoodEnum.OTHER)
      taxes += this.roundUpFiveCent(priceTTC * 0.2) * good.quantity;
    if (good.imported)
      taxes += this.roundUpFiveCent((priceTTC * 0.05) * good.quantity);
    return this.roundUpFiveCent(priceTTC * good.quantity + taxes);
  }
}
