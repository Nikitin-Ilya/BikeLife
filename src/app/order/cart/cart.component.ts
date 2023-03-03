import {Component, OnInit} from '@angular/core';
import {ControlContainer, FormControl, FormGroup, Validators, FormGroupDirective} from '@angular/forms';
import { CartDataService } from "../cart-data.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})

export class CartComponent implements OnInit {

  cartFormGroup: FormGroup = new FormGroup({
    products: new FormControl(null ,[Validators.required]),
  });
  cartData!: any[];

  constructor(
    private ctrlContainer: FormGroupDirective,
    private cartDataService: CartDataService,
  ) {}

  ngOnInit() {
    this.ctrlContainer.form.addControl("cart", this.cartFormGroup);
    this.cartData = this.cartDataService.getCart();
  }
}
