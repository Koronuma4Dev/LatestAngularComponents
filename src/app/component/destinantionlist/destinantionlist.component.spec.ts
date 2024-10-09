import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinantionlistComponent } from './destinantionlist.component';

describe('DestinantionlistComponent', () => {
  let component: DestinantionlistComponent;
  let fixture: ComponentFixture<DestinantionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DestinantionlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinantionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
