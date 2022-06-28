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
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.findAll().subscribe(data => {
      this.employees = data;
    })
  }

}
