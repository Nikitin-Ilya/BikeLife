import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  cartFormGroup: FormGroup = new FormGroup({});

  addressFormGroup: FormGroup = new FormGroup({
    country: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
  });
  paymentFormGroup: FormGroup = new FormGroup({
    paymentMethod: new FormControl("", [Validators.required]),
  });
  deliveryDateFormGroup: FormGroup = new FormGroup({
    deliveryDateRadio: new FormControl( "", [Validators.required]),
    deliveryDatePicker: new FormControl({ value: "", disabled: true}, [Validators.required]),
  });
  deliveryDate: Date = new Date();

  constructor(
    private router: Router,
  ) {}

  isDatePickerEnabled():void {
    switch(this.deliveryDateFormGroup.get('deliveryDateRadio')?.value) {
      case 'today': {
        this.deliveryDateFormGroup.get('deliveryDatePicker')?.disable();
        this.deliveryDate = new Date();
        break;
      }
      case 'tomorrow': {
        this.deliveryDateFormGroup.get('deliveryDatePicker')?.disable();
        var d = new Date();
        this.deliveryDate.setDate(d.getDate() + 1);
        break;
      }
      case 'custom': {
        this.deliveryDateFormGroup.get('deliveryDatePicker')?.enable();
        break;
      }
      default: {
        break;
      }
   }
  }

  changeDatePicker():void {
    this.deliveryDate = this.deliveryDateFormGroup.get('deliveryDatePicker')?.value
  }

  createNewOrder():void{
    this.router.navigate(['order/order-accepted']);
  }

}
