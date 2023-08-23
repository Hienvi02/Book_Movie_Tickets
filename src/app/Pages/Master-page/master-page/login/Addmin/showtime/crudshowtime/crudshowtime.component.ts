import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { BehaviorSubject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-crudshowtime',
  templateUrl: './crudshowtime.component.html',
  styleUrls: ['./crudshowtime.component.css']
})
export class CrudshowtimeComponent {
  date: Date[] | undefined;
  empform !: FormGroup;
  
  createUserSuccess= new BehaviorSubject<boolean>(false)

  constructor(private dialogRef:MatDialogRef<CrudshowtimeComponent>,
    private dataSevice:DataServiceService,
    private _fb:FormBuilder){}
    ngOnInit(): void {
      this.empform = this._fb.group({
        filmId: ['', Validators.required],
        roomId: ['', Validators.required],
        time: ['', Validators.required],
      });
           this.getAllFilm() 
           this.getAllRoom()
    }

  dataOption :any[] = []
  dataRoom:any[]=[]
  addShowtime(data: any) {
    console.log(data)
    this.dataSevice.addShowtime(data).subscribe({
      next:(value)=> {
        this.dataSevice.createUserSuccess.next(true)
        this.dialogRef.close(CrudshowtimeComponent);
        alert('Đã Thêm Thành Công');
      },
      error:()=>{
        this.dataSevice.createUserSuccess.next(true)
        this.dialogRef.close(CrudshowtimeComponent);
        alert('Đã Thêm Thành Công');
      },
      complete() {
      },
    });
  }
  cancel(){
    this.dialogRef.close(CrudshowtimeComponent)
  }
  getAllFilm(){
    this.dataSevice.getAllFilm().subscribe((value:any)=>{
      this.dataOption = value.data;
    })
  }
  getAllRoom(){
    this.dataSevice.getAllRoom().subscribe((value:any)=>{
      this.dataRoom = value.data;
    })
  }
}
  

