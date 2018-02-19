import { Injectable } from "@angular/core";
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { HttpHeaders, HttpParams } from '@angular/common/http';

import { IProduct } from "./Product";
// import { HttpClient  } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
// import { HttpErrorResponse } from "@angular/common/http";
// import { ObservableInput } from "rxjs/Observable";


import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()

export class ProductService {

    newProducts: IProduct[];
    baseProductId = 100;
    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }


    constructor(private _http: HttpClient) {
        // allocation 
        this.newProducts = [];
    }

    // private _productUrl = './api/products/products.json';
    private _productUrl = 'http://item-87485/AcmeProdRestfull/All';
    private _productPostUrl = 'http://item-87485/AcmeProdRestfull/Add';





    getProducts(): Observable<IProduct[]> {

        // let headers = new Headers( {'Content-Type': 'application/json' } );

        let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        // .set('Access-Control-Request-Headers','origin, content-type, accept');
        let httpParams = new HttpParams();


        return this._http.get<IProduct[]>(this._productUrl)
            //     , {
            //     headers: httpHeaders,
            //     params: httpParams,
            //     responseType: 'json'
            // })
            .map((products: IProduct[]) => {
                if (this.newProducts) return products.concat(this.newProducts)
                else return products;
            })
            .do(data => console.log("Data from rest service" + JSON.stringify(data)));
    }



    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
          'Something bad happened; please try again later.');
      };

    saveProduct(product: IProduct):Observable<IProduct> {


        product.productId += this.baseProductId;
        let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

        // let options = new RequestOptions(
        //     {
        //         headers: httpHeaders
        //     });

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        this.baseProductId++;

        return this._http.post<IProduct>(this._productPostUrl, product,httpOptions);
            

        //.map((response: Response) => { return response.json(); });

        // this.newProducts.push(product);

    }

}