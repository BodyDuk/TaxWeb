import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaxCalculator } from './pages/tax-calculator.component';
import { TaxCalculationHttpService } from '../../services/tax-calculation.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TaxCalculator],
  exports: [TaxCalculator],
  providers: [TaxCalculationHttpService]
})
export class TaxCalculationModule { }
