import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { UpdateProlemComponent } from './update-prolem/update-prolem.component';
import { DataServiceService } from 'src/app/service/data-service.service';
import { AddProplemComponent } from './add-proplem/add-proplem.component';
import { Table } from 'primeng/table';
import * as moment from 'moment';
import { DeleteProplemComponent } from './delete-proplem/delete-proplem.component';

@Component({
  selector: 'app-proplem',
  templateUrl: './proplem.component.html',
  styleUrls: ['./proplem.component.css']
})
export class ProplemComponent {
  id ?: Number
  p!:number
  constructor(private _dialog:MatDialog, private dataService:DataServiceService){}
  showSuccessMessage: boolean = false;
  cols=[
    { field: 'id', header: 'ID' },
    { field: 'code', header: 'Mã Trạng Thái' },
    { field: 'status', header: 'Trạng Thái' },
  ]
  products:any []=[]
  ngOnInit():void{
    this.dataService.createUserSuccess.subscribe((value) => {
      console.log(value);
      if (value) {
        this.dataProplem()
      }
    });
    this.dataProplem()
   }
  dataProplem() {
    this.dataService.RoomStatus(0, 9999).subscribe((res) => {
      this.products = res.data;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          
        };
      });
    });
  }
  filterTable(table: Table, event: any){
    table.filterGlobal(event.target.value, 'contains');
  }
  openAddEmpoyee(){
    this._dialog.open(AddProplemComponent);
  }
  UpdateProplem(proplem:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data= proplem;
    this._dialog.open(UpdateProlemComponent,dialogConfig)
  }
  deleteProplem(data:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this._dialog.open(DeleteProplemComponent,dialogConfig);
  }

}
