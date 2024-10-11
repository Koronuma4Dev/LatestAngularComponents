
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent {
  accessoryList: string[] = [
    'Headphones',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Laptop Stand'
  
  ]


}