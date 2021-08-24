import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamComponent } from './about-team.component';

describe('AboutTeamComponent', () => {
  let component: AboutTeamComponent;
  let fixture: ComponentFixture<AboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
