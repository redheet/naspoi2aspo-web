import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSevenComponent } from './header-seven.component';

describe('HeaderSevenComponent', () => {
  let component: HeaderSevenComponent;
  let fixture: ComponentFixture<HeaderSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
