import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

interface IReview {
  author: string;
  text: string;
  rating: number;
}

export interface IProduct {
  id: number;
  name: string;
  imgUrl: string[];
  price: number;
  shop: string;
  discount: number;
  main:boolean;
  description: string;
  shipping:string;
  new:boolean;
  discountUntil:string;
  color:string[];
  size:string[];
  review:IReview[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private db: AngularFirestore) {}

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('../../assets/data.json');
  }

  getProduct(id: number):Observable<IProduct>{
    return this.http.get<IProduct[]>('../../assets/data.json')
      .pipe(map(products => products.find((r) => r.id == id)!));
  }

  getProductsFromDB():Observable<IProduct[]>{
    return <Observable<IProduct[]>> this.db.collection('products').valueChanges();
  }

  addNewProduct(product: IProduct){
    this.db.collection("products").doc()
    .set({
      name: product.name,
      imgUrl: product.imgUrl,
      price: product.price,
      shop: product.shop,
      discount: product.discount,
      main: product.main,
      description: product.description,
      shipping: product.shipping,
      new: product.new,
      discountUntil: product.discountUntil,
      color: product.color,
      size: product.size,
      review: null,
    });
  }


}
