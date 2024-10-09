import { Component } from '@angular/core';

@Component({
  selector: 'app-sportlist',
  templateUrl: './sportlist.component.html',
  styleUrl: './sportlist.component.css'
})
export class SportlistComponent {
sportlist:string []=['Gymnastic', 'swimming', 'Volleyball', 'weightlifting', 'Boxing'];

addSport(sportInput: HTMLInputElement){
  const sport = sportInput.value.trim();
  if(sport){
    this.sportlist.push(sport);
    sportInput.value='';
  }
}
removeSport(index: number){
  this.sportlist.splice(index, 1);
}
}
