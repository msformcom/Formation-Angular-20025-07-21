import { NgModule } from '@angular/core';
import { NumberEditorComponent } from './number-editor/number-editor.component';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { TimeCounterDirective } from './time-counter.directive';
import { TwoColsComponent } from './two-cols/two-cols.component';
import { ValidationComponent } from './validation/validation.component';
import { ErrorsDisplayComponent } from './errors-display/errors-display.component';
import { CommonModule } from '@angular/common';



@NgModule({
  // Liste des éléments faisant partie de ce module
  // Ils se reconaissent les uns les autres
  declarations: [
    NumberEditorComponent,
    TimeCounterDirective,
    TwoColsComponent,
    ValidationComponent,
    ErrorsDisplayComponent
  ],
  // Imports provenant de l'extérieur
  imports: [EllipsisPipe, CommonModule],
  // exports : Liste des éléments qui vont être disponibles par import de ce module module
  exports:[NumberEditorComponent, TimeCounterDirective, TwoColsComponent, ValidationComponent, ErrorsDisplayComponent]
})
export class ControlsModule { }
