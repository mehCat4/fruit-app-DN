import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Default path takes you to about use
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // Route for Apples

  // Route for Citrus

  // Route for Berries
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
