import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class apiService {
  private http = inject(HttpClient);

  generate(params: {
    length: number,
    includeLowercase: boolean,
    includeUppercase: boolean,
    includeNumbers: boolean,
    includeSymbols: boolean
  }): Observable<string> {
    const { length, includeLowercase, includeUppercase, includeNumbers, includeSymbols } = params;

    const url =
      `/api/?length=${length}&lower_case=${includeLowercase}&upper_case=${includeUppercase}&numbers=${includeNumbers}&symbols=${includeSymbols}`;
    console.log(url);
    return this.http.get<any>(url).pipe(
      map(res => {
        return res.password;
      })
    );
  }
}
