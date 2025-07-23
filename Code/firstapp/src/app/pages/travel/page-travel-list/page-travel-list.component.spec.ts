import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelListComponent } from './page-travel-list.component';
import { TravelListComponent } from '../../../travel/travel-list/travel-list.component';
import { TravelItemLinkUrl } from '../../../travel/travel-list-item/travel-list-item.component';
import { DataService } from '../../../../services/data-service';
import { DataRamService } from '../../../../services/data-ram.service';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EllipsisPipeMaxCaracters } from '../../../pipes/ellipsis.pipe';

describe('PageTravelListComponent', () => {
  let component: PageTravelListComponent;
  let fixture: ComponentFixture<PageTravelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravelListComponent, RouterModule, CommonModule],
      providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        { provide: EllipsisPipeMaxCaracters, useValue: 10 },
        { provide: TravelItemLinkUrl, useValue: (id: string) => "/travel/edit/" + id },
        {
          provide: DataService, useValue: {
            getTravelsAsync: (s: string) => new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(
                  [{ id: "1", label: "Montreux", prix: 1000.1, allIncluded: true },
                { id: "2", label: "Montreux by night", prix: 1199.1, allIncluded: true },
                { id: "3", label: "Rome un matin d'été brumeux et calme avec un café dans la main", prix: 500.123456, allIncluded: false }
                ])
              }
                , 100)
            })
          }},

         { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" },
        { provide: ActivatedRoute, useValue: null }
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(PageTravelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).withContext("Création du component").toBeTruthy();
    // Faire un premier rendu du component 
    fixture.detectChanges();
    // Verifier la presence du spinner

    // Obtenir la reference de l'élément correspondant ayu component
    let element = fixture.elementRef.nativeElement as HTMLElement;
    let spinner = element.querySelector("[data-test-spinner]");
    expect(spinner).withContext("Le spinner").toBeTruthy();
    // Attente de la fin de promesse correspondant au service
    await fixture.whenStable();
    // nouveau rendu
    fixture.detectChanges();
    spinner = element.querySelector("[data-test-spinner]");
    expect(spinner).withContext("Le spinner").toBeFalsy();


    let counter = element.querySelector("[data-test-counter]");
    expect(counter).withContext("Le compteur").toBeTruthy();

    let lis = element.querySelectorAll("[data-test-item]");
    expect(lis.length).toBe(3);



  });
});
