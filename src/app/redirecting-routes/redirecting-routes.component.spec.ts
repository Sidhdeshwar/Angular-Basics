import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectingRoutesComponent } from './redirecting-routes.component';

describe('RedirectingRoutesComponent', () => {
  let component: RedirectingRoutesComponent;
  let fixture: ComponentFixture<RedirectingRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectingRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectingRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
