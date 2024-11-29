import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tax-input',
  templateUrl: './tax-input.component.html',
  styleUrls: ['./tax-input.component.scss'],
  imports: [FormsModule]
})
export class TaxInputComponent {
  salary: number | null = null;

  @Output() salarySubmitted = new EventEmitter<number>();

  onSubmit(): void {
    if (this.salary != null) {
      this.salarySubmitted.emit(this.salary);
    }
  }
}
