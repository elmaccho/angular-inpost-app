import { Component } from '@angular/core';

@Component({
  selector: 'app-box-info',
  templateUrl: './box-info.component.html',
  styleUrls: ['./box-info.component.scss']
})
export class BoxInfoComponent {

  closeBoxInfo(event: any){
    const target = event.target as HTMLInputElement

    console.log(event.target);
    const header = document.querySelector('.boxInfoHeader') as HTMLElement;
    const main = document.querySelector('.boxInfoMain') as HTMLElement;

    header.classList.toggle('openBoxInfoToggle')
    main.classList.toggle('openBoxInfoToggle')
  }


  menusettToggle(event:any){
    const menusett = document.querySelector('.menusett') as HTMLInputElement

    menusett.classList.toggle("toggle")
  }



}
