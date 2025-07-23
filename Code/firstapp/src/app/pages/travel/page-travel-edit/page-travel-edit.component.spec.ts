import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTravelEditComponent } from './page-travel-edit.component';

describe('PageTravelEditComponent', () => {
  let component: PageTravelEditComponent;
  let fixture: ComponentFixture<PageTravelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTravelEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTravelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
