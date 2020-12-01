import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinsuranceComponent } from './myinsurance.component';

describe('MyinsuranceComponent', () => {
  let component: MyinsuranceComponent;
  let fixture: ComponentFixture<MyinsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
