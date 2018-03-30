import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecreateComponent } from './articlecreate.component';

describe('ArticlecreateComponent', () => {
  let component: ArticlecreateComponent;
  let fixture: ComponentFixture<ArticlecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
