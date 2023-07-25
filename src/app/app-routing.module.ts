import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Master-page/master-page/login/login.component';
import { TrangchuComponent } from './Pages/Master-page/master-page/login/trangchu/trangchu.component';
import { ShowtimeComponent } from './Pages/Master-page/master-page/login/showtime/showtime.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'trangchu', component: TrangchuComponent }, 
  { path: 'showtime', component: ShowtimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
