import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  booklist: string[] = ['Ang aking kaibigan by in/they/sa/ra'];



  addBooklist(booklistInput: HTMLInputElement){
    const booklist =booklistInput.value.trim();
  
    if (booklist) {
      this.booklist.push(booklist);
      booklistInput.value = ''; 
    }
  }
  
   removeBooklist(index: number){
    this.booklist.splice(index, 1);
   }
}
