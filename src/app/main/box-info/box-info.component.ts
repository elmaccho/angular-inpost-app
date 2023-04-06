import { Component } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { OrdersList } from 'src/app/models/OrderList';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss']
})
export class BoxInfoComponent {
  orders: Orders[] = OrdersList;

  closeBoxInfo(event: any){
    const target = event.target as HTMLInputElement

    console.log(event.target);
    const header = document.querySelector('.boxInfoHeader') as HTMLElement;
    const main = document.querySelector('.boxInfoMain') as HTMLElement;

    header.classList.toggle('openBoxInfoToggle')
    main.classList.toggle('openBoxInfoToggle')
  }

  tracking_number = this.orders
  status = this.orders
  sender = this.orders
  name = this.orders

  menusettToggle(event:any){
    const menusett = document.querySelector('.menusett') as HTMLInputElement

    menusett.classList.toggle("toggle")
  }

  

}
