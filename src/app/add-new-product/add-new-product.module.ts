import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewProductRoutingModule } from './add-new-product-routing.module';
import { AddNewProductComponent } from './add-new-product.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    AddNewProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FileUploadModule,
    HttpClientModule
  ]
})
export class AddNewProductModule { }
