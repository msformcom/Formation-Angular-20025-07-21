import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Travel } from '../models/travel';
import {Guid} from "guid-typescript";
@Injectable()
export class DataRamService extends DataService {
  override async updateTravelAsync(id: string, t: Travel): Promise<Travel> {
    return Promise.reject(new Error());
    let travel=await this.getTravelAsync(id);
    Object.assign(travel,t);
    return travel

  }
  data: Travel[]=   [
       {id:"1",label:"Montreux",prix:1000.1,allIncluded:true},
        {id:"2",label:"Montreux by night",prix:1199.1,allIncluded:true},
        {id:"3",label:"Rome un matin d'été brumeux et calme avec un café dans la main",prix:500.123456,allIncluded:false},
  ]
  // Methode async qui renvoit les données 
  override getTravelsAsync(search: string=""): Promise<Travel[]> {

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.data.filter(c=>c.label.indexOf(search)>-1));
      }, 1000);
    })
    return Promise.resolve(this.data.filter(c=>c.label.indexOf(search)>-1));
  }
  override getTravelAsync(id: string): Promise<Travel> {
    let t=this.data.find(c=>c.id==id);
    if(!t){
      return Promise.reject(new Error("Non trouvé"));
    }
    else{
      return Promise.resolve(t);
    }
  }
  override createTravelAsync(t: Travel): Promise<string> {
    throw new Error('Method not implemented.');
  }

  constructor() { 
    super();
  }
}
