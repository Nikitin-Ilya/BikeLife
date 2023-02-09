import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  items = [
    {id: 1, offer: 71, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping", "New"]},
    {id: 2, offer: 20, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping", "New"]},
    {id: 3, offer: 60, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["New"]},
    {id: 4, offer: 10, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping"]},
    {id: 5, offer: 60, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping"]},
    {id: 6, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["New"]},
    {id: 7, offer: 60, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping"]},
    {id: 8, offer: 60, description: "Stand mixer with extra power handle ppreciation Gift backet", offPrice: 49.99, realPrice: 69.99, image: "mixer.png", addition: ["Free Shipping", "New"]},
  ];

  getColor(offer: any) { (2)
    if (offer > 70) {
      return 'red';
    }
    else if(offer > 50) {
      return 'orange';
    }
    else if(offer < 50){
      return 'yellow';
    }
    else{
      return
    }
  }

}
