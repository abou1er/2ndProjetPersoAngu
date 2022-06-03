import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionResaComponent } from './gestion-resa.component';

describe('GestionResaComponent', () => {
  let component: GestionResaComponent;
  let fixture: ComponentFixture<GestionResaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionResaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionResaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
