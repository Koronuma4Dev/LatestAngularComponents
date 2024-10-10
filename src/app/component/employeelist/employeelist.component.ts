import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent {
  employeeList: string[] = ['John Doe', 'Jane Smith', 'Emily Davis'];

  addEmployee(employee: string) {
    if (employee.trim()) {
      this.employeeList.push(employee);
    }
  }

  removeEmployee(index: number) {
    this.employeeList.splice(index, 1);
  }
}
