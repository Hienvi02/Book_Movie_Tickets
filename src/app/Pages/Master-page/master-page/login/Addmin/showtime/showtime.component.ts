import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CrudshowtimeComponent } from './crudshowtime/crudshowtime.component';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Table } from 'primeng/table';
import { UpdateShowtimeComponent } from './update-showtime/update-showtime.component';
import { DeleteShowtimeComponent } from './delete-showtime/delete-showtime.component';
import * as moment from 'moment';
@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css'],

})

export class ShowtimeComponent {
  newdata:any={}
  dt!: Table; 
  constructor(private _dialog:MatDialog, private dataSevice:DataServiceService){
  }
  products:any[]=[];
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'filmName', header: 'Tên Phim' },
    { field: 'duration', header: 'Thời Lượng' },
    { field: 'roomName', header: 'Rạp' },
    { field: 'time', header: 'Giờ Chiếu' },
    
  ];
  ngOnInit():void{
    this.dataSevice.createUserSuccess.subscribe((value: any) => {
      console.log(value);
      if (value) {
        this.dataShowtime();
      }
    });
    this.dataShowtime()
   }
   dataShowtime() {
    this.dataSevice.getShowtime(0,99).subscribe((res) => {
      this.products = res.data;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          time: moment(item.time).format('LT'),
        };
        
      });
      console.log(this.products);
      
    });
  }
  filterTable(table: Table, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
  openAddEmpoyee(){
    this._dialog.open(CrudshowtimeComponent)
  }
  openUpdateShowtime(Showtime:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data= Showtime ;
    this._dialog.open(UpdateShowtimeComponent,dialogConfig)
  }
  deleteShowtime(data:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this._dialog.open(DeleteShowtimeComponent,dialogConfig)
  }
 
}