import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from './../shared/employee.service';
import { Employee } from './../shared/employee.model';
declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  modalInstance: any;
  employeeToDelete: any;

  constructor(public employeeService: EmployeeService) { }

  onSubmit(form: NgForm) {
    if(form.value._id === ""){
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.fetchEmployeeList();
        M.toast({html: 'Saved Successfully', classes: 'rounded' });
      });
    }else{
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.fetchEmployeeList();
        M.toast({html: 'Updated Successfully', classes: 'rounded' });
      });
    }
  }

  fetchEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  resetForm(form: NgForm) {
    if(form){
      form.reset();
    }
  }

  onEdit(emp: Employee) {
    const employee = {...emp};
    this.employeeService.selectedEmployee = employee;
  }

  triggerDetelePopup(emp: Employee){
   this.employeeToDelete = emp;
   this.modalInstance.open();
  }

  onDelete() {
    this.modalInstance.close();
    this.employeeService.deleteEmployee(this.employeeToDelete).subscribe((res) => {
      this.employeeToDelete = null;
      this.fetchEmployeeList();
      M.toast({html: 'Deleted Successfully', classes: 'rounded' });
    });
  }

  ngOnInit(): void {
    this.fetchEmployeeList();
  }

  ngAfterViewInit() {
    var elems = document.querySelector('.modal');
    this.modalInstance = M.Modal.init(elems);
  }

}
