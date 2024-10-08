import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrl: './citylist.component.css'
})
export class CitylistComponent {
  cityList: string[] = ['New york cubao', 'Makati city', 'Quezon city'];

  addCity(city: string) {
    if (city) {
      this.cityList.push(city);
    }
  }

  removeCity(index: number) {
    this.cityList.splice(index, 1);
  }
}
