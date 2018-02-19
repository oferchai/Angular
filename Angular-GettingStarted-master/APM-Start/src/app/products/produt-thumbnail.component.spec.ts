import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutThumbnailComponent } from './produt-thumbnail.component';

describe('ProdutThumbnailComponent', () => {
  let component: ProdutThumbnailComponent;
  let fixture: ComponentFixture<ProdutThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
