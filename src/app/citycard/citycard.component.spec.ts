import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitycardComponent } from './citycard.component';

describe('CitycardComponent', () => {
  let component: CitycardComponent;
  let fixture: ComponentFixture<CitycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
