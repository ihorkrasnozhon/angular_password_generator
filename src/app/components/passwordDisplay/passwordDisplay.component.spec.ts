import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordDisplayComponent } from './passwordDisplay.component';

describe('Password', () => {
  let component: PasswordDisplayComponent;
  let fixture: ComponentFixture<PasswordDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
