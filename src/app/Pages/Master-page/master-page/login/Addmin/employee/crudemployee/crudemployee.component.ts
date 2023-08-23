import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-crudemployee',
  templateUrl: './crudemployee.component.html',
  styleUrls: ['./crudemployee.component.css']
})
export class CrudemployeeComponent implements OnInit {
  newdataemp: any={
    "id": 0,
    "name": "",
    "phone": "",
    "password": "",
    "address": "",
    "dateOfBirth": "",
    "userName": "",
    "roles": [
      {
        "id": 2,
        "name": "Manager"
      }
    ]
  }
  
  hide = true;
  empform!:FormGroup;
  
  
  constructor(private _fb:FormBuilder,
    private addempService:DataServiceService,
    private dialogref:MatDialogRef<CrudemployeeComponent>
    ){}
  ngOnInit(): void {
    this.empform = this._fb.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
      address:['',Validators.required],
      dateOfBirth:['',Validators.required],
      userName:['',Validators.required],
    })
   
  }
//   addemployee(dataemp: any){
//     console.log(dataemp)
//     dataemp.roles =  [
//   {
//     "id": 2,
//     "name": "Manager"
//   }
// ] 
//   }
  ///
  addemployee(data: any) {
    this.addempService.employeeAdd(data).subscribe({
      next:(value)=> {
        this.addempService.createUserSuccess.next(true)
        this.dialogref.close(CrudemployeeComponent);
        alert('Đã Thêm Thành Công');

      },
      error:()=>{
        this.addempService.createUserSuccess.next(true)
        this.dialogref.close(CrudemployeeComponent);
        alert('Đã Thêm Thành Công');
      },
      complete() {
      },
    });
    
}
cancel() {
  this.dialogref.close(CrudemployeeComponent);
}
}
