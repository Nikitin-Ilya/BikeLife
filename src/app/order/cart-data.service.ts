import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() { }

  data = [
    {
      id: 1,
      imgUrl: ["https://cyclingmagazine.ca/wp-content/uploads/2018/10/Krypton_A18_2016_red_ultegra_16_1.jpg"],
      price: 28000,
      discount: 71,
      main: true,
      shop: "Canada Bike",
      name: "Argon 18",
      description: "Founded by retired cyclist Gervais Rioux in Montreal in 1989, Argon 18 has grown to distribute bikes aross the world and sponsors a number of professional cycling teams and triathletes. In 2019, Argo 18 sponsores Hugo Houle’s UCI WorldTour team Astana",
      shipping: "Free shipping",
      discountUntil: "2021-06-02T10:00:00",
      new: true,
      color: [ 'Blue', 'Grey', 'Orange', 'Black'],
      size: [ 'S', 'L', 'XL', 'XXL'],
      review: [
          {
              author: "Michel Delap",
              text: "Good one, but I have some problem with wheels",
              rating: 4
          }
      ]
    },
    {
      id: 2,
      imgUrl: ["https://cyclingmagazine.ca/wp-content/uploads/2018/03/etap.shadowpsd_2048x.png"],
      price: 7900,
      discount: 41,
      main: false,
      shop: "Amazon",
      name: "Aquila Cycles",
      description: "Aquila is the in house brand of Oakville and Toronto based bike shop Racer Sportif. The company offers carbon road, triathlon and track bikes that have been ridden by Canadian development squad Team RaceClean as well as by Canadian track athletes on the international circuit",
      shipping: null,
      discountUntil: "2021-05-15T16:44:00",
      new: true,
      color: [ 'Blue', 'Grey', 'Orange'],
      size: [ 'S', 'L', 'XL'],
      review: [
          {
              author: "Michel Topale",
              text: "Good one, but I have some problem with wheels",
              rating: 3
          }
      ]
    }
  ]

  getCart() {
    return this.data;
  }
}
