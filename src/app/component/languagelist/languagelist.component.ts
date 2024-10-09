import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css'
})
export class LanguagelistComponent {
  languagelist:string[]=['C#', "Javascript", 'C++', 'Phyton'];

  addLanguage(languageInput: HTMLInputElement){
    const language = languageInput.value.trim();
    if (language){
      this.languagelist.push(language);
      languageInput.value='';
    }
  }
  removeLanguage(index: number){
    this.languagelist.splice(index, 1);
  }
}
