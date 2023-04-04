
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

  order: Orders[] = []
  orders: Orders[] = OrdersList;
  @Output() clickButton = new EventEmitter<void>();

  closeMenu(){
    closeAddMenu()
  }

  openMoreMenu(event: any){
    const target = event.target as HTMLInputElement
    event.target.nextSibling.classList.toggle('toggleMoreMenu')


  }

  onMouseOut(event: any){
    const target = event.target as HTMLInputElement
    const moreMenu = document.querySelector('.moreMenu') as HTMLInputElement

    if(target.contains(event.target)){
      console.log(event.target);
      console.log('eee');
      }
  }

  deleteOrder(order: Orders){
    this.orders = this.orders.filter(e => e !== order)
    console.log(this.orders);
  }
}

export function openAddMenu(){
  const header = document.querySelector('header') as HTMLElement;
  const main = document.querySelector('main') as HTMLElement;

  header.classList.toggle('menuToggle')
  main.classList.toggle('menuToggle')

  console.log('eee');
}
