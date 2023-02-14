import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ProductsListComponent } from './home/products-list/products-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
