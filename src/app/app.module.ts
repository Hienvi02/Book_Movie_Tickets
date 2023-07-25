import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MasterPageComponent } from './Pages/Master-page/master-page/master-page.component';
import { LoginComponent } from './Pages/Master-page/master-page/login/login.component';
import { RouterModule } from '@angular/router';
import { TrangchuComponent } from './Pages/Master-page/master-page/login/trangchu/trangchu.component';
import { ShowtimeComponent } from './Pages/Master-page/master-page/login/showtime/showtime.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    LoginComponent,
    TrangchuComponent,
    ShowtimeComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MegaMenuModule,
    RouterModule, 
    CardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
