import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IProduct } from './Product';

@Component({
  selector: 'pm-produt-thumbnailNEW',
  templateUrl: './produt-thumbnail.component.html',
  styleUrls: ['./produt-thumbnail.component.css']
})
export class ProdutThumbnailComponent implements OnInit {


  @Input() product:IProduct
  
  @Input() showImage:boolean
  @Output() ClickLink = new EventEmitter<string>()
  

  imageWidth: number = 50;
    imageMargin: number = 2;

  constructor() { }

  ngOnInit() {
  }
  
  LinkClicked(event){

    this.ClickLink.emit(event);
  }

}
