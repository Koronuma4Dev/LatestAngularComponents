import { Component } from '@angular/core';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {
  movieList: string[] = ['Longlegs', 'The Substance', 'Interstellar','Inside out 2' ,'Deadpool'];

 
  addMovie(movieInput: HTMLInputElement) {
    const movie = movieInput.value.trim();
    if (movie) {
      this.movieList.push(movie);
      movieInput.value = ''; 
    }
}
removeMovie(index: number){
  this.movieList.splice(index, 1)
}
}
