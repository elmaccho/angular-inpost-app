import { Component, } from '@angular/core';
import { Orders } from './../orders';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {




  packageNumberText = '0'
  packageNameText = '0'
  trackingNumber: any

  packageNumber(event: any){
    const target = event.target as HTMLInputElement
    this.packageNumberText = target.value.length.toString()

    if(event.target.value.length == 24){

      target.style.border = "2px solid rgba(207, 205, 205, 0.479)"

    } else if (event.target.value.length != 24) {

      target.style.border = "2px solid red"
    }
  }

  packageName(event: any){
    const target = event.target as HTMLInputElement
    this.packageNameText = target.value.length.toString()
  }


  focusIn(event: any){
    const target = event.target as HTMLInputElement

    target.style.border = "2px solid rgb(255, 217, 25)"
  }

  focusOut(event: any){
    const target = event.target as HTMLInputElement


    target.style.border = "2px solid rgba(207, 205, 205, 0.479)"

    if(event.target.value.length == 24){

      target.style.border = "2px solid rgba(207, 205, 205, 0.479)"

    } else if (event.target.value.length != 24 && event.target.type == 'tel') {

      target.style.border = "2px solid red"
    }

  }

  closeAddMenu(){

    const header = document.querySelector('.header') as HTMLElement;
    const main = document.querySelector('.main') as HTMLElement;
    header.classList.toggle('menuToggle')
    main.classList.toggle('menuToggle')

    console.log('eee');
  }

  validation(event: any){
    const target = event.target as HTMLInputElement
    const addOrderBtn = document.querySelector('.addOrderBtn') as HTMLInputElement


    if(event.target.value.length.toString()==24){
      addOrderBtn.disabled = false
    } else {
      addOrderBtn.disabled = true
    }
  }

  addOrder(){
    const order: Orders = {
      tracking_number: this.trackingNumber,
      status: '',
      sender: '',
      name: ''
    }

  }
}

export function closeAddMenu(){
  const header = document.querySelector('.header') as HTMLElement;
  const main = document.querySelector('.main') as HTMLElement;
  header.classList.toggle('menuToggle')
  main.classList.toggle('menuToggle')
}

