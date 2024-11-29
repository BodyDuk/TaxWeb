import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TaxCalculationHttpService } from '../../services/tax-calculation.service';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TaxCalculationHttpService]
})
export class TaxCalculationModule { }
