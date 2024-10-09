import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {

  gamelist:string [] = ['Roblox', 'Y8 .com', "friv", 'LOL', 'Valorant', 'Sims'];

  addGame(gameInput: HTMLInputElement){
    const game = gameInput.value.trim();
    if (game){
      this.gamelist.push(game);
      gameInput.value='';
    }
  }
  removeGame(index: number){
    this.gamelist.splice(index, 1);
  }
}
