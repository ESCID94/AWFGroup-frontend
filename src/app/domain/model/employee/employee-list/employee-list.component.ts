import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/domain/service/employee-service/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  employee: Employee;
  isShown: boolean = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    })
  }

  delete(employee: Employee) {
    this.employeeService.delete(employee).subscribe(data =>
      console.log(data), error => console.log(error));
    window.location.reload();
  }

  save(employee: Employee) {
    this.employeeService.save(employee).subscribe(data =>
      console.log(data), error => console.log(error));

    window.location.reload();
  }

  toggleShow() {

    this.isShown = !this.isShown;

  }

}
