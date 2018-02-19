import { NgModule } from '@angular/core';
// import { MaterialModule } from './../material.module';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list.component';
import {ProductDetailComponent} from './produc-detail.component'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './product-guard.service';
import { SharedModule } from './../shared/shared.module';
import { StarComponent } from '../shared/star.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatAutocompleteModule, MatInputModule,MatFormFieldModule } from '@angular/material';
import { ProdutThumbnailComponent } from './produt-thumbnail.component';
import { ProductDetailsResolver } from './product-details-resolver.service';
import { ProductComplexViewComponent } from './product-complex.component';
import { ProductMiniThumbnailComponent } from './produt-mini-thumbnail.component';


@NgModule({
  imports: [
    
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule ,
    BrowserAnimationsModule,
    
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    
  ],

  declarations: [
    ProductListComponent,
    ProductComplexViewComponent,
    ConvertToSpacesPipe,    
    ProductDetailComponent, 
    ProdutThumbnailComponent,
    ProductMiniThumbnailComponent,
  ],

  
})
export class ProductModule { }


