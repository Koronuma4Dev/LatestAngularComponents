import { Component } from '@angular/core';

@Component({
  selector: 'app-softwarelsit',
  templateUrl: './softwarelsit.component.html',
  styleUrl: './softwarelsit.component.css'
})
export class SoftwarelsitComponent {
  installedSoftware: string[] = [
    'Google Chrome',
    'Microsoft Office',
    'Adobe Reader'
  ];

  addSoftware(newSoftware: string) {
    if (newSoftware) {
      this.installedSoftware.push(newSoftware);
    }
  }

  removeSoftware(software: string) {
    this.installedSoftware = this.installedSoftware.filter(item => item !== software);
  }
}
