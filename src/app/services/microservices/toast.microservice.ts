import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  isVisible = signal(false);
  message = signal('');

  show(msg: string) {
    this.message.set(msg);
    this.isVisible.set(true);

    setTimeout(() => this.isVisible.set(false), 2000);
  }
}
