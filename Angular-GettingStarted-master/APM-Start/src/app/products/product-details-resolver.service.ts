import {  CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from "@angular/core"
import { ProductService } from "./product.service";
import { IProduct } from "./Product";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProductDetailsResolver implements Resolve<any> { 
  constructor(private productService :ProductService ) {

  }

  id:number;

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<IProduct>
  {
    let id = +route.paramMap.get('id');
    
    return this.productService.getProduct(id);
  }

}