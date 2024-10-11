import { Component } from '@angular/core';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {
  artistList: string[] = [
    'Leonardo da Vinci',
    'Vincent van Gogh',
    'Pablo Picasso',
    'Michelangelo',
    'Claude Monet'
  ];
}
