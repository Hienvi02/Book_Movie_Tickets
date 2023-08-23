import { DialogConfig } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CrudMovieComponent } from './crud-movie/crud-movie.component';
import { DataServiceService } from 'src/app/service/data-service.service';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import * as moment from 'moment';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  p:any
  
  constructor(private _dialog:MatDialog, private dataService:DataServiceService){
    
  }  
  showSuccessMessage: boolean = false;
  ngOnInit():void{ 
    this.dataService.createUserSuccess.subscribe((value) => {
      console.log(value);
      if (value) {
        this.datamovie()
      }
    });
   
    this.datamovie()
  }
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên Phim' },
    { field: 'typeName', header: 'Thể Loại' },
    { field: 'director', header: 'Đạo Diễn' },
    { field: 'time', header: 'Thời Lượng' },
    { field: 'openingDay', header: 'Khởi Chiếu' },
    
  ];
  products: any[] = [];
  datamovie(){
    this.dataService.movieService(0, 9999).subscribe((res) => {
      this.products = res.data;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          openingDay: moment(item.openingDay).format('l'),
        };
      });
    });
  }
  filterTable(table: Table, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
  openaddmovie(){
    this._dialog.open(CrudMovieComponent);
  }
  deleteMovie(data:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this._dialog.open(DeleteMovieComponent,dialogConfig);
  }
  openUpdateMovie(movie:any ){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data= movie;
    this._dialog.open(UpdateMovieComponent,dialogconfig)
  }
}
  