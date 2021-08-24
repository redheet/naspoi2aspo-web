import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSixComponent } from './home-six.component';

describe('HomeSixComponent', () => {
  let component: HomeSixComponent;
  let fixture: ComponentFixture<HomeSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
