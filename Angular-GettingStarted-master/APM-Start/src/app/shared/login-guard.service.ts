import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class LoginGuardService implements CanActivate{

  constructor(private _authSer:AuthService) { }

  canActivate(rout:ActivatedRouteSnapshot):boolean {
    if(this._authSer.isConnected() )
        return true;
    return false;

  } 

}
