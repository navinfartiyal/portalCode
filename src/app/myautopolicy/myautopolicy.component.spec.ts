import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyautopolicyComponent } from './myautopolicy.component';

describe('MyautopolicyComponent', () => {
  let component: MyautopolicyComponent;
  let fixture: ComponentFixture<MyautopolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyautopolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyautopolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
