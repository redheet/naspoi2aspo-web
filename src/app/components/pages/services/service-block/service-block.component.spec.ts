import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBlockComponent } from './service-block.component';

describe('ServiceBlockComponent', () => {
  let component: ServiceBlockComponent;
  let fixture: ComponentFixture<ServiceBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
