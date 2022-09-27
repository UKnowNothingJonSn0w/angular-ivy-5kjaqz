import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { HomeComponent } from './home/home.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { AfricaDetailsComponent } from './africa/africa-details/africa-details.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'africa', component: AfricaComponent },
      { path: 'america', component: AmericaComponent },
      { path: 'asia', component: AsiaComponent },
      { path: 'africa-details/:name', component: AfricaDetailsComponent },
      { path: 'europe', component: EuropeComponent },
      { path: 'oceania', component: OceaniaComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
