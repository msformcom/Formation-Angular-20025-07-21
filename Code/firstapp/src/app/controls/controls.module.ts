import { NgModule } from '@angular/core';
import { NumberEditorComponent } from './number-editor/number-editor.component';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { TimeCounterDirective } from './time-counter.directive';
import { TwoColsComponent } from './two-cols/two-cols.component';



@NgModule({
  // Liste des éléments faisant partie de ce module
  // Ils se reconaissent les uns les autres
  declarations: [
    NumberEditorComponent,
    TimeCounterDirective,
    TwoColsComponent
  ],
  // Imports provenant de l'extérieur
  imports: [EllipsisPipe],
  // exports : Liste des éléments qui vont être disponibles par import de ce module module
  exports:[NumberEditorComponent, TimeCounterDirective, TwoColsComponent]
})
export class ControlsModule { }
