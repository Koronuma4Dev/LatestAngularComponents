import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoptoplistComponent } from './loptoplist.component';

describe('LoptoplistComponent', () => {
  let component: LoptoplistComponent;
  let fixture: ComponentFixture<LoptoplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoptoplistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoptoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
