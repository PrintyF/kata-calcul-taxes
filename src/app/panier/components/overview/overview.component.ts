import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Good } from '../../models/good';
import { PanierService } from '../../service/panier.service';

@Component({
  selector: 'app-overview',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  paniers: Good[][] = [];

 constructor(private panierService: PanierService) {
 }

  ngOnInit() {
   this.paniers = this.panierService.getPaniers();
 }

}
