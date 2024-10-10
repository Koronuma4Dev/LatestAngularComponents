import { Component } from '@angular/core';

@Component({
  selector: 'app-computerhardware',
  templateUrl: './computerhardware.component.html',
  styleUrl: './computerhardware.component.css'
})
export class ComputerhardwareComponent {
  hardwareList: string[] = ['RAM', 'Motherboard', 'GUI', 'Processors', 'Sound card'];

  addHardware(hardware: string) {
    if (hardware.trim()) {
      this.hardwareList.push(hardware);
    }
  }

  removeHardware(index: number) {
    this.hardwareList.splice(index, 1);
  }
}
