import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { DataService, IProduct } from '../services/data.service';
import { NgbRatingConfig, } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [NgbRatingConfig],
})

export class ProductDetailsComponent implements OnInit {

  subscription!: Subscription;
  product!: IProduct;
  myThumbnail!: string;
  fullImage!: string;
  count: number = 1;
  colorFormControl = new FormControl('', Validators.required);
  sizeFormControl = new FormControl('', Validators.required);

  checkoutForm = this.formBuilder.group({
    color: ['', [Validators.required]],
    size: ['', [Validators.required]],
    quantity: ['', [Validators.required]]
  });

  constructor( private route: ActivatedRoute, private formBuilder: FormBuilder, private productService: DataService, ratingConfig: NgbRatingConfig, @Inject(DOCUMENT) private document: Document) {
		ratingConfig.max = 5;
  }

  ngOnInit(): void {
    const productId = parseInt(this.route.snapshot.params['id']);
    this.subscription = this.productService.getProduct(productId)
      .subscribe(response=> {
        this.product = response!;
        console.log(response.imgUrl.length);
        if(response.imgUrl.length>1){
          this.myThumbnail=response!.imgUrl[0];
          this.fullImage=response!.imgUrl[0];
        }
        else{
          this.myThumbnail=response!.imgUrl;
          this.fullImage=response!.imgUrl;
        }
      })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBack(): void {
    this.subscription.unsubscribe();
  }

  public get rating() {
    const arr = this.product.review.map(review=>{
      return review.rating
    })
    const sum = arr.reduce((acc,el)=>(acc+=el),0)
    return sum/arr.length
  }

  changeImage(image: string): void{
    this.myThumbnail = image;
    this.fullImage = image;
  }

  onSubmit(): void {
    if(this.colorFormControl.value && this.sizeFormControl.value && this.count >=1 && this.count <= 10){
      alert('Added to cart');
    }
  }

}
