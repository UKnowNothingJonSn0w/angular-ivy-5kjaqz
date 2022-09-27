import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { HomeComponent } from './home/home.component';
import { AfricaComponent } from './africa/africa.component';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { EuropeComponent } from './europe/europe.component';
import { OceaniaComponent } from './oceania/oceania.component';
import { AmericaDetailsComponent } from './america/america-details/america-details.component';

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
      { path: 'country-details/:name', component: CountryDetailsComponent },
      { path: 'europe', component: EuropeComponent },
      { path: 'oceania', component: OceaniaComponent },
      { path: 'america-details/:name', component: AmericaDetailsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
