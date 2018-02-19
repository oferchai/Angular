import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";





@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent  implements OnInit
{
    constructor(private auth:AuthService , private router:Router)
    {

    }

    IsConnected : boolean
    user:string
    password:string

    ngOnInit()
    {
        this.IsConnected = this.auth.isConnected();
    }

    OnSubmit() {
        console.log("user:"+this.user + " password:"+this.password )
        this.auth.Login(this.user , this.password);
        if (this.auth.isConnected())
            this.router.navigate(['/product_multi_view','0']);
    }

    async OnSubmitEx(form) 
    {
        console.log("form:"+form )
        await this.auth.Login(this.user , this.password);        
        
        console.log("finish await");

        this.IsConnected = this.auth.isConnected();

        console.log("Login form: User is connected:" + this.IsConnected);        
        if(this.IsConnected)
            this.router.navigate(['/product_multi_view','0']);
    }
  
    continueAsLoggedUser()
    {
        if(this.IsConnected)
            this.router.navigate(['/product_multi_view','0']);
        
    }
}