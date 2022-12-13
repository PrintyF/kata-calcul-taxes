import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { PanierComponent } from './components/panier/panier.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { DetailsComponent } from './components/panier/details/details.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    OverviewComponent,
    PanierComponent,
    DetailsComponent
  ],
  exports: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class PanierModule { }
