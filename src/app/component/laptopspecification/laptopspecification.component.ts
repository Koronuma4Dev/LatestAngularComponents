import { Component } from '@angular/core';

@Component({
  selector: 'app-laptopspecification',
  templateUrl: './laptopspecification.component.html',
  styleUrl: './laptopspecification.component.css'
})
export class LaptopspecificationComponent {
  laptops: any[] = [
    {
      brand: 'Apple',
      model: 'MacBook Pro 13',
      price: 1299,
      ram: '8GB',
      storage: '256GB SSD'
    },
    {
      brand: 'Lenovo',
      model: 'ThinkPad X1 Carbon',
      price: 1699,
      ram: '16GB',
      storage: '512GB SSD'
    }
  ];

  addLaptop() {
    const newLaptop = {
      brand: '',
      model: '',
      price: 0,
      ram: '',
      storage: ''
    };

    this.laptops.push(newLaptop);
  }

  removeLaptop(index: number) {
    this.laptops.splice(index, 1);
  }

}
