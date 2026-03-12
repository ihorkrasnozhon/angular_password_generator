import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthMeterComponent } from './strength-meter.component';

describe('StrengthMeter', () => {
  let component: StrengthMeterComponent;
  let fixture: ComponentFixture<StrengthMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthMeterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StrengthMeterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
