import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from './employee.model';

// use command ng g s employee to create a service
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees!: Employee[];
  readonly baseURL = "http://localhost:3000/employees";

  constructor(private http: HttpClient) { 
    this.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null,
      age: null
    }
  }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL,emp);
  }

  putEmployee(emp: Employee) {
    const url = `${this.baseURL}/${emp._id}`;
    return this.http.put(url,emp);
  }

  deleteEmployee(emp: Employee) {
    const url = `${this.baseURL}/${emp._id}`;
    return this.http.delete(url);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

}
