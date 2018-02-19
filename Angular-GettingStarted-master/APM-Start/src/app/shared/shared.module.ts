import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { IUser } from "./User";
import { ConsoleComponent } from './console.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
        
  ],

  declarations: [
    StarComponent,
    LoginComponent,  
    ConsoleComponent    
  ],

providers:[CookieService ],

  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    LoginComponent,
    ConsoleComponent,          
  ]
})

export class SharedModule { }
