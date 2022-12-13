import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Good } from '../../../models/good';
import { GoodAfterTaxes } from '../../../models/goodAfterTaxes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "price",
    "number"
  ];

  goodsAfterTaxes: GoodAfterTaxes[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public panier: Good[]) {}

  ngOnInit() {
    this.panier.forEach(good => {
      this.goodsAfterTaxes.push({
        name: good.name,
        priceTTC: good.price,
        quantity: good.quantity
      })
    })
  }

}
