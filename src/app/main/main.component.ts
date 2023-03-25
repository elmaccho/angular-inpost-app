import { Orders } from './../orders';
import { Component } from '@angular/core';

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
      sender: 'KFD sp z. o. o'
    },
    {
      tracking_number: 958687521633421,
      status: 'Odebrana od nadawcy',
      sender: 'BioTerr sp z. o. o'
    }
  ]

}
