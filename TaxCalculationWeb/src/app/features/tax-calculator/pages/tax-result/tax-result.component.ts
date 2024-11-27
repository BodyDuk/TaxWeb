import { Component, Input } from '@angular/core';
import { IncomeTaxResult } from '../../../../models/tax-calculation'

@Component({
  selector: 'tax-result',
  templateUrl: './tax-result.component.html',
  styleUrls: ['./tax-result.component.css']
})
export class TaxResultComponent {
  @Input() result: IncomeTaxResult = <IncomeTaxResult>{};
  @Input() salary: number = 0;
}