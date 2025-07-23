import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'firstapp-number-editor',
  standalone: false,
  templateUrl: './number-editor.component.html',
  styleUrl: './number-editor.component.scss'
})
export class NumberEditorComponent implements OnChanges {
  // Cycle de vie => exécutée à chaque changement des valeurs des Input
  // ngOnChanges
  // ngOnInit
  // A chaque changement dans les input => ngOnChanges
  ngOnChanges(changes: SimpleChanges): void {
    if(this.min!=undefined && this.max!=undefined && this.min>this.max){
      [this.min,this.max]=[this.max,this.min];
    }
    if(this.min!=undefined && this.value<this.min){
      this.value=this.min;
    }
    if(this.max!=undefined && this.value>this.max){
      this.value=this.max;
    }
  }
  
  @Input() value = 0;
  @Input() min?: number = undefined;
  @Input() max?: number = undefined;




  // Ajoute à ce component un evenement valueModified
   // Le rend public
  @Output("valueChange") valueModified=new EventEmitter<number>();
  @Output("valueIncrement") valueIncrement=new EventEmitter<{newValue:number;increment:number}>();
  canIncrement(n: number) {
    return !((this.min!=undefined && this.value + n < this.min) || (this.max!=undefined && this.value + n > this.max))
  }

  increment(n: number) {
    if (this.canIncrement(n)) {
      this.value += n;
      // Changement de value => déclenchement de l'évènement valueModified
      // $event => this.value
      this.valueModified.emit(this.value);
      this.valueIncrement.emit({newValue:this.value,increment:n})

    }
  }
}
