import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// import { HttpClientModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { ChambreComponent } from './composants/chambre/chambre.component';
import { GestionResaComponent } from './composants/gestion-resa/gestion-resa.component';
import { GestChambreComponent } from './composants/gest-chambre/gest-chambre.component';
import { FooterComponent } from './composants/footer/footer.component';
import { AjouterunechambreComponent } from './composants/ajouterunechambre/ajouterunechambre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChambreComponent,
    GestionResaComponent,
    GestChambreComponent,
    FooterComponent,
    AjouterunechambreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
