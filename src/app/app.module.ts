import { ToastModule } from 'primeng/toast';
import { DataServiceService } from 'src/app/service/data-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MasterPageComponent } from './Pages/Master-page/master-page/master-page.component';
import { LoginComponent } from './Pages/Master-page/master-page/login/login.component';
import { RouterModule } from '@angular/router';
import { TrangchuComponent } from './Pages/Master-page/master-page/login/Addmin/trangchu/trangchu.component';
import { ShowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/showtime.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './Pages/Master-page/master-page/login/Addmin/movie/movie.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CrudMovieComponent } from './Pages/Master-page/master-page/login/Addmin/movie/crud-movie/crud-movie.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { EmployeeComponent } from './Pages/Master-page/master-page/login/Addmin/employee/employee.component';
import { CrudemployeeComponent } from './Pages/Master-page/master-page/login/Addmin/employee/crudemployee/crudemployee.component';
import { OrdermovieComponent } from './Pages/Master-page/master-page/login/User/ordermovie/ordermovie.component';
import { CrudshowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/crudshowtime/crudshowtime.component';
import { CustomerComponent } from './Pages/Master-page/master-page/login/Addmin/customer/customer.component';
import { CrudCustomerComponent } from './Pages/Master-page/master-page/login/Addmin/customer/crud-customer/crud-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ProplemComponent } from './Pages/Master-page/master-page/login/Addmin/proplem/proplem.component';
import { FileUploadModule } from 'primeng/fileupload';
import { UpdatecusComponent } from './Pages/Master-page/master-page/login/Addmin/customer/updatecus/updatecus.component';
import { UpdateEmpComponent } from './Pages/Master-page/master-page/login/Addmin/employee/update-emp/update-emp.component';
import { UpdateMovieComponent } from './Pages/Master-page/master-page/login/Addmin/movie/update-movie/update-movie.component';
import { ScreenOrderComponent } from './Pages/Master-page/master-page/login/User/screen-order/screen-order.component';
import { BillComponent } from './Pages/Master-page/master-page/login/User/screen-order/bill/bill.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PipePipe } from 'src/app/pipe/pipe.pipe';
import { UpdateProlemComponent } from './Pages/Master-page/master-page/login/Addmin/proplem/update-prolem/update-prolem.component';
import { AddProplemComponent } from './Pages/Master-page/master-page/login/Addmin/proplem/add-proplem/add-proplem.component';
import { CalendarModule } from 'primeng/calendar';



import { TableModule } from 'primeng/table';
import { DeleteCustomerComponent } from './Pages/Master-page/master-page/login/Addmin/customer/delete-customer/delete-customer.component';
import { DeteleEmployeeComponent } from './Pages/Master-page/master-page/login/Addmin/employee/detele-employee/detele-employee.component';
import { UpdateShowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/update-showtime/update-showtime.component';
import { DeleteShowtimeComponent } from './Pages/Master-page/master-page/login/Addmin/showtime/delete-showtime/delete-showtime.component';
import { DeleteMovieComponent } from './Pages/Master-page/master-page/login/Addmin/movie/delete-movie/delete-movie.component';
import { DeleteProplemComponent } from './Pages/Master-page/master-page/login/Addmin/proplem/delete-proplem/delete-proplem.component';
import { PayMovieComponent } from './Pages/Master-page/master-page/login/User/screen-order/pay-movie/pay-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    LoginComponent,
    TrangchuComponent,
    ShowtimeComponent,
    MovieComponent,
    CrudMovieComponent,
    EmployeeComponent,
    CrudemployeeComponent,
    OrdermovieComponent,
    CrudshowtimeComponent,
    CustomerComponent,
    CrudCustomerComponent,
    ProplemComponent,
    UpdatecusComponent,
    UpdateEmpComponent,
    UpdateMovieComponent,
    ScreenOrderComponent,
    BillComponent,
    PipePipe,
    UpdateProlemComponent,
    AddProplemComponent,
   
    DeleteCustomerComponent,
    DeteleEmployeeComponent,
    UpdateShowtimeComponent,
    DeleteShowtimeComponent,
    DeleteMovieComponent,
    DeleteProplemComponent,
    PayMovieComponent,
    
  ],
  imports: [
    BrowserModule,
    TableModule,
    AppRoutingModule,
    ButtonModule,
    MegaMenuModule,
    RouterModule, 
    CardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    NgxMaterialTimepickerModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ToastModule,
    CalendarModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
