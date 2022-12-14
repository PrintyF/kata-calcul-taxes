import { Component, Input } from '@angular/core';
import { Good } from '../../models/good';
import { DetailsComponent } from './details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  @Input('panier') panier: Good[] = [];
  @Input('index') index: number = 0;

  displayedColumns: string[] = [
    "name",
    "price",
    "number",
    "import"
  ];

  constructor(public dialog: MatDialog) {
  }

  showDetails(): void {
    this.dialog.open(DetailsComponent, {
      width: '600px',
      data: this.panier
    });
  }
}
