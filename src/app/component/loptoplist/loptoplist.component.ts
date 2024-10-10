import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loptoplist',
  templateUrl: './loptoplist.component.html',
  styleUrl: './loptoplist.component.css'
})
export class LoptoplistComponent {
  laptoplist: string [] =['Dell', 'HP', 'Apple', 'Lenovo'];

  addLaptop(laptopInput: HTMLInputElement){
    const laptop = laptopInput.value.trim();
  if (laptop){
    this.laptoplist.push(laptop);
    laptopInput.value='';
  }
  }

  removeLaptop(index: number){
    this.laptoplist.splice(index, 1);
  }
}
