import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnunciComponent } from './annunci/annunci.component';
import { AnnuncioDettaglioComponent } from './annuncio-dettaglio/annuncio-dettaglio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'annunci', component: AnnunciComponent},
  {path: 'annunci/:id', component: AnnuncioDettaglioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }