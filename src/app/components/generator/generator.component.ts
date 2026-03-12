import { Component, computed, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import {PasswordService} from '../../services/password.service';
import {getBarClass, getTextClass} from '../../services/microservices/getStrengthClass.microservice';
import {PasswordDisplayComponent} from '../passwordDisplay/passwordDisplay.component';
import {StrengthMeterComponent} from '../strength-meter/strength-meter.component';
import {PasswordSettingsComponent} from '../settings/settings.component';
import {ToastService} from '../../services/microservices/toast.microservice';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordDisplayComponent,
    StrengthMeterComponent,
    PasswordSettingsComponent
  ],
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class PasswordGeneratorComponent {
  passwordForm: FormGroup;
  isPasswordHidden = signal(true);
  public passService = inject(PasswordService);
  toast = inject(ToastService);

  strength = computed(() => this.passService.strength());

  barClass = computed(() => getBarClass(this.strength()));
  textClass = computed(() => getTextClass(this.strength()));

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      length: [12],
      includeNumbers: [true],
      includeSymbols: [false],
      includeLowercase: [false],
      includeUppercase: [true]
    });
  }

  togglePasswordVisibility() {this.isPasswordHidden.update(value => !value);}

  onGenerate() {this.passService.generate(this.passwordForm.value)};

  async copyToClipboard() {
    await this.passService.copyToClipboard();
    this.toast.show('Copied to clipboard!');
  };
}
