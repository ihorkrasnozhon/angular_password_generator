import {WritableSignal} from '@angular/core';
import {Observable} from 'rxjs';

export function generatePassword(
  generateFn: (options: any) => Observable<string>,
  options: any,
  state: { password: WritableSignal<string>, isLoading: WritableSignal<boolean> }
) {
  state.isLoading.set(true);

  generateFn(options).subscribe({
    next: (pass) => {
      state.password.set(pass);
      state.isLoading.set(false);
    },
    error: () => state.isLoading.set(false)
  });
}
