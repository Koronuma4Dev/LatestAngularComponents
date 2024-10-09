import { Component } from '@angular/core';

@Component({
  selector: 'app-classroomlist',
  templateUrl: './classroomlist.component.html',
  styleUrl: './classroomlist.component.css'
})
export class ClassroomlistComponent {
  classroomlist: string[]=['Cureg, Marlyn(4A)', 'Parico, Rico(4A)', 'Noleal, Jacqueline (4A)', 'Hev Abi(4A)'];

  addClassroom(classroomInput: HTMLInputElement){
    const classroom = classroomInput.value.trim();

    if(classroom){
      this.classroomlist.push(classroom);
      classroomInput.value='';
    }
  }
  removeClassroom(index: number){
    this.classroomlist.splice(index, 1);
  }
}
