import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildCardPageNotFoundComponent } from './wild-card-page-not-found.component';

describe('WildCardPageNotFoundComponent', () => {
  let component: WildCardPageNotFoundComponent;
  let fixture: ComponentFixture<WildCardPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildCardPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildCardPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
