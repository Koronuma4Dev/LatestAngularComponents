import { Component } from '@angular/core';

@Component({
  selector: 'app-furniturelist',
  templateUrl: './furniturelist.component.html',
  styleUrl: './furniturelist.component.css'
})
export class FurniturelistComponent {
  furniturelist:string[]=['Lampshade', 'Sofa', 'Study table', 'Cabinet', 'Popmart collection'];
}
