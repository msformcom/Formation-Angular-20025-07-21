import { Component, inject, Input } from '@angular/core';
import { Travel } from '../../../models/travel';
import { TravelListComponent } from '../travel-list/travel-list.component';
import { CommonModule, CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';





@Component({
  selector: 'firstapp-travel-list-item',
  imports: [CommonModule, EllipsisPipe],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss'
})
export class TravelListItemComponent {
  // Injection Dependance => permet d'obtenir des dépedances => objets dont j'ai besoin
  constructor(parent: TravelListComponent){

  }
  parent=inject(TravelListComponent);
  // Le template doit afficher un objet de type Travel => attribut du component
  // @Input permet au composant parent de passer l'information
  @Input("voyage") 
  travel?: Travel;


  
}
