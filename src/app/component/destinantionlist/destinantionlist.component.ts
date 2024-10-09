import { Component } from '@angular/core';

@Component({
  selector: 'app-destinantionlist',
  templateUrl: './destinantionlist.component.html',
  styleUrl: './destinantionlist.component.css'
})
export class DestinantionlistComponent {

  destinantionlist:string[]= ['Japan', 'Switzerland', 'Siargao', 'Spain', 'South korea'];

  addDestination(destinationInput: HTMLInputElement){
    const destination = destinationInput.value.trim();

    if(destination){
      this.destinantionlist.push(destination);
      destinationInput.value='';
    }
  }

  removeDestination(index: number){
    this.destinantionlist.splice(index, 1);
  }
}
