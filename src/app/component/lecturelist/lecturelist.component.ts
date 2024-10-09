import { Component, input } from '@angular/core';

@Component({
  selector: 'app-lecturelist',
  templateUrl: './lecturelist.component.html',
  styleUrl: './lecturelist.component.css'
})
export class LecturelistComponent {

  lecturelist:string[]=['Bootsrap library', 'C++ for beginners', 'Phyton Fundamentals', 'WWW for beginners'];

  addLecture(lectureInput: HTMLInputElement){
    const lecture = lectureInput.value.trim();

    if(lecture){
      this.lecturelist.push(lecture);
      lectureInput.value='';

    }
  }
removeLecture(index: number){
  this.lecturelist.splice(index,1);
}

}
