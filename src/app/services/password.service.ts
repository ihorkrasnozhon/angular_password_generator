import { Injectable, signal, computed, inject } from '@angular/core';
import { apiService } from './api.service';
import { PasswordOptions } from '../interfaces/password.interface';
import {copyToBrowserClipboard} from './microservices/copy.microservice';
import {generatePassword} from './microservices/generatePassword.microservice';
import {calculateStrength} from './microservices/calculateStrength.microservice';

@Injectable({ providedIn: 'root' })
export class PasswordService {
  private api = inject(apiService);

  password = signal<string>('');
  isLoading = signal<boolean>(false);

  strength = computed(() => calculateStrength(this.password()));

  async generate(options: PasswordOptions) {
    generatePassword(
      (opt: PasswordOptions) => this.api.generate(opt),
      options,
      { password: this.password, isLoading: this.isLoading }
    );
  }

  async copyToClipboard() { await copyToBrowserClipboard(this.password())}
}
