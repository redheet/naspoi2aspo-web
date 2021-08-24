import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCtaComponent } from './page-cta.component';

describe('PageCtaComponent', () => {
  let component: PageCtaComponent;
  let fixture: ComponentFixture<PageCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
