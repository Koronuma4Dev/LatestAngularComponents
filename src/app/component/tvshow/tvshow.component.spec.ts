import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowComponent } from './tvshow.component';

describe('TVshowComponent', () => {
  let component: TVshowComponent;
  let fixture: ComponentFixture<TVshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TVshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
