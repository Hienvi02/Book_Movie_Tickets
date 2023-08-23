import { ReactiveFormsModule } from '@angular/forms';
import { DataServiceService } from './../../../../../../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
})
export class TrangchuComponent implements OnInit {
  constructor(
    private DataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
  }

  ismenupi: boolean = false;
  currentPath =""
 
  logout() {
    // After successful logout, navigate to the login page or any other desired page
    this.router.navigate(['/']);
    console.log();
  }

  getStatusForItem(path: string) {
    return path == localStorage.getItem("path")
  }
  navigatorUrl(path:string){
    localStorage.setItem("path",path)
    this.router.navigate(['/home',path]) // viết lại phần routing :https://stackoverflow.com/questions/34323480/in-angular-how-do-you-determine-the-active-route
  
  }

  //sửa lại sài ngfor
  itemHeader= [  
    {
      path: "showtime",
      content: "QUẢN LÝ SUẤT CHIẾU"
    },
    {
      path: "employee",
      content: "QUẢN LÝ NHÂN SỰ"
    },
    {
      path: "customer",
      content: "QUẢN LÝ KHÁCH HÀNG"
    },
    {
      path: "movie",
      content: "QUẢN LÝ PHIM"
    },
    // {
    //   path: "proplem",
    //   content: "SỰ CỐ"
    // },
    {
      path: "/",
      content: "THOÁT"
    },
  ]
}