import { Travel } from "../models/travel";

// Cette classe me sert d'injection Token
// pour obtenir des instances de classes avec des méthodes définies
// pas d'implémentation, juste des déclarations de méthode
// interface non utilisable en ts car non existant en js
export abstract class DataService {
    // Dans la mesure où les données peuvent être obtenues par requete http sur une api
    // methode async
    abstract getTravelsAsync(search:string) : Promise<Travel[]>;
    abstract getTravelAsync(id:string) : Promise<Travel>;
    abstract createTravelAsync(t:Travel): Promise<string>; // return 
    // Implementation commune à toutes les classes filles
    async getTravelsCountAsync(search : string){
        return (await this.getTravelsAsync(search)).length;
    }
}
