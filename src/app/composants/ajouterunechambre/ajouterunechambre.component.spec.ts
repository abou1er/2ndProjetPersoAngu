import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterunechambreComponent } from './ajouterunechambre.component';

describe('AjouterunechambreComponent', () => {
  let component: AjouterunechambreComponent;
  let fixture: ComponentFixture<AjouterunechambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterunechambreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterunechambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
