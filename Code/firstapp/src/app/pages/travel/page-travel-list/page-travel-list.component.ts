import { Component } from '@angular/core';
import { TravelListComponent } from "../../../travel/travel-list/travel-list.component";
import { TravelItemLinkUrl } from '../../../travel/travel-list-item/travel-list-item.component';

@Component({
  selector: 'firstapp-page-travel-list',
  imports: [TravelListComponent],

  providers:[
    // cette resource sera utilisée par le TravelListItemComponent pour générer le lien vers un travel
    {provide: TravelItemLinkUrl, useValue:(id:string)=>"/travel/edit/"+id}
  ],
  templateUrl: './page-travel-list.component.html',
  styleUrl: './page-travel-list.component.scss'
})
export class PageTravelListComponent {

}
