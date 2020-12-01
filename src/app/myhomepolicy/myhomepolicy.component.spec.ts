import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomepolicyComponent } from './myhomepolicy.component';

describe('MyhomepolicyComponent', () => {
  let component: MyhomepolicyComponent;
  let fixture: ComponentFixture<MyhomepolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhomepolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomepolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
