import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { CartComponent } from './cart/cart.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    OrderComponent,
    CartComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
