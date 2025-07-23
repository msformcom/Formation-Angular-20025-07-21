import { Component, inject, InjectionToken, Input } from '@angular/core';
import { Travel } from '../../../models/travel';
import { TravelListComponent } from '../travel-list/travel-list.component';
import { CommonModule, CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';
import { RouterLink } from '@angular/router';


// Dependanxce : une fonction qui prend un id de type string et qui renvoit un lien de type string
export const TravelItemLinkUrl=new InjectionToken<(id:string)=>string>("TravelItemLinkUrl");

@Component({
  selector: 'firstapp-travel-list-item',
  imports: [CommonModule, EllipsisPipe, RouterLink],
  templateUrl: './travel-list-item.component.html',
  styleUrl: './travel-list-item.component.scss'
})
export class TravelListItemComponent {
  // Injection Dependance => permet d'obtenir des dépedances => objets dont j'ai besoin
  constructor(parent: TravelListComponent){

  }
  linkFunction=inject(TravelItemLinkUrl);
  parent=inject(TravelListComponent);
  // Le template doit afficher un objet de type Travel => attribut du component
  // @Input permet au composant parent de passer l'information
  @Input("voyage") 
  travel?: Travel;


  
}
