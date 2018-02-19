import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';


// import { ProductService } from './product.service';


@Component({
    selector: 'PRODUCT-LIST',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']

})


export class ProductListComponent implements OnInit {


    @Input() selectedProductId: number;
    @Input() useThumbnail: boolean;
    pageTitle: string = 'Product List';
    imageWidth: number = 20;
    imageMargin: number = 30;
    showImage: boolean = true;
    _listFilter: string = '';
    selectedProduct: IProduct;

    constructor(private service: ProductService,
        private _route: ActivatedRoute,
        private _router: Router) {


    }

    OnThumnailClick(event) {
        //console.log("Event:"+ event)
        //this._router.navigate(['/product',event]);
        // this.selectedProduct = +event;
        let selectedProduct = this.products.filter(p => p.productId === event)[0];
        this.productClick(selectedProduct);


    }

    onNotify(message: string): void {
        console.log(message);
        this.pageTitle = "Page title:" + message;

    }
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProduct = this._listFilter ? this.performFilter(this.listFilter) :
            this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((prod: IProduct) =>
            prod.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    filterProduct: IProduct[];

    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    productClick(prod: IProduct) {
        this.selectedProduct = prod;
        this._router.navigate(['/product_multi_view', prod.productId]);
        // [routerLink]="['/products',product.productId]
    }

    onToggleThumbnail() :void{
        this.useThumbnail = !this.useThumbnail;
        console.log("useThumbnail="+this.useThumbnail );
        //this._router.navigate(['/product_multi_view']);
    }

    ngOnInit(): void {
        console.log('product list ngOnInit');
        
        
        this._route.params.subscribe( params =>
        {
            // this function is called every time the ID parameter changes!

            

            console.log(params); // Your params called every change 
            this.selectedProductId = +params['id'];

            if (this!.selectedProductId > 0) {
                this.selectedProduct = this.products.filter(p => p.productId === this.selectedProductId)[0];
            }
            else
            {
                this.service.getProducts().subscribe
                (products => {
                this.products = products;
                this.filterProduct = this.products;
                },
                error => this.pageTitle = <any>error);
                
                this.selectedProduct = undefined;
            }

        });

        // this.service.getProducts().subscribe
        // ( products=>{this.products = products;
        // this.filterProduct = this.products;},
        // error=>this.pageTitle = <any>error);




    }
}
