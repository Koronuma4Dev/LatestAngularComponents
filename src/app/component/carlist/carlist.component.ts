import { Component } from '@angular/core';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {
  carModelList: string[] = ['Toyota Camry', 'Honda Accord', 'Tesla Model 3', 'Jimny Suzuki' ,'Honda civic seadan'];

  addCarModel(carModel: string) {
    if (carModel.trim()) {
      this.carModelList.push(carModel);
    }
  }

  removeCarModel(index: number) {
    this.carModelList.splice(index, 1);
  }
 
}
