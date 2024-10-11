import { Component } from '@angular/core';

@Component({
  selector: 'app-buildinglist',
  templateUrl: './buildinglist.component.html',
  styleUrl: './buildinglist.component.css'
})
export class BuildinglistComponent {
  buildinglist:string[]=['ICT building', 'Journalist building', 'Fine arts building', 'MasComm building'];
}
