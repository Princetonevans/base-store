import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './shared/material.module';
import { ChartistModule } from 'ng-chartist';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order', component: OrderComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ChartistModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
    ),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
