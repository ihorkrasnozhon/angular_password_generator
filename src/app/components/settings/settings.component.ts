import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class PasswordSettingsComponent {
  stepUp() {
    const current = this.form().get('length')?.value;
    if (current < 50) this.form().get('length')?.setValue(current + 1);
  }
  stepDown() {
    const current = this.form().get('length')?.value;
    if (current > 4) this.form().get('length')?.setValue(current - 1);
  }

  form = input.required<FormGroup>();
}
