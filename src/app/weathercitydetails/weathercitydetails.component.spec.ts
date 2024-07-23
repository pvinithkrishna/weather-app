import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercitydetailsComponent } from './weathercitydetails.component';

describe('WeathercitydetailsComponent', () => {
  let component: WeathercitydetailsComponent;
  let fixture: ComponentFixture<WeathercitydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeathercitydetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathercitydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
