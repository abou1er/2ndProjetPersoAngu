import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestChambreComponent } from './gest-chambre.component';

describe('GestChambreComponent', () => {
  let component: GestChambreComponent;
  let fixture: ComponentFixture<GestChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestChambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
