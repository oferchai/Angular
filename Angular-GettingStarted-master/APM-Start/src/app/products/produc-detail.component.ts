import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'PRODUCT-EDIT',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})


export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;

  @Output() LogEvent = new EventEmitter<string>()

  @Input() product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  private productForm: FormGroup;


  ngOnInit() {

    if (this.product == undefined) {
      const param = this._route.snapshot.paramMap.get('id');
      this.product = this._route.snapshot.data['prd'];
    }
    // else {
    //   this._productService.getProduct(this.inputProductId).subscribe( p=>this.product == p);
    // }


    let productDesc = new FormControl(this.product!.description, [
      Validators.required,
      Validators.minLength(4)]);

    let productName = new FormControl(this.product!.productName, [
      Validators.required,
      Validators.minLength(4)]);

    let price = new FormControl(this.product!.price, [
      Validators.required,
      Validators.min(0), Validators.max(1000)]);

    this.productForm =
      new FormGroup({ productName: productName, productDesc: productDesc, productPrice: price });




  }

  get productDesc() {
    return this.productForm && this.productForm.get('productDesc');
  }

  onBack(): void {
    this._router.navigate(['/product_multi_view']);

  }

  onSave(formValues): void {

    // this.product.productName = formValues.productName;
    // this.product.description = formValues.productDesc;
    // this.product.price = formValues.productPrice;

    this.LogEvent.emit("Attemp to create new product:" + this.product.productName);

    this._productService.saveProduct(this.product).subscribe((new_prod:IProduct) => {

      this.LogEvent.emit("New product:" + new_prod.productName + " id:" + new_prod.productId + " created successfuly");
      this._router.navigate(['/product_multi_view']);
    });
  }

}
