import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';


export interface ITFError{
  label:string;
  type:string;
  timeout?:number
}

@Injectable()
export class ErrorsService {

  private errors:ITFError[]=[];
  constructor() { }

  // Observable qui represente le flux du tableau d'erreur
  $errors=new Subject<ITFError[]>();
  errorSignal=signal(this.errors);

  showError(error:ITFError){
    // Ajout d'une erreur au tableau
    this.errors.push(error);
    // declenche une nouvelle sortie à partir de $errors
    this.$errors.next(this.errors);
        this.errorSignal.set(this.errors.map(c=>c))
    if(error.timeout){
      setTimeout(() => {
        this.deleteError(error);
      },error. timeout);
    }
  }

  deleteError(error:ITFError){
    this.errors.splice(this.errors.indexOf(error),1);
    this.$errors.next(this.errors);
    this.errorSignal.set(this.errors.map(c=>c))
  }

  
}
