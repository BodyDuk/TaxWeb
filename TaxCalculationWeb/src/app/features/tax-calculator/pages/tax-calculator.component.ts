import { Component } from '@angular/core';
import { TaxCalculationHttpService } from '../../../services/tax-calculation.service';
import { IncomeTaxResult } from '../../../models/tax-calculation';
import { TaxInputComponent } from './tax-input/tax-input.component';
import { TaxResultComponent } from './tax-result/tax-result.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.scss'],
  imports: [FormsModule, TaxResultComponent, TaxInputComponent, HttpClientModule ],
  providers:[TaxCalculationHttpService, HttpClient]
})
export class TaxCalculator {
  incomeTaxResult: IncomeTaxResult = <IncomeTaxResult>{};
  grossAnnualSalary: number = 0;

  constructor(private incomeTaxService: TaxCalculationHttpService) {}

  fetchIncomeTax(salary: number): void {
    this.grossAnnualSalary = salary;
    this.incomeTaxService.get(salary).subscribe(
      (result) => {
        this.incomeTaxResult = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
