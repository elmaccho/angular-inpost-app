import { Orders } from './models/orders';
import { OrdersList } from './models/OrderList';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inpost_app';
  orders: Orders[] = OrdersList;


  onNewOrder(order: Orders){
    this.orders.unshift(order)
  }
}
