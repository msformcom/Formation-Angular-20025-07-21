import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelListComponent } from './page-travel-list.component';

describe('PageTravelListComponent', () => {
  let component: PageTravelListComponent;
  let fixture: ComponentFixture<PageTravelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravelListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
