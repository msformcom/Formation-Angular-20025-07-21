import { ChangeDetectionStrategy, Component, effect, OnDestroy } from '@angular/core';
import { ErrorsService } from '../../../services/errors.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'firstapp-errors-display',
  standalone: false,
  templateUrl: './errors-display.component.html',
  styleUrl: './errors-display.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ErrorsDisplayComponent implements OnDestroy {
  //souscription: Subscription;

  constructor(public errorService: ErrorsService) {

    // Une souscription à un service singleton doit obligatoirement etre enlevée
    // this.souscription=this.errorService.$errors.subscribe(errors=>{
    //   console.log(errors);
    // });
    effect(()=>{
      console.log(errorService.errorSignal());
    })
  }

  ngOnDestroy(){
    //this.souscription.unsubscribe();
  }

}
