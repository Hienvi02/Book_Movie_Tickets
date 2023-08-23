import { Router } from '@angular/router';

import { Component, OnInit,  Inject, Output, EventEmitter, Input } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/service/data-service.service';


@Component({
  selector: 'app-ordermovie',
  templateUrl: './ordermovie.component.html',
  styleUrls: ['./ordermovie.component.css']
})
export class OrdermovieComponent implements OnInit {
 
  ngOnInit(): void {
    this.getdatamovie()
  }

  constructor(private _dialog:MatDialog, private dataService:DataServiceService,private router:Router,
   ){}
  dataArr : any =[] 
  getdatamovie(){
    this.dataService .getShowtime(0,9999).subscribe((res)=>{
      this.dataArr=res.data
    })
  }
  logout() {
    // After successful logout, navigate to the login page or any other desired page
    this.router.navigate(['/']);
    console.log()
  }
// truyền dữ liệu sang screen-order
  datamovie : string=''
  @Output() newdatamovie : EventEmitter<string>= new EventEmitter();
  clickScreen(item:any){
    // console.log(item);
    
    this.router.navigate(['/screen-order'],{queryParams:{
      id:item
    }})
    this.sendata()
    console.log( this.datamovie)
  }
  sendata(){
    this.newdatamovie.emit(this.datamovie)
  }
}

