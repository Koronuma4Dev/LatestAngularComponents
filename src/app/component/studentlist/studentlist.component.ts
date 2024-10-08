import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.css'
})
export class StudentlistComponent {
  studentlist: Array<{ name: string; section: string; course: string }> = [];

  addStudent(name: string, section: string, course: string) {
    if (name && section && course) {
      this.studentlist.push({ name, section, course });
    }
  }
  
  removeStudent(index: number) {
    this.studentlist.splice(index, 1);
  }
}
