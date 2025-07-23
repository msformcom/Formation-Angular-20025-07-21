import { Component } from '@angular/core';
import { ControlsModule } from "../../controls/controls.module";

@Component({
  selector: 'firstapp-accueil',
  imports: [ControlsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
