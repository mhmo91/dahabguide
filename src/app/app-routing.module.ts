import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ## using AngularFire guard ##
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLanding =  redirectUnauthorizedTo(['landing']);

const routes: Routes = [
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  
  // "...canActivate" is an angularfire guard function that Checking  the  authState
  { path: 'restrict', loadChildren: () => import('./restrict/restrict.module').then(m => m.RestrictModule), ...canActivate(redirectUnauthorizedToLanding )},
  { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
