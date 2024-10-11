import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specs',
  templateUrl: './laptop-specs.component.html',
  styleUrl: './laptop-specs.component.css'
})
export class LaptopSpecsComponent {
  specList: string[] = ['CPU: Intel Core i7', 'RAM: 16GB', 'Storage: 512GB SSD', 'GPU: NVIDIA GeForce GTX 1660 Ti', 'Display: 15.6" FHD'];

  addSpec(specInput: HTMLInputElement) {
    const spec = specInput.value.trim();
    if (spec) {
      this.specList.push(spec);
      specInput.value = ''; 
    }
  }

  removeSpec(index: number) {
    this.specList.splice(index, 1)
  }
}