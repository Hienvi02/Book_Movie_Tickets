import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

interface customer{
  id:Number,
  name: string,
  phone:string,
  address: string,
  dateOfBirth: any
}


@Component({
  selector: 'app-updatecus',
  templateUrl: './updatecus.component.html',
  styleUrls: ['./updatecus.component.css']
})
export class UpdatecusComponent implements OnInit{
dataid !: number

customer: customer
constructor(public dialogRef: MatDialogRef<UpdatecusComponent>,
  @Inject(MAT_DIALOG_DATA) data:customer
  ){
    this.customer = data
  }

  saveState(){
    this.cancel()
    console.log(this.customer)
    alert('Đã Chỉnh Sửa Thành Công');
  }
  cancel(){
    this.dialogRef.close(UpdatecusComponent)
  }
 ngOnInit(): void {
}
}
