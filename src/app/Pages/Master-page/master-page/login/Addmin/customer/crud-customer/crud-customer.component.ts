import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-crud-customer',
  templateUrl: './crud-customer.component.html',
  styleUrls: ['./crud-customer.component.css'],
})
export class CrudCustomerComponent implements OnInit {
  newdatacus: any = {
    id: 1,
    name: '',
    phone: '',
    address: '',
    dateOfBirth: '',
  };
  hide = true;
  empform!: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private addcusService: DataServiceService,
    private dialogref: MatDialogRef<CrudCustomerComponent>
  ) {}
  ngOnInit(): void {
    this.empform = this._fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
    });
          
  }
  addcustomer(data: any) {
    this.addcusService.CustomerAdd(data).subscribe({
      next:(value)=> {
        this.addcusService.createUserSuccess.next(true)
        this.dialogref.close(CrudCustomerComponent);
        alert('Đã Thêm Thành Công');
      },
      error:()=>{
        this.addcusService.createUserSuccess.next(true)
        this.dialogref.close(CrudCustomerComponent);
        alert('Đã Thêm Thành Công');
      },
      complete() {
        
      },
    });
  }
  cancel() {
    this.dialogref.close(CrudCustomerComponent);
  }
}