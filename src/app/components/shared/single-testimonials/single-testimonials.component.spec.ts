import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestimonialsComponent } from './single-testimonials.component';

describe('SingleTestimonialsComponent', () => {
  let component: SingleTestimonialsComponent;
  let fixture: ComponentFixture<SingleTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
