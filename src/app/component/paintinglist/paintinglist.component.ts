import { Component } from '@angular/core';

@Component({
  selector: 'app-paintinglist',
  templateUrl: './paintinglist.component.html',
  styleUrl: './paintinglist.component.css'
})
export class PaintinglistComponent {
  paintingList: string[] = [
    'Mona Lisa',
    'Starry Night',
    'The Scream',
    'Guernica',
    'The Last Supper'
  ];
}
