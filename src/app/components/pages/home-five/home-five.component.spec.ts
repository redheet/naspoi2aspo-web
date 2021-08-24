import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFiveComponent } from './home-five.component';

describe('HomeFiveComponent', () => {
  let component: HomeFiveComponent;
  let fixture: ComponentFixture<HomeFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
