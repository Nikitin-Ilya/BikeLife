import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { data } from '../../assets/data';

interface IReview {
  author: string;
  text: string;
  rating: number;
}

export interface IProduct {
  id: number;
  name: string;
  imgUrl: string;
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

  constructor(private http: HttpClient) {}

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>('../../assets/data.json');
  }

  getProduct(id: number):Observable<IProduct>{
    return this.http.get<IProduct[]>('../../assets/data.json')
      .pipe(map(products => products.find((r) => r.id == id)!));
  }
}
