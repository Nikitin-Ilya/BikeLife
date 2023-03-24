import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
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
    this.subscription = this.dataService.getProductsFromDB().subscribe(response => {
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

  deleteProduct(item: IProduct): void{
    let isDelete = confirm("Are you sure you want to remove the product named: " + item.name + ". Data recovery will be impossible");
    if (isDelete && item.id){
      this.dataService.deleteProduct(item.id);
    }
  }
}
