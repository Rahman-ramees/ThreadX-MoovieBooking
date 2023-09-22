import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatArrangeComponent } from './seat-arrange.component';

describe('SeatArrangeComponent', () => {
  let component: SeatArrangeComponent;
  let fixture: ComponentFixture<SeatArrangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatArrangeComponent]
    });
    fixture = TestBed.createComponent(SeatArrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
