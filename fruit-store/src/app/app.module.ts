import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './core-components/header/header.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FruitDetailsComponent } from './fruit-details/fruit-details.component';
import {HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import { FruitSearchComponent } from './fruit-search/fruit-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    FruitDetailsComponent,
    FruitSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
