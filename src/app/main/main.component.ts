import { Orders } from './../models/orders';
import { OrdersList } from '../models/OrderList';


import { Component, Output, EventEmitter } from '@angular/core';
import { closeAddMenu } from '../add-menu/add-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  orders: Orders[] = OrdersList;
  @Output() clickButton = new EventEmitter<void>();

  closeMenu(){
    closeAddMenu()
  }

  onNewOrder(order: Orders){
    this.orders.unshift(order)
  }

}

export function openAddMenu(){
  const header = document.querySelector('header') as HTMLElement;
  const main = document.querySelector('main') as HTMLElement;

  header.classList.toggle('menuToggle')
  main.classList.toggle('menuToggle')

  console.log('eee');
}
