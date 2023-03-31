import { Orders } from './../orders';
import { Component } from '@angular/core';
import { closeAddMenu } from '../add-menu/add-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  Orderlist: Orders[] = [
    {
      tracking_number: 412412412421213,
      status: 'Wydana do doręczenia',
      sender: 'KFD sp z. o. o',
      name: ''
    },
    {
      tracking_number: 958687521633421,
      status: 'Odebrana od nadawcy',
      sender: 'BioTerr sp z. o. o',
      name: ''
    }
  ]

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
