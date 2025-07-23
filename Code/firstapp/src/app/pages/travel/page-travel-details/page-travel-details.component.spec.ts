import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelDetailsComponent } from './page-travel-details.component';

describe('PageTravelDetailsComponent', () => {
  let component: PageTravelDetailsComponent;
  let fixture: ComponentFixture<PageTravelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
