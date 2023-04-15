import { Component, Output, EventEmitter } from '@angular/core';
import { closeAddMenu } from '../add-menu/add-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  closeMenu(){
    closeAddMenu()
  }

  onMouseOut(event: any){
    const target = event.target as HTMLInputElement
    const moreMenu = document.querySelector('.moreMenu') as HTMLInputElement

    if(target.contains(event.target)){
      console.log(event.target);
      console.log('eee');
      }
  }

  openBoxInfo(event: any){
    const target = event.target as HTMLInputElement

    console.log(event.target);
    const header = document.querySelector('.boxInfoHeader') as HTMLElement;
    const main = document.querySelector('.boxInfoMain') as HTMLElement;

    header.classList.toggle('openBoxInfoToggle')
    main.classList.toggle('openBoxInfoToggle')

  }

}
