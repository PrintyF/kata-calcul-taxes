import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Good, GoodEnum } from '../../models/good';

@Component({
  selector: 'app-overview',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
 inputs: Good[][] = [];
  inputsOne: Good[] = [
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
  inputsTwo: Good[] = [
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
  inputsThree: Good[] = [
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



 constructor() {
 }

  ngOnInit() {
    this.inputs.push(this.inputsOne);
    this.inputs.push(this.inputsTwo);
    this.inputs.push(this.inputsThree);
 }

}
