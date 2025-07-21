import { Component } from '@angular/core';
import { Travel } from '../../../models/travel';
import { CommonModule } from '@angular/common';
import { TravelListItemComponent } from '../travel-list-item/travel-list-item.component';

@Component({
  selector: 'firstapp-travel-list',
  // Importation groupée de directives sous la forme d'un module
  imports: [CommonModule, TravelListItemComponent],
  templateUrl: './travel-list.component.html',
  styleUrl: './travel-list.component.scss',
  standalone:true
})
export class TravelListComponent {
  // Obtention de la liste des Travel
  // Normalement : Appel à une méthode d'un service

  travels:Travel[]=[
    {label:"Montreux",prix:1000,allIncluded:true},
    {label:"Rome",prix:500,allIncluded:false},
  
  ]

  // Création d'un tableau adapté à la vue
  travelsAvecMarge=this.travels.map(t=>({
      ...t,
      avecMarge:t.prix*1.2,
      style:this.getStyle(t),
      styleCss:`width:${t.prix/10}px;`
  }));

  


  // Dans le template seuls les objets référencés dans le component sont utilisables
  Math=Math;

  // Calcul de marge avec fonction => exécution de la fonction à chaque détetction de changement
  prixAvecMarge(p:number){
    return p*1.2;
  }

  // Générer un objet contenant les attributs de style pour un Travel
  // appliquer avec ngStyle
  getStyle(t:Travel){
    return ({
      "width.px":t.prix/10,
      "background-color": t.allIncluded ?'green' : 'blue'
    })
  }

    // Générer un objet contenant les attributs nommés en
    //  fonction des classes à appliquer pour un Travel
    // appliquer avec ngClass
  getClasses(t:Travel){
    return ({
      "all-included":t.allIncluded
    })
  }

}
