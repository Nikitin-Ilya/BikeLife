import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'product/:id', component: ProductDetailsComponent },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
    canActivate: [RoleGuard],
    data: {
      roles: ['customer', 'admin', 'owner']
    }
  },
  {
    path: 'add-new-product',
    loadChildren: () => import('./add-new-product/add-new-product.module').then(m => m.AddNewProductModule),
    canActivate: [RoleGuard],
    data: {
      roles: ['admin']
    }
  },
  {
    path: 'product/edit/:id',
    loadChildren: () => import('./edit-product/edit-product.module').then(m => m.EditProductModule),
    canActivate: [RoleGuard],
    data: {
      roles: ['admin', 'owner']
    }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
