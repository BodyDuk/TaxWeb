import { Component } from '@angular/core';
import { TaxCalculationHttpService } from '../../../services/tax-calculation.service';
import {IncomeTaxResult} from '../../../models/tax-calculation'

@Component({
    selector: 'tax-calculator',
    templateUrl: './tax-calculator.component.html',
    styleUrls: ['./tax-calculator.component.scss']
})
export class TaxCalculator {
    incomeTaxResult: IncomeTaxResult = <IncomeTaxResult> {};
    grossAnnualSalary: number = 0;

    constructor(private incomeTaxService: TaxCalculationHttpService) { }

    fetchIncomeTax(salary: number): void {
        this.incomeTaxService.get(salary).subscribe(
            (result) => {
                this.incomeTaxResult = result;
            },
            (error) => {
                console.error('Error fetching income tax:', error);
            }
        );
    }
}