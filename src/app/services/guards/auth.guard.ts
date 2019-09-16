import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(next, state): Observable<boolean> {
    return this.auth.userObservable.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (loggedIn) {
          return true;
        } else {
          console.log('You are not authenticated, get out!');
          this.router.navigate(['/landing']);
          return false;
        }
      })
    );
  }
}
