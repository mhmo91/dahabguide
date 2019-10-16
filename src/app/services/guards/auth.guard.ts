import { IUser, Role } from 'src/app/models/user.model'
import { Injectable } from '@angular/core'
import { Router, CanLoad } from '@angular/router'
import { Observable, of } from 'rxjs'
import { take, map, tap, skip, switchMap, filter } from 'rxjs/operators'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'
import { ofType } from '@ngrx/effects'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<AppState>, private router: Router) { }
  canLoad(next, state): Observable<boolean> {
    return this.store.select('user').pipe(
      filter((user: any) => !user.loading),
      take(1),
      map((user: IUser) => {
        if (Array.isArray(user.roles) && user.roles.includes(Role.Host)) {
          return true
        } else {
          this.router.navigate(['/landing'])
          return false
        }
      })
    )
  }
}
