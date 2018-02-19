import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'pm-root',
  // templateUrl: './app.component.html',
  
//   template: `
//     <div>
//         <nav class='navbar navbar-default'>
//             <div class='container-fluid'>
//                 <a class='navbar-brand'>{{pageTitle}}</a>
//                 <ul class='nav navbar-nav'>
//                     <li><a [routerLink]="['/welcome']">Home</a></li>
//                     <li><a [routerLink]="['/products']">Product List</a></li>
//                 </ul>
//             </div>
//         </nav>
//         <div class='container'>
//             <router-outlet></router-outlet>
//         </div>
//      </div>
//     ` ,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService)
  {

  }
  
  title : string = 'Angular: Getting Started now ';
}
