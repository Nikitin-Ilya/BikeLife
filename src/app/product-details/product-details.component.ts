import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService, IProduct } from '../services/data.service';
import { NgbRatingConfig, } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

  constructor( private route: ActivatedRoute, private formBuilder: FormBuilder, private productService: DataService, ratingConfig: NgbRatingConfig, private db: AngularFirestore) {
		ratingConfig.max = 5;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.subscription = this.productService.getProductFromDB(productId)
      .subscribe(response=> {
        this.product = response!;
        this.myThumbnail=response!.imgUrl[0];
        this.fullImage=response!.imgUrl[0];
      })

    this.subscription = this.productService.getProductsReviewsFromDB(productId)
      .subscribe(response=> {
        this.product.review = response;
        console.log("res", response);
      })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public get rating() {
    if (this.product.review){
      const arr = this.product.review.map(review=>{
        return review.rating
      })
      const sum = arr.reduce((acc,el)=>(acc+=el),0)
      return sum/arr.length
    }
    else{
      return 0
    }
  }

  changeImage(image: string): void{
    this.myThumbnail = image;
    this.fullImage = image;
  }

  onSubmit(): void {
    if(this.colorFormControl.value && this.sizeFormControl.value && this.checkoutForm.get(['quantity'])?.value >=1 && this.checkoutForm.get(['quantity'])?.value <= 10){
      alert('Added to cart');
    }
  }

}
