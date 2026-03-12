import {WritableSignal} from '@angular/core';
import {catchError, EMPTY, Observable} from 'rxjs';

export function generatePassword(
  generateFn: (options: any) => Observable<string>,
  options: any,
  state: { password: WritableSignal<string>, isLoading: WritableSignal<boolean> }
) {
  state.isLoading.set(true);

  generateFn(options).pipe(
    catchError((err) => {
      console.error('Error while generating:', err);
      state.isLoading.set(false);
      alert('Server error');
      return EMPTY;
    })
  ).subscribe({
    next: (pass) => {
      state.password.set(pass);
      state.isLoading.set(false);
    }
  });
}
