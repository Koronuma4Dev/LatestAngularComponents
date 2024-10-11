import { Component } from '@angular/core';


@Component({
  selector: 'app-accessorylist',
  templateUrl: './accessorylist.component.html',
  styleUrl: './accessorylist.component.css'
})
export class AccessorylistComponent {
  accessories: string[] = [
    'Headphones',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Laptop Stand'
  ];
}
