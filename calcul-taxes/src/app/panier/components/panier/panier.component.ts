import { Component, Input } from '@angular/core';
import { Goods } from '../../models/goods';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  @Input('panier') panier: Goods[] = [];
  @Input('index') index: number = 0;
}
