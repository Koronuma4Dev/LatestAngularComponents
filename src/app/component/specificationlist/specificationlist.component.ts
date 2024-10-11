import { Component } from '@angular/core';

@Component({
  selector: 'app-specificationlist',
  templateUrl: './specificationlist.component.html',
  styleUrl: './specificationlist.component.css'
})
export class SpecificationlistComponent {
  specList: string[] = [
    'CPU: Intel Core i7',
    'RAM: 16GB',
    'Storage: 512GB SSD',
    'GPU: NVIDIA GeForce GTX 1660 Ti',
    'Display: 15.6" FHD'
  ];
}
