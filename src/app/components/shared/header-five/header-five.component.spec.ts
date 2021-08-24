import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFiveComponent } from './header-five.component';

describe('HeaderFiveComponent', () => {
  let component: HeaderFiveComponent;
  let fixture: ComponentFixture<HeaderFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
