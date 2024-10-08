import { Component } from '@angular/core';
interface CarModel {
  id: number;
  name: string;
  year: number;
}

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {

  carModels: CarModel[] = [];

  addCarModel(carModelName: HTMLInputElement, carModelYear: HTMLInputElement) {
    const newCarModel: CarModel = {
      id: this.carModels.length + 1,
      name: carModelName.value,
      year: +carModelYear.value
    };
    this.carModels.push(newCarModel);
  }

  removeCarModel(carModelId: number) {
    this.carModels = this.carModels.filter(carModel => carModel.id !== carModelId);
  }
}
