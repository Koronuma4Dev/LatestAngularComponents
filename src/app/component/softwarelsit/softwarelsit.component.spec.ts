import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarelsitComponent } from './softwarelsit.component';

describe('SoftwarelsitComponent', () => {
  let component: SoftwarelsitComponent;
  let fixture: ComponentFixture<SoftwarelsitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwarelsitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwarelsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
