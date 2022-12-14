import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent
  ],
  exports: [
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ]
})
export class LayoutModule { }
