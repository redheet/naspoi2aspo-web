import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerNewsletterComponent } from './inner-newsletter.component';

describe('InnerNewsletterComponent', () => {
  let component: InnerNewsletterComponent;
  let fixture: ComponentFixture<InnerNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
