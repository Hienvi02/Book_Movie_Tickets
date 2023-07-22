import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Master-page/master-page/login/login.component';
import { TrangchuComponent } from './Pages/Master-page/master-page/login/trangchu/trangchu.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'trangchu', component: TrangchuComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
