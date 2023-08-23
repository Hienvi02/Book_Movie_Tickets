import { DataServiceService } from 'src/app/service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrudemployeeComponent } from './crudemployee/crudemployee.component';
import { DialogConfig } from '@angular/cdk/dialog';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import * as moment from 'moment';
import { Table } from 'primeng/table';
import { DeleteCustomerComponent } from '../customer/delete-customer/delete-customer.component';
import { DeteleEmployeeComponent } from './detele-employee/detele-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  
  showSuccessMessage: boolean = false;
  newdatanv : any ={
    
  }
  
  constructor(private _dialog:MatDialog, private dataService:DataServiceService){}
  ngOnInit():void{
    this.dataService.createUserSuccess.subscribe((value) => {
      console.log(value);
      if (value) {
        this.dataemployee();
      }
    });
    this.dataemployee()
   }
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên' },
    { field: 'phone', header: 'Số điện thoại' },
    { field: 'address', header: 'Địa chỉ' },
    { field: 'userName', header: 'Tên Người Dùng' },
    { field: 'dateOfBirth', header: 'Ngày sinh' },
    
  ];

  products: any[] = [];
  dataemployee() {
    this.dataService.employeeService(0, 9999).subscribe((res) => {
      this.products = res.data;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          dateOfBirth: moment(item.dateOfBirth).format('l'),
        };
      });
    });
  }
  filterTable(table: Table, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
  openAddEmpoyee(){
    this._dialog.open(CrudemployeeComponent);
  }
  openUpdateEmp(Employee:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data= Employee;
    this._dialog.open(UpdateEmpComponent,dialogConfig)
  }

  deletemp(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this._dialog.open(DeteleEmployeeComponent,dialogConfig);
  }
  }
  





