import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from 'src/app/domain/service/employee-service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService) {
      this.employee = new Employee();
     }

  onSubmit(){
    this.employeeService.save(this.employee).subscribe(result => this.goToEmployeeList());
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }


}
