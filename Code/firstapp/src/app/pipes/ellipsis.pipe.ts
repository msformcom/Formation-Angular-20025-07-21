import {  inject,Inject, InjectionToken, Pipe, PipeTransform } from '@angular/core';

// Pour définir l'information nbCarMax de façon souple (faiblement couplée) et globale
// utiliser l'injection de dépendance
// id de dépendance => valaur définie par confif 

// Injection token = Id donné à une dépendance
export const EllipsisPipeMaxCaracters=new InjectionToken<number>("EllipsisPipeMaxCaracters");


@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // Obtention d'une dépedance dans le constructeur
  // constructor(@Inject(EllipsisPipeMaxCaracters) private  defaultNbCarMaxValue:number){

  // }

  // Autre façon d'obtenir une dépendance (plus claire)
  defaultNbCarMaxValue=inject(EllipsisPipeMaxCaracters) ;

  transform(value: string, nbCarMax?:number): string {
    // Soit nbCarMax est fourni dans le template => sa valeur est utilisée
    // sinon, on prend la valeur donnée par l'injection de dépendance
    if(!nbCarMax){
      nbCarMax=this.defaultNbCarMaxValue;
    }
    if(value.length<=nbCarMax){
      return value;
    }

    // Je tronque la chaine et ajoute ...
    return value.substring(0,nbCarMax-3)+"...";
  }

}
