import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxCalculator } from './features/tax-calculator/pages/tax-calculator.component';

const routes: Routes = [
  { path: '', component: TaxCalculator },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
