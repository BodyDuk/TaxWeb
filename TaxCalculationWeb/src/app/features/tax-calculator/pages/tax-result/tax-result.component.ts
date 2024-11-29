import { Component, Input } from '@angular/core';
import { IncomeTaxResult } from '../../../../models/tax-calculation';
import { NgIf } from '@angular/common';

@Component({
  selector: 'tax-result',
  templateUrl: './tax-result.component.html',
  styleUrls: ['./tax-result.component.scss'],
  imports: [NgIf]
})
export class TaxResultComponent {
  @Input() result: IncomeTaxResult = <IncomeTaxResult>{};
  @Input() salary: number = 0;
}