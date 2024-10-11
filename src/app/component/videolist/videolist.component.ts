import { Component } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrl: './videolist.component.css'
})
export class VideolistComponent {
  videolist:string[]=['OOP in c#', 'Basics in learning git and github', 'Angular for beginners', ];
}
