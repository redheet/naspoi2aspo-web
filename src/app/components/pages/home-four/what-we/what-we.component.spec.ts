import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeComponent } from './what-we.component';

describe('WhatWeComponent', () => {
  let component: WhatWeComponent;
  let fixture: ComponentFixture<WhatWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
