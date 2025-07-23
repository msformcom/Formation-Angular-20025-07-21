import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../services/data-service';
import { Travel } from '../../../../models/travel';

@Component({
  selector: 'firstapp-page-travel-edit',
  imports: [],
  templateUrl: './page-travel-edit.component.html',
  styleUrl: './page-travel-edit.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PageTravelEditComponent implements OnInit {
  constructor(){
    let s1=signal(2);
    let s2=signal(3);
    let s3=computed(()=>s1()+s2()); // 5
    s1.set(3); // s1()=>3  s3()=>6
    effect(()=>{ console.log(s3)});
    s1.update(c=>c+1); // s1() => 4 et  s3()=> 7 et  effect dépendant de s3 => console.log

  }



 changeDetector=inject(ChangeDetectorRef);
  ngOnInit(): void {
      // possibilité de maj UI En dehors de l'utilisation des signaux
      // MAJ UI toutes les secondes
      setInterval(() => {
        this.changeDetector.detectChanges();
      }, 1000);

      // signalNombre => (2)
      this.signalNombre.update(c=>c+1);
         // signalNombre => (3)
      this.signalNombre.set(this.signalNombre()+1);
         // signalNombre => (4)


    // this.activatedRoute.queryParams => .. ?toto=1
    // Analyser la route
    // this.activatedRoute.params est un observable
    // lié aux changements des paramètres de la route
    // /travel/list/1   => /travel/list/2 alors la méthode dans subscribe est exécutée
    this.activatedRoute.params.subscribe( async params=>{
      let id=params["id"]; // recuperation de la partie id de la route
      let travel=await this.dataService.getTravelAsync(id);

      // Changer la valeur contenue dans travelSignal
      // et indirectement mettre à jour l'ui
      this.travelSignal.set(travel);
      
    });
  }
  // Objet me permettant d'avoir les infos de la route
  activatedRoute=inject(ActivatedRoute);
  dataService=inject(DataService);
  signalNombre=signal(2);


  // valeur de travel => mise à jour dans l'ui seuelement avec zone.js
  travel?:Travel;

  // Sans compter sur zone.js
  // Signal => objet qui contient une valeur de type Travel | undefined
  travelSignal=signal<Travel|undefined>(undefined);

  // effect => va exécuter la fonction si les signaux utilisés dans la fonction changent de valeur
  logChangementTravel=  effect(()=>{
      console.log(this.travelSignal());
    })

    // Nouveau signal avec une valeur qui évolue en fonction de travelSignal
  prixSignal=computed(()=>this.travelSignal()?.prix);

}
