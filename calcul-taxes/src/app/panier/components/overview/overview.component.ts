import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Good } from '../../models/good';

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
      quantity: 2
    },
    {
      name: 'CD musical',
      price: 14.99,
      quantity: 1
    },
    {
      name: 'barres de chocolat',
      price: 0.85,
      quantity: 3
    }
  ];
  inputsTwo: Good[] = [
    {
      name: 'boîtes de chocolats importée',
      price: 10,
      quantity: 2
    },
    {
      name: 'flacons de parfum importé',
      price: 47.50,
      quantity: 3
    }
  ]
  inputsThree: Good[] = [
    {
      name: 'flacons de parfum importé',
      price: 27.99,
      quantity: 2
    },
    {
      name: 'flacon de parfum',
      price: 18.99,
      quantity: 1
    },
    {
      name: 'boîtes de pilules contre la migraine',
      price: 9.75,
      quantity: 3
    },
    {
      name: 'boîtes de chocolats importés',
      price: 11.25,
      quantity: 2
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
