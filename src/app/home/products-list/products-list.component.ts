import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService, IProduct } from '../../services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent  implements OnInit{
  subscription!: Subscription;
  products!: IProduct[];

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.subscription = this.dataService.getProducts().subscribe(response=> {
      this.products=response.sort((el, nextEl) => {
        if (el.discount > nextEl.discount) {
          return -1;
        }
        if (el.discount < nextEl.discount) {
          return 1;
        }
        return 0;
      });
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBack(): void {
    this.subscription.unsubscribe();
  }
}
