import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFiveComponent } from './footer-five.component';

describe('FooterFiveComponent', () => {
  let component: FooterFiveComponent;
  let fixture: ComponentFixture<FooterFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
