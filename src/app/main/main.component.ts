import { Orders } from './../models/orders';
import { OrdersList } from '../models/OrderList';


import { Component, Input } from '@angular/core';
import { closeAddMenu } from '../add-menu/add-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  orders: Orders[] = OrdersList;




  closeMenu(){
    closeAddMenu()
  }


}

export function openAddMenu(){
  const header = document.querySelector('header') as HTMLElement;
  const main = document.querySelector('main') as HTMLElement;

  header.classList.toggle('menuToggle')
  main.classList.toggle('menuToggle')

  console.log('eee');
}
