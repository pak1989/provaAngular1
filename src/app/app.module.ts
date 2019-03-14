import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { AnnuncioDettaglioComponent } from './annuncio-dettaglio/annuncio-dettaglio.component';
import { HomeComponent } from './home/home.component';
import { InsertAnnuncioFormComponent } from './insert-annuncio-form/insert-annuncio-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnnunciComponent,
    AnnuncioDettaglioComponent,
    HomeComponent,
    InsertAnnuncioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
