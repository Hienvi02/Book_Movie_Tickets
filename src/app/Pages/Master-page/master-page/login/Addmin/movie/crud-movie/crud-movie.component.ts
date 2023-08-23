import { MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataServiceService } from 'src/app/service/data-service.service';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-crud-movie',
  templateUrl: './crud-movie.component.html',
  styleUrls: ['./crud-movie.component.css']
})
export class CrudMovieComponent implements OnInit {
 constructor(private _fb:FormBuilder,private addMovieService:DataServiceService, private MatDialogRef:MatDialogRef<CrudMovieComponent>){}
  empform !: FormGroup
  genre: any[]=[]
  // newdatamovie:any={
  //   "id": 0,
  //   "name": "",
  //   "openingDay": "",
  //   "director": "",
  //   "time": "",
  //   "image": "",
  //   "typeId": 0
  // }
  // genre:any={
  //   "typeId":""
  // }

  // genre ?: string[];
  ngOnInit(): void {
    this.empform = this._fb.group({
          // name:['',Validators.required],
          // openingDay:['',Validators.required],
          // director:['',Validators.required],
          // time:['',Validators.required],
          // image:['',Validators.required],
          // typeId:['',Validators.required],

          name: new FormControl(''),
          openingDay: new FormControl(''),
          director: new FormControl(''),
          time: new FormControl(''),
          image: new FormControl(''),
          typeId: new FormControl(''),
          
         })
    this.getGenre()
  }


  addMovie(data: any) {
    this.addMovieService.movieAdd(data).subscribe({
      next:(value)=> {
        this.addMovieService.createUserSuccess.next(true)
        this.MatDialogRef.close(CrudMovieComponent);
        alert('Đã Thêm Thành Công');

      },
      error:()=>{
        this.addMovieService.createUserSuccess.next(true)
        this.MatDialogRef.close(CrudMovieComponent);
        alert('Đã Thêm Thành Công');
      },
      complete() {
      },
    });
  }

  
  onUpload(event: any) {
    // Handle the uploaded file here
    console.log(event.files); // This will contain the uploaded files
  }
  cancel(){
    this.MatDialogRef.close()
  }
  getGenre(){
    this.addMovieService.getGenre(0,99).subscribe((res)=>{
      this.genre=res
      console.log(res)
    })
  }

  // addMovie(data:any){
  //   console.log(data)
  //   data.genre = this.getGenre()
  //   this.addMovieService.movieAdd(data).subscribe(res=>{
  //     console.log()
  //   })
  //   this.cancel()
  //   this.empform.reset();
  //   this.getGenre()
  // }
 
  // getMovie(){
  //   this.addMovieService.movieService(0,999).subscribe((res)=>{
  //     this.newdatamovie =res
  //   })
    
  // }
   }

