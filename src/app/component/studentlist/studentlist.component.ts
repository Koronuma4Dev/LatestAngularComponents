import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentList: string[] = ['Alice ', 'Cassie', 'Wesly'];

  addStudent(student: string) {
    if (student.trim()) {
      this.studentList.push(student);
    }
  }

  removeStudent(index: number) {
    this.studentList.splice(index, 1);
  }
}
