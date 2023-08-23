import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

interface movie{
  name:string,
  openingDay:string,
  director:string ,
  time: string ,
  image: string ,
  typeName: string,
  description: string
}
@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit{
  ngOnInit(): void {
    this.getGenre()
  }
  empform!:any

  newdatamovie:any={
    "id": 0,
    "name": "",
    "openingDay": "",
    "director": "",
    "time": "",
    "image": "",
    "typeName":""
  }
  genre :any []=[]
  movie !: movie
  constructor(public MatDialogRef: MatDialogRef<UpdateMovieComponent>,
    @Inject(MAT_DIALOG_DATA) data:movie,
    private addMovieService:DataServiceService){
      this.movie=data
    }
  onUpload(event: any) {
    // Handle the uploaded file here
    console.log(event.files); // This will contain the uploaded files
  }
  getMovie(){
    this.addMovieService.movieService(0,999).subscribe((res)=>{
      this.newdatamovie =res
    })}
  saveState(){
    console.log(this.movie)
    this.cancel()
  }
  cancel(){
    this.MatDialogRef.close(UpdateMovieComponent)
  }
  getGenre() {
    this.addMovieService.getGenre(0, 99).subscribe((res) => {
      this.genre = res; 
      console.log(res)
    })
  }
}
