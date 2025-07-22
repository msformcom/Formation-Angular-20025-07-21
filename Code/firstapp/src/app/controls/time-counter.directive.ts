import { Directive, ElementRef, HostBinding, HostListener, inject, Input, OnInit } from '@angular/core';

@Directive({

  // css selector <element timeCounter ...
  selector: '[timeCounter]',
  // cette directive sera accessible dans le template avec #tc="timeCounter"
  exportAs:"timeCounter",
  standalone: false
})
export class TimeCounterDirective implements OnInit{

  constructor() { }
  @HostListener("window:resize")
  resize(e:any){

  }

  @Input("timeCounter")
  bgColorValue ="red"

  @HostBinding("style.background-color")
  get bgColor(){
    return this.bgColorValue;
  }

  @HostBinding("class.mouse-in")
  get isMouseIn(){
    return this.dateEntree!=undefined;
  }

  dateEntree?:number;
  cumul=0;

  reset(){
    this.cumul=0;
  }

  ngOnInit(): void {
    // Ajout d'un évènement par js classique
    this.element.addEventListener("mouseenter",()=>{
      console.log("Entree");
      this.dateEntree=Date.now();
    });
  }

  // Association de l'évènement mouseleave de l'élément avec la fonction
  @HostListener("mouseleave")
  sortie(){

    this.cumul+=(Date.now()-this.dateEntree!);
    this.dateEntree=undefined;
    console.log("Sortie : "+this.cumul);
  }


  // obtention de l'élément sur lequel l'attribut (la directive) est appliqué
  element=inject(ElementRef).nativeElement as HTMLElement;



}
