import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColsComponent } from './two-cols.component';

describe('TwoColsComponent', () => {
  let component: TwoColsComponent;
  let fixture: ComponentFixture<TwoColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoColsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
