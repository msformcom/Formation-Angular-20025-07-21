import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TravelListComponent } from "./travel/travel-list/travel-list.component";
import { ControlsModule } from './controls/controls.module';
import { TimeCounterDirective } from './controls/time-counter.directive';

// ViewModel : Informations affcihées dans une View
// ViewModel = classe de component
@Component({
  selector: 'firstapp-root',
  // TravelListComponent est utilisé dans le template 
  // Il est standalone => doit figurer dans les imports
  imports: [TravelListComponent, ControlsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

 // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor() {
    // setInterval(()=>{
    //   this.title+="*";
    // },1000)
  }
  nombre=10;
  title = 'firstapp';
  
  resetCumul(){
    this.timeCounterDirective.reset();
  }

  // ViewChild recherche l'élément avec la référence tc dans le template
  // disponible seulement après le premier rendu (pas dans ngOnInit)
  @ViewChild("tc")
  timeCounterDirective!: TimeCounterDirective;
}
