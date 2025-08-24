import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLoginComponent } from './number-login.component';

describe('NumberLoginComponent', () => {
  let component: NumberLoginComponent;
  let fixture: ComponentFixture<NumberLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumberLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
