import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employees: string[] = [];

  addEmployee(employeeName: string): void {
      if (employeeName.trim()) {
          this.employees.push(employeeName.trim());
      }
  }

  removeEmployee(index: number): void {
      this.employees.splice(index, 1);
  }
}
