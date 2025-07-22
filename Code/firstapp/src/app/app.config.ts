import { ApplicationConfig, DEFAULT_CURRENCY_CODE, EnvironmentProviders, LOCALE_ID, Provider, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EllipsisPipeMaxCaracters } from './pipes/ellipsis.pipe';
import { registerLocaleData } from '@angular/common';

// Import des informations de localisation françaises
import locale_fr from "@angular/common/locales/fr"
import { DataService } from '../services/data-service';
import { DataRamService } from '../services/data-ram.service';

// Ajouter les locales que je vais utiliser dans mon appli
registerLocaleData(locale_fr, "fr-FR");

const services: (Provider | EnvironmentProviders)[] = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  // Association entre demande pour DataService
  // et création d'une instance de DataRamService (singleton)

  { provide: LOCALE_ID, useValue: "fr-FR" },
  { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
  // Dépendance définie par Value => Valeu fixe définie au moment du démarrage
  //{ provide:EllipsisPipeMaxCaracters, useValue:new Date().getMinutes() %2==0?10:20},
  //  Dépendance définie par Value => fonction exécutée pour obtenir la valeur lors de la première demande
  //{ provide:EllipsisPipeMaxCaracters, useValue:()=>new Date().getMinutes() %2==0?10:20},
  // Valeur définie par factory => recalculée à chaque demande
  { provide: EllipsisPipeMaxCaracters, useFactory: () => new Date().getMinutes() % 2 == 0 ? 10 : 20 },
// { provide: DataService, useClass: DataRamService, multi:true }
// { provide: DataService, useClass: DataRamService, multi:true }

]
if (true) {
  services.push({ provide: DataService, useClass: DataRamService })
}


export const appConfig: ApplicationConfig = {
  providers: services
};
