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
    let priceTTC = good.price * good.quantity;
    if (good.type === GoodEnum.BOOK) {
      priceTTC = priceTTC + priceTTC * 10 / 100;
    }
    else if (good.type === GoodEnum.OTHER) {
      priceTTC = priceTTC + priceTTC * 20 / 100;
    }
    if (good.imported)
      priceTTC = priceTTC + priceTTC * 5 / 100;
    return this.roundUpFiveCent(priceTTC);
  }
}
