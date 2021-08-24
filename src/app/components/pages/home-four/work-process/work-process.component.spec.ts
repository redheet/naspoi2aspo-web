import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessComponent } from './work-process.component';

describe('WorkProcessComponent', () => {
  let component: WorkProcessComponent;
  let fixture: ComponentFixture<WorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
