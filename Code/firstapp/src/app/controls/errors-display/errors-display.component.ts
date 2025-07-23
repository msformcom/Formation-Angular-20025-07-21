import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorsService } from '../../../services/errors.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'firstapp-errors-display',
  standalone: false,
  templateUrl: './errors-display.component.html',
  styleUrl: './errors-display.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ErrorsDisplayComponent {

  constructor(public errorService: ErrorsService) {

    this.errorService.$errors.subscribe(errors=>{
      console.log(errors);
    });
  }


}
