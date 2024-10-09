import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrl: './toollist.component.css'
})
export class ToollistComponent {

  toollist:string[]=['Drills', 'saw', 'screw driver', 'Hammer'];

  addTool(toolInput: HTMLInputElement){
    const tool = toolInput.value.trim();

    if(tool){
      this.toollist.push(tool);
      toolInput.value='';
    }
  }
  removeTool(index: number){
    this.toollist.splice(index, 1);
  }
}
