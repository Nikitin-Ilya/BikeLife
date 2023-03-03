import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


import { OrderComponent } from './order.component';
import { CartComponent } from './cart/cart.component';
import { OrderAcceptedComponent } from './order-accepted/order-accepted.component';


@NgModule({
  declarations: [
    OrderComponent,
    CartComponent,
    OrderAcceptedComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    BreadcrumbModule,
    MatToolbarModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
  ]
})
export class OrderModule { }
