import { Component, inject, OnInit } from '@angular/core';
import { Travel } from '../../../models/travel';
import { CommonModule } from '@angular/common';
import { TravelListItemComponent } from '../travel-list-item/travel-list-item.component';
import { DataRamService } from '../../../services/data-ram.service';
import { DataService } from '../../../services/data-service';

@Component({
  selector: 'firstapp-travel-list',
  // Importation groupée de directives sous la forme d'un module
  imports: [CommonModule, TravelListItemComponent],
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.scss',
  standalone:true
})
export class TravelListComponent implements OnInit {
  // Implementer OnInit garantit de ne pas faire d'erreur sur la méthode ngOnInit
  // Obtention de la liste des Travel
  // Normalement : Appel à une méthode d'un service

  dataService=inject(DataService);


  // Méthode cycle de vie du component
  // Exécutée auytomatiquement par Angular une seule fois
  // Avec async/await
  async ngOnInit(){
    // Gestion de la promesse explicite avec détection des changement
    //this.travels=await this.dataService.getTravelsAsync("")

    // Pas d'attente dans le ts => je compte sur le pipe async pour attendre 
    // et mettre à jour la partie de l'UI qui dépend du resultat de la promesse
    // pas besoin de la détection des changements => le pipe s'en charge
    this.$travels=this.dataService.getTravelsAsync("");
  }
 // Avec callback
  ngOnInit2(){

     this.dataService.getTravelsAsync("").then(r=>{
      this.travels=r;
     })
  }
  travels?: Travel[]
  $travels?:Promise<Travel[]>;



}
