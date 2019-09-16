import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) { }
  canLoad(next, state): Observable<boolean> {
    return this.auth.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        console.log('test 2222222222222222222');
        this.router.navigate(['/login']);
      })
    );
  }
}
