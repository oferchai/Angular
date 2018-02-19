import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ConsoleComponent } from "../shared/console.component";

@Component({
    selector:'PRODUCT-COMPLEX', 
    templateUrl: './product-complex.component.html',
    styleUrls: ['./product-complex.component.css']
  })
  
  
  export class ProductComplexViewComponent implements OnInit {

    constructor(private _route:ActivatedRoute)
    {
        this.useThumbnail = false;
    }

    private urlProductId:number;
    private useThumbnail:boolean;
    

    ngOnInit()
    {
        this.urlProductId = +this._route.params['id'];

        //this._route.snapshot.paramMap.get('id');

        this._route.params.forEach((params: Params) => {
            this.urlProductId = +params['id'];
            console.log(params); // Your params called every change
            console.log( "prod id:" + this.urlProductId );
        });

        console.log("Complex view:");

    }

    onConsoleEvent(event:string ,  localConsole:ConsoleComponent)
    {
        console.log("new Event:"+event);
        localConsole.logLine(event);
        
    }


  }