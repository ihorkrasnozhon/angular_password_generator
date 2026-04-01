import {Component, input, output, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordService} from '../../services/password.service';

@Component({
  selector: 'app-password-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './passwordDisplay.component.html',
  styleUrl: './passwordDisplay.component.css',
})
export class PasswordDisplayComponent {
  public passService = inject(PasswordService);

  password = input.required<string>();
  isHidden = input<boolean>(true);

  toggleVisibility = output<void>();
  copy = output<void>();

  onCopy() {
    this.passService.copyToClipboard();
    this.copy.emit();
  }
}
