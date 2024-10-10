import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecificationComponent } from './laptopspecification.component';

describe('LaptopspecificationComponent', () => {
  let component: LaptopspecificationComponent;
  let fixture: ComponentFixture<LaptopspecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopspecificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
