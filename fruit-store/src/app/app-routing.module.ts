import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import {FruitDetailsComponent} from "./fruit-details/fruit-details.component";


const routes: Routes = [
  // Home page
  {
    path: 'home-page',
    component: HomePageComponent,
  },

  // Fruit details
  {
    path: 'fruit-details/:id',
    component: FruitDetailsComponent,
  },
  // Default path takes you to home page
  {
    path: '**',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
