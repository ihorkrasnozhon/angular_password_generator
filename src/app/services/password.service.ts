import { Injectable, signal, computed } from '@angular/core';
import { PasswordOptions } from '../interfaces/password.interface';
import {copyToBrowserClipboard} from './microservices/copy.microservice';
import {generatePasswordLocal} from './microservices/generatePasswordLocal.microservice';
import {calculateStrength} from './microservices/calculateStrength.microservice';

// import { inject } from '@angular/core';
// import { apiService } from './api.service';
// import {generatePassword} from './microservices/generatePassword.microservice';

@Injectable({ providedIn: 'root' })
export class PasswordService {

  password = signal<string>('');
  isLoading = signal<boolean>(false);

  strength = computed(() => calculateStrength(this.password()));

  // private api = inject(apiService);
  //
  // async generate(options: PasswordOptions) {
  //   generatePassword(
  //     (opt: PasswordOptions) => this.api.generate(opt),
  //     options,
  //     { password: this.password, isLoading: this.isLoading }
  //   );
  // }

  generate(options: PasswordOptions) {
    this.isLoading.set(true);

    setTimeout(() => {
      const newPassword = generatePasswordLocal(options);
      this.password.set(newPassword);
      this.isLoading.set(false);
    }, 300);
  }

  isCopied = signal(false);

  async copyToClipboard() {
    await copyToBrowserClipboard(this.password());

    this.isCopied.set(true);
    setTimeout(() => this.isCopied.set(false), 1000);
  }
}
