import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IProduct } from './Product';

@Component({
  selector: 'MINI-PRD-THIUMBNAIL',
  templateUrl: './produt-mini-thumbnail.component.html',
  styleUrls: ['./produt-mini-thumbnail.component.css']
})
export class ProductMiniThumbnailComponent implements OnInit {


  @Input() product:IProduct
  
  @Input() showImage:boolean
  @Output() ClickLink = new EventEmitter<string>()
  

  imageWidth: number = 40;
    imageMargin: number = 10;

  constructor() { }

  ngOnInit() {
  }
  
  LinkClicked(event){

    this.ClickLink.emit(event);
  }

}
