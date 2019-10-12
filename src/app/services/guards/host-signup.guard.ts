import { AppState } from 'src/app/reducers'
import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { IUser, Role } from 'src/app/models/user.model'
import { map, take } from 'rxjs/operators'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class HostSignupGuard implements CanLoad {
  constructor(private store: Store<AppState>) { }
  canLoad(next, state): Observable<boolean> {
    return this.store.select('user').pipe(
      take(1),
      map((user: IUser) => {
        if (Array.isArray(user.roles) && user.roles.includes(Role.Host)) {
          return false
        } else {
          return true
        }
      })
    )
  }
}

