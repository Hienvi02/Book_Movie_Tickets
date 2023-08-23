import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';


interface employee {
  name: Number,
  phone: string,
  password: string,
  address: string,
  dateOfBirth: string,
  userName:string,
  // "roles": [
  //   {
  //     "id": 2,
  //     "name": "Manager"
  //   }
  // ]
}

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})

export class UpdateEmpComponent implements OnInit{
  ngOnInit(): void {}
  dataid!:Number
  hide = true;
  employee : employee
  constructor (public MatDialogRef:MatDialogRef<UpdateEmpComponent>,
    @Inject(MAT_DIALOG_DATA) data:employee
    ){
    this.employee= data
  }
  saveState(){
    console.log(this.employee)
    this.cancel()
    alert('Đã Cập Nhập Thành Công')
  }
  cancel(){
    this.MatDialogRef.close(UpdateEmpComponent)
  }
}
