import {Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passwordDisplay.component.html',
  styleUrl: './passwordDisplay.component.css',
})
export class PasswordDisplayComponent {
  password = input.required<string>();
  isHidden = input<boolean>(true);

  toggleVisibility = output<void>();
  copy = output<void>();
}
