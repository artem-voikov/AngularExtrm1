import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuserComponent } from './signuser.component';

describe('SignuserComponent', () => {
  let component: SignuserComponent;
  let fixture: ComponentFixture<SignuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
