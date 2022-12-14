import { Injectable } from '@angular/core';
import { Good, GoodEnum } from '../models/good';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  inputOne: Good[] = [
    {
      name: 'livres',
      price: 12.49,
      quantity: 2,
      type: GoodEnum.BOOK,
      imported: false
    },
    {
      name: 'CD musical',
      price: 14.99,
      quantity: 1,
      type: GoodEnum.OTHER,
      imported: false
    },
    {
      name: 'barres de chocolat',
      price: 0.85,
      quantity: 3,
      type: GoodEnum.ESSENTIAL,
      imported: false
    }
  ];
  inputTwo: Good[] = [
    {
      name: 'boîtes de chocolats',
      price: 10,
      quantity: 2,
      type: GoodEnum.ESSENTIAL,
      imported: true
    },
    {
      name: 'flacons de parfum',
      price: 47.50,
      quantity: 3,
      type: GoodEnum.OTHER,
      imported: true
    }
  ]
  inputThree: Good[] = [
    {
      name: 'flacons de parfum',
      price: 27.99,
      quantity: 2,
      type: GoodEnum.OTHER,
      imported: true
    },
    {
      name: 'flacon de parfum',
      price: 18.99,
      quantity: 1,
      type: GoodEnum.OTHER,
      imported: false
    },
    {
      name: 'boîtes de pilules contre la migraine',
      price: 9.75,
      quantity: 3,
      type: GoodEnum.ESSENTIAL,
      imported: false
    },
    {
      name: 'boîtes de chocolats',
      price: 11.25,
      quantity: 2,
      type: GoodEnum.ESSENTIAL,
      imported: true
    }
  ];

  constructor() { }

  getPaniers(): Good[][] {
    const panier: Good[][] = [];

    panier.push(this.inputOne);
    panier.push(this.inputTwo);
    panier.push(this.inputThree);

    return panier;
  }
}
