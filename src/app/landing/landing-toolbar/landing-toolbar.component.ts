import * as userActions from './../../actions/user.actions'
import * as authActions from './../../actions/auth.actions'
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/reducers'
import { Observable } from 'rxjs'
import { IUser, Role } from 'src/app/models/user.model'
import { IAuthState } from 'src/app/models/auth.state'
import { map } from 'rxjs/operators'

@Component({
  selector: 'dahab-landing-toolbar',
  templateUrl: './landing-toolbar.component.html',
  styleUrls: ['./landing-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter()
  user$: Observable<IUser>
  user: IUser
  auth$: Observable<IAuthState>
  constructor(private store: Store<AppState>) {
    this.user$ = this.store.select('user')
    this.auth$ = this.store.select('auth')
  }

  ngOnInit() {
    this.user$.subscribe((user: IUser) => this.user = user)
  }

  signOut() {
    this.store.dispatch(new userActions.Logout())
  }

  async logInWithFacebook() {
    this.store.dispatch(new authActions.FacebookLogin())
  }
  async logInWithgoogle() {
    this.store.dispatch(new authActions.GoogleLogin())
  }
  get IsHost(): boolean {
    return Array.isArray(this.user.roles) && this.user.roles.includes(Role.Host)
  }
}
