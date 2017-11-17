import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components for our router to navigate to
import { HomeComponent } from '../home/home.component';
import { SamplesComponent } from '../samples/samples.component';

const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'sample', component: SamplesComponent },
  // wildcard redirect route
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
