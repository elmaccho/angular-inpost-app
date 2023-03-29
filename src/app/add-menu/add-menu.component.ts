import { Component } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss']
})
export class AddMenuComponent {

  text = '0'

  test(event: any){
    const target = event.target as HTMLInputElement


    this.text = target.value.length

    // if(this.text.valueOf.length == 0){
    //   this.text = '0'
    // }

  }

}
