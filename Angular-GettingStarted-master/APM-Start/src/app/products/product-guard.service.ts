import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()


export class ProductGuardService implements CanActivate{

  constructor(private _router:Router) { }

  canActivate(rout:ActivatedRouteSnapshot):boolean {
    let id = +rout.url[1].path;
    if(isNaN(id) || id<1)
    {
      alert("Invalid product id");
      this._router.navigate(['/products']);
      return false;
    }

    return true;

  } 

}
