import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { MatGridListModule } from '@angular/material/grid-list';
import { AfricaComponent } from './africa/africa.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AmericaComponent } from './america/america.component';
import { AsiaComponent } from './asia/asia.component';
import { AfricaDetailsComponent } from './africa/africa-details/africa-details.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AfricaComponent,
    AmericaComponent,
    AsiaComponent,
    AfricaDetailsComponent,
  ],

  imports: [
    ModalModule.forRoot(),
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    NgxDatatableModule,
  ],

  providers: [],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
