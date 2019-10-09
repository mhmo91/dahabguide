import { IUser, Role } from 'src/app/models/user.model'
import { Injectable } from '@angular/core'
import { Router, CanLoad } from '@angular/router'
import { Observable } from 'rxjs'
import { take, map, tap } from 'rxjs/operators'
import { AuthService } from '../auth.service'
import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private store: Store<AppState>) { }
  canLoad(next, state): Observable<boolean> {
    return this.store.select('user').pipe(
      take(1),
      map((user: IUser) => {
        if (user.roles.includes(Role.Host)) {
          return true
        } else {
          return false
        }
      })
    )
  }
}
