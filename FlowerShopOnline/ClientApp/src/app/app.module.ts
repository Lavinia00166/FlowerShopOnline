import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopAddComponent } from './components/shop/shop-add/shop-add.component';
import { ShopUpdateComponent } from './components/shop/shop-update/shop-update.component';
import { ClientComponent } from './components/client/client.component';
import { ClientAddComponent } from './components/client/client-add/client-add.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { EventComponent } from './components/event/event.component';
import { EventAddComponent } from './components/event/event-add/event-add.component';
import { EventUpdateComponent } from './components/event/event-update/event-update.component';
import { OrderComponent } from './components/order/order.component';
import { OrderAddComponent } from './components/order/order-add/order-add.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ShopComponent,
    ShopAddComponent,
    ShopUpdateComponent,
    ClientComponent,
    ClientAddComponent,
    ClientUpdateComponent,
    ProductAddComponent,
    ProductComponent,
    ProductUpdateComponent,
    EventComponent,
    EventAddComponent,
    EventUpdateComponent,
    OrderComponent,
    OrderAddComponent,
    OrderUpdateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'shops', component: ShopComponent },
      { path: 'shops-add', component: ShopAddComponent },
      { path: 'shops-update', component: ShopUpdateComponent },
      { path: 'clients', component: ClientComponent },
      { path: 'clients-add', component: ClientAddComponent },
      { path: 'clients-update', component: ClientUpdateComponent },
      { path: 'events', component: EventComponent },
      { path: 'events-add', component: EventAddComponent },
      { path: 'events-update', component: EventUpdateComponent },
      { path: 'products', component: ProductComponent },
      { path: 'products-add', component: ProductAddComponent },
      { path: 'products-update', component: ProductUpdateComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'orders-add', component: OrderAddComponent },
      { path: 'orders-update', component: OrderUpdateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
