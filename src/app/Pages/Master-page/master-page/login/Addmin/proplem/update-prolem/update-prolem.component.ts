import { DialogConfig } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SeatStatus } from 'src/app/Pages/Enums/SeatStatus';

interface RoomStatus{
  code:string,
  status:string,
}
@Component({
  selector: 'app-update-prolem',
  templateUrl: './update-prolem.component.html',
  styleUrls: ['./update-prolem.component.css']
})
export class UpdateProlemComponent {
  RoomStatus :RoomStatus
  constructor(private dialogRef:MatDialogRef<UpdateProlemComponent>,
    @Inject(MAT_DIALOG_DATA) data:RoomStatus,
    ){
     this.RoomStatus=data
  }
  saveState(){
    console.log(this.RoomStatus)
    alert('Đã Cập Nhập Thành công')
    this.cancel()
  }
  cancel(){
     this.dialogRef.close(UpdateProlemComponent)
  }
}
