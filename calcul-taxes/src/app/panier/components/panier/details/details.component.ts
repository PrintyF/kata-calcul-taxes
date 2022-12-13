import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Good } from '../../../models/good';
import { TaxesService } from '../../../service/taxes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "number",
    "price",
  ];

  goodsAfterTaxes: Good[] = [];
  total:number = 0
  constructor(@Inject(MAT_DIALOG_DATA) public panier: Good[],
              private taxesService: TaxesService) {}

  ngOnInit() {
   this.panier.forEach( (good) => {
     let goodAfterTaxes: Good = {...good};

     goodAfterTaxes.price = this.taxesService.getTTCGoodPrice(good);
     this.total += goodAfterTaxes.price;
     this.goodsAfterTaxes.push(goodAfterTaxes)
   });
  }

}
