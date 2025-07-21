import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TravelListComponent } from "./travel/travel-list/travel-list.component";

// ViewModel : Informations affcihées dans une View
// ViewModel = classe de component
@Component({
  selector: 'firstapp-root',
  // TravelListComponent est utilisé dans le template 
  // Il est standalone => doit figurer dans les imports
  imports: [TravelListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor() {
    setInterval(()=>{
      this.title+="*";
    },1000)
  }
  title = 'firstapp';
  

}
