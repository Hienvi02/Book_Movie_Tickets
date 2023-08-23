import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-add-proplem',
  templateUrl: './add-proplem.component.html',
  styleUrls: ['./add-proplem.component.css']
})
export class AddProplemComponent {
  newdatapb : any ={
    "id": 2,
    "code": "",
    "status": ""
  }
  empform!:FormGroup;
  constructor(private _fb:FormBuilder,private addProplemService:DataServiceService,private dialog:MatDialogRef<AddProplemComponent>){}
  ngOnInit(): void {
    this.empform = this._fb.group({
      code:['',Validators.required],
      status:['',Validators.required],
      
    })
    // this.getRoom()
  }
  addProplem(data: any){
    this.addProplemService.RoomStatusadd(data).subscribe({
      next:(value) => {
        this.addProplemService.createUserSuccess.next(true)
        this.dialog.close(AddProplemComponent);
        alert('Đã Thêm Thành Công');
      },
      error:()=>{
        this.addProplemService.createUserSuccess.next(true)
        this.dialog.close(AddProplemComponent);
        alert('Đã Thêm Thành Công');
      },
      complete() {
      },
    })
  }
  cancel(){
    this.dialog.close(AddProplemComponent)
  }
  
  // getRoom(){ 
  //   this.addProplemService.RoomStatus(0,999).subscribe((res)=>{
  //     this.newdatapb = res;
  //   })
  // } 
}
