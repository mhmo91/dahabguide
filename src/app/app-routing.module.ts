import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './services/guards/auth.guard'


const routes: Routes = [
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'become-host', loadChildren: () => import('./host-signup/host-signup.module').then(m => m.HostSignupModule) },
  { path: 'restrict', canLoad: [AuthGuard], loadChildren: () => import('./restrict/restrict.module').then(m => m.RestrictModule) },

  { path: '**', redirectTo: 'landing' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
