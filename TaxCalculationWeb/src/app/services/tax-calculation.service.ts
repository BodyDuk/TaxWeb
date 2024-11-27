import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { environment } from '@environments/environment';
import { IncomeTaxResult } from '../models/tax-calculation';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculationHttpService {

  //protected _apiUrl = `${environment.API_BASE_URL}/api/`;
  protected _apiUrl = `http://localhost:5058/api/income`;

  constructor(protected _httpClient: HttpClient) { }

  get(grossAnnualSalary: number): Observable<IncomeTaxResult> {
    const params = new HttpParams().set('grossAnnualSalary', grossAnnualSalary);

    return this._httpClient.get<IncomeTaxResult>(`${this._apiUrl}`, { params });
  }
}
