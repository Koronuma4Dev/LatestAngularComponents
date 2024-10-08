import { Component } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrl: './courselist.component.css'
})
export class CourselistComponent {


  courseList: string[] = ['BSIT', 'BSHM', 'BSA'];

  addCourse(courseInput: HTMLInputElement): void {
    const course = courseInput.value.trim();
    if (course) {
      this.courseList.push(course);
      courseInput.value = '';
    }
  }

  removeCourse(index: number): void {
    this.courseList.splice(index, 1);
  }
}
