import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecsComponent } from './laptop-specs.component';

describe('LaptopSpecsComponent', () => {
  let component: LaptopSpecsComponent;
  let fixture: ComponentFixture<LaptopSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopSpecsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
