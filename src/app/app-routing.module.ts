import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterunechambreComponent } from './composants/ajouterunechambre/ajouterunechambre.component';
import { ChambreComponent } from './composants/chambre/chambre.component';
import { GestChambreComponent } from './composants/gest-chambre/gest-chambre.component';
import { GestionResaComponent } from './composants/gestion-resa/gestion-resa.component';
import { HomeComponent } from './composants/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chambre', component: ChambreComponent },
  { path: 'gestion-resa', component: GestionResaComponent },
  { path: 'gest-chambre', component: GestChambreComponent },
  { path: 'ajouterunechambre', component: AjouterunechambreComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
