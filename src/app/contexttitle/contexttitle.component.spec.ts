import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContexttitleComponent } from './contexttitle.component';

describe('ContexttitleComponent', () => {
  let component: ContexttitleComponent;
  let fixture: ComponentFixture<ContexttitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContexttitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContexttitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
