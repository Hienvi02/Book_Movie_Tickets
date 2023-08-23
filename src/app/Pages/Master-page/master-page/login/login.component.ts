import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Router } from '@angular/router';
import { Roles } from 'src/app/Pages/Enums/Roles';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    addmin: any={
      userName :"",
      password: ""
    }
    roles = Roles
    constructor(private dataService : DataServiceService, private router:Router){
    }

    getRole(listRole:any[]){
      localStorage.setItem("role",listRole[0].name);

        if(listRole[0].name == this.roles.ADMIN){

          return this.roles.ADMIN
        }
          return this.roles.USER
    }


    onLogin(){
      const dto = {
        "userName": this.addmin.userName,
        "password": this.addmin.password
      }
     this.dataService.loginService(dto).subscribe({
      next:(value:any)=> {
        console.log("value",value) 
        localStorage.setItem("userId",value.userId)
        localStorage.setItem("path","showtime")
        if(this.getRole(value.roles) == this.roles.ADMIN){
          ///admin
         this.router.navigate(["/home/showtime"])
        }else {
          //user
          this.router.navigate(["/ordermovie"])
        }
      
      },error(err) {
        console.log(err)
      },
     })
    }
    hide = true;  
}