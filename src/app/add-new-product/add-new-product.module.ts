import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewProductRoutingModule } from './add-new-product-routing.module';
import { AddNewProductComponent } from './add-new-product.component';


@NgModule({
  declarations: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    AddNewProductRoutingModule
  ]
})
export class AddNewProductModule { }
