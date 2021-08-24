import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFourComponent } from './header-four.component';

describe('HeaderFourComponent', () => {
  let component: HeaderFourComponent;
  let fixture: ComponentFixture<HeaderFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
