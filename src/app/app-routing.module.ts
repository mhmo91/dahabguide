import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './services/guards/auth.guard'
import { HostSignupGuard } from './services/guards/host-signup.guard'


const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'become-host', canLoad: [HostSignupGuard],
    loadChildren: () => import('./host-signup/host-signup.module').then(m => m.HostSignupModule)
  },
  {
    path: 'restrict', canLoad: [AuthGuard],
    loadChildren: () => import('./restrict/restrict.module').then(m => m.RestrictModule)
  },
  // default path // need to create 404 later
  { path: '**', redirectTo: 'landing/places' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
