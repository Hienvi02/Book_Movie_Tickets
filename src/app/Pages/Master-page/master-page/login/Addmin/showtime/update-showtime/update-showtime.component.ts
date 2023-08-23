import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

interface ShowTime{
  filmName: Number,
  roomName: string,
  duration: string,
  time: string,
   
}
@Component({
  selector: 'app-update-showtime',
  templateUrl: './update-showtime.component.html',
  styleUrls: ['./update-showtime.component.css']
})
export class UpdateShowtimeComponent  implements OnInit{
  showtime !: ShowTime 
  date: Date[] | undefined;
  constructor(public MatDialogRef:MatDialogRef<UpdateShowtimeComponent>,
    @Inject(MAT_DIALOG_DATA) data:ShowTime){
      this.showtime=data
    }

  ngOnInit(): void {}
  saveState(){
    console.log(this.showtime)
    this.cancel()
    alert('Đã Cập Nhập Thành Công')
  }
  cancel(){
    this.MatDialogRef.close(UpdateShowtimeComponent)
  }
}
