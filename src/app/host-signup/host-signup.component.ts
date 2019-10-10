import { IUser } from './../models/user.model'
import { pipe, Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../reducers'
import * as userActions from './../actions/user.actions'
import { map } from 'rxjs/operators'
import { IHostWizard } from './models/host-wizard'

@Component({
  selector: 'dahab-host-signup',
  templateUrl: './host-signup.component.html',
  styleUrls: ['./host-signup.component.scss']
})
export class HostSignupComponent implements OnInit {
  user$: Observable<IUser>
  wizard$: Observable<IHostWizard>
  constructor(private store: Store<AppState & any>) {
    this.user$ = store.select('user')
    this.wizard$ = store.select('hostWizard')
  }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUser())

  }

}
