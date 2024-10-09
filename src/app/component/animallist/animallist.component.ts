import { Component } from '@angular/core';

interface Animal {
  id: number;
  name: string;
  size: string;
  breed: string;
  habitat: string;
}

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {
  animals: Animal[] = [];

  addAnimal(animalName: HTMLInputElement, animalSize: HTMLInputElement, animalBreed: HTMLInputElement, animalHabitat: HTMLInputElement) {
    const newAnimal: Animal = {
      id: this.animals.length + 1,
      name: animalName.value,
      size: animalSize.value,
      breed: animalBreed.value,
      habitat: animalHabitat.value
    };
    this.animals.push(newAnimal);
  }

  removeAnimal(animalId: number) {
    this.animals = this.animals.filter(animal => animal.id !== animalId);
  }
}
