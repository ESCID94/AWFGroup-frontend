import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../../model/employee/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrls: string;

  constructor(private http: HttpClient) {
    this.employeeUrls = 'http://localhost:8080/AWF-app/v1/employees';
   }

   public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrls);
  }

  public save(employee: Employee) {
    return this.http.post<Employee>(this.employeeUrls, employee);
  }
}
