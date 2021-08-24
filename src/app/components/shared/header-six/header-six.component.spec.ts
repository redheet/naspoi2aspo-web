import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSixComponent } from './header-six.component';

describe('HeaderSixComponent', () => {
  let component: HeaderSixComponent;
  let fixture: ComponentFixture<HeaderSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
