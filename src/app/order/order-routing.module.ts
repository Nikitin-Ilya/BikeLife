import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'order-accepted',
    component: OrderAcceptedComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
