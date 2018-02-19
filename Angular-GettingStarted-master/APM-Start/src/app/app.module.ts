import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductService } from './products/product.service';
import { HttpClientModule  } from '@angular/common/http';
import { RouterModule, ActivatedRoute, Router, ActivatedRouteSnapshot  } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';

import { LoginComponent } from './shared/login.component';
import { AuthService } from './shared/auth.service';
import { ProductDetailsResolver } from './products/product-details-resolver.service';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/produc-detail.component';
import { LoginGuardService } from './shared/login-guard.service';
import { ProductComplexViewComponent } from './products/product-complex.component';





@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent
    
  ],

  imports: [    
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([          
      { path: 'welcome' , component: WelcomeComponent},
      { path: 'Login' , component: LoginComponent},
      { path: 'product_multi_view' , redirectTo:'product_multi_view/0' , pathMatch:'full' },
      { path: 'product_multi_view/:id' , component: ProductComplexViewComponent,
         canActivate:[LoginGuardService] , 
        pathMatch:'full'  },
      { path: 'products' , component: ProductListComponent,
      canActivate:[LoginGuardService], pathMatch:'full' },
      
      { path: 'product/:id' , component: ProductDetailComponent,
        canActivate:[ProductGuardService,LoginGuardService] , resolve:{prd:ProductDetailsResolver}},
      { path: '' , redirectTo: 'Login', pathMatch:'full'  }      
    ]),
    ProductModule,
    SharedModule    
  ],

  providers: [
    ProductService,
    ProductGuardService,
    LoginGuardService,

    AuthService,
    ProductDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  appName:string = 'appModule';
 }
