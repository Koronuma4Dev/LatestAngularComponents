import { Component } from '@angular/core';

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrl: './subjectlist.component.css'
})
export class SubjectlistComponent {
  subjectlist:string []=['SIA2', 'Capstone 1', 'IAS', 'RECESS'];


  addSubject(subjectInput: HTMLInputElement){
    const subject = subjectInput.value.trim();

    if(subject){
      this.subjectlist.push(subject);
      subjectInput.value='';
    }
  }
  removeSubject(index: number){
    this.subjectlist.splice(index, 1)
  }
}
