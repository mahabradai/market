import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsModule } from './fruits/fruits.module';
import { ClientModule } from './client/client.module'; // Ajout de la ligne d'importation
import { FactureModule } from './facture/facture.module';
import { CategoryModule } from './category/category.module';
import { VegetablesModule } from './vegetables/vegetables.module';
import { ReviewModule } from './review/review.module';
import { QualitycontrolModule } from './qualitycontrol/qualitycontrol.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FruitsModule,
    ClientModule, // Ajout du module ClientModule
    FactureModule,
    CategoryModule,
    VegetablesModule,
    ReviewModule,
    QualitycontrolModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }