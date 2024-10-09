import { Component } from '@angular/core';

@Component({
  selector: 'app-stationarylist',
  templateUrl: './stationarylist.component.html',
  styleUrl: './stationarylist.component.css'
})
export class StationarylistComponent {

  stationarylist:string[]=['Pad paper', 'SignPen', 'Pencil', 'Journal', 'Notebook'];

  addStationary(stationaryInput: HTMLInputElement){
    const stationary =  stationaryInput.value.trim();

    if (stationary){
      this.stationarylist.push(stationary);
      stationaryInput.value='';
    }
  }
  removeStationary(index: number){
    this.stationarylist.splice(index, 1);
  }
}
