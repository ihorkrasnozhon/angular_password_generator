import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strength-meter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-meter.component.html',
  styleUrls: ['./strength-meter.component.css']
})
export class StrengthMeterComponent {
  strength = input.required<number>();

  barClass = input<string>('');
  textClass = input<string>('');

  labels = ['Weak', 'Fair', 'Good', 'Strong', 'Unstoppable'];
}
