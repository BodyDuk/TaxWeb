import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IncomeTaxResult } from '../models/tax-calculation';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculationHttpService {
  protected _apiUrl = `http://localhost:5058/api/tax-calculation/income`;

  constructor(protected _httpClient: HttpClient) { }

  get(grossAnnualSalary: number): Observable<IncomeTaxResult> {
    const params = { grossAnnualSalary: grossAnnualSalary };
    return this._httpClient.get<IncomeTaxResult>(`${this._apiUrl}`, { params });
  }
}
