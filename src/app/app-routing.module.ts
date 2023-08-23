import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Master-page/master-page/login/login.component';
import { TrangchuComponent } from './Pages/Master-page/master-page/login/Addmin/trangchu/trangchu.component';
import { ShowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/showtime.component';
import { MovieComponent } from './Pages/Master-page/master-page/login/Addmin/movie/movie.component';
import { EmployeeComponent } from './Pages/Master-page/master-page/login/Addmin/employee/employee.component';
import { OrdermovieComponent } from './Pages/Master-page/master-page/login/User/ordermovie/ordermovie.component';
import { CustomerComponent } from './Pages/Master-page/master-page/login/Addmin/customer/customer.component';
import { ProplemComponent } from './Pages/Master-page/master-page/login/Addmin/proplem/proplem.component';
import { UpdatecusComponent } from './Pages/Master-page/master-page/login/Addmin/customer/updatecus/updatecus.component';
import { ScreenOrderComponent } from './Pages/Master-page/master-page/login/User/screen-order/screen-order.component';
import { BillComponent } from './Pages/Master-page/master-page/login/User/screen-order/bill/bill.component';
import { CrudCustomerComponent } from './Pages/Master-page/master-page/login/Addmin/customer/crud-customer/crud-customer.component';
import { CrudshowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/crudshowtime/crudshowtime.component';
import { CrudemployeeComponent } from './Pages/Master-page/master-page/login/Addmin/employee/crudemployee/crudemployee.component';
import { PayMovieComponent } from './Pages/Master-page/master-page/login/User/screen-order/pay-movie/pay-movie.component';



const routes: Routes = [
  {      
    path: '', 
    component: LoginComponent, 
  },
  { 
    path: 'home', component: TrangchuComponent,
        children: [
          { 
            path: 'showtime', component: ShowtimeComponent},
          { path: 'movie', component: MovieComponent },
          { path: 'employee', component: EmployeeComponent },
          { path: 'customer', component: CustomerComponent },
          { path: 'proplem', component: ProplemComponent}
        ]
  } ,
  {path: 'ordermovie', component: OrdermovieComponent},
  {path: 'screen-order', component: ScreenOrderComponent} ,
  {path:'paymovie',component: PayMovieComponent},
  { path: 'bill', component: BillComponent }

    
  
      ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
