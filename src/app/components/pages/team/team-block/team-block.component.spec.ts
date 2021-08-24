import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamBlockComponent } from './team-block.component';

describe('TeamBlockComponent', () => {
  let component: TeamBlockComponent;
  let fixture: ComponentFixture<TeamBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
