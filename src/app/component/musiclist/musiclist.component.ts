import { Component } from '@angular/core';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrl: './musiclist.component.css'
})
export class MusiclistComponent {
  musiclist:string[]=['Show me how by Men I trust', 'Houdini by Eminem', 'Nights by Frank Ocean', 'Self control by Frank Ocean', 'Boheiman rhapsody by Queen'];

  addMusic(musicInput: HTMLInputElement){
    const music = musicInput.value.trim();

    if(music){
      this.musiclist.push(music);
      musicInput.value='';
    }
  }

  removeMusic(index: number){
    this.musiclist.splice(index, 1);
  }
}
