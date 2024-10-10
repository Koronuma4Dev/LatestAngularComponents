import { Component } from '@angular/core';



@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrl: './animallist.component.css'
})
export class AnimallistComponent {

  animallist: string[]=['pygmy Hippopotamus', 'Penguin', 'Whale', 'Ball phyton'];

  addAnimal(animalInput: HTMLInputElement){
const animal = animalInput.value.trimEnd();
if(animal){
  this.animallist.push(animal);
  animalInput.value='';
}
}
removeAnimal(index: number){
  this.animallist.splice(index, 1);
}
}