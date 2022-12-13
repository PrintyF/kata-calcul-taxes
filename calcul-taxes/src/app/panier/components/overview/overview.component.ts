import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Goods } from '../../models/goods';

@Component({
  selector: 'app-overview',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
 inputs: Goods[][] = [];
  inputsOne: Goods[] = [
    {
      name: 'livres',
      price: 12.49,
      number: 2
    },
    {
      name: 'CD musical',
      price: 14.99,
      number: 1
    },
    {
      name: 'barres de chocolat',
      price: 0.85,
      number: 3
    }
  ];
  inputsTwo: Goods[] = [
    {
      name: 'boîtes de chocolats importée',
      price: 10,
      number: 2
    },
    {
      name: 'flacons de parfum importé',
      price: 47.50,
      number: 3
    }
  ]
  inputsThree: Goods[] = [
    {
      name: 'flacons de parfum importé',
      price: 27.99,
      number: 2
    },
    {
      name: 'flacon de parfum',
      price: 18.99,
      number: 1
    },
    {
      name: 'boîtes de pilules contre la migraine',
      price: 9.75,
      number: 3
    },
    {
      name: 'boîtes de chocolats importés',
      price: 11.25,
      number: 2
    }
  ]

 constructor() {
 }

  ngOnInit() {
    this.inputs.push(this.inputsOne);
    this.inputs.push(this.inputsTwo);
    this.inputs.push(this.inputsThree);
 }

}
