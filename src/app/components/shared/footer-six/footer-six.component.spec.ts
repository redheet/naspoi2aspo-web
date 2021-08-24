import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSixComponent } from './footer-six.component';

describe('FooterSixComponent', () => {
  let component: FooterSixComponent;
  let fixture: ComponentFixture<FooterSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
