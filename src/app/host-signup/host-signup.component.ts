import { Observable } from 'rxjs'
import * as hostWizardActions from './actions/host-wizard.actions'
import * as authActions from './../actions/auth.actions'
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../reducers'
import { IHostWizard } from './models/host-wizard'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { MatVerticalStepper } from '@angular/material/stepper'
import { IHostWizardState } from './reducers'
import { IAuthState } from '../models/auth.state'

@Component({
  selector: 'dahab-host-signup',
  templateUrl: './host-signup.component.html',
  styleUrls: ['./host-signup.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
  }]

})
export class HostSignupComponent implements OnInit, AfterViewInit {
  wizard: Partial<IHostWizard>
  auth$: Observable<IAuthState>
  @ViewChild('stepper') stepper: MatVerticalStepper
  constructor(private store: Store<AppState & IHostWizardState>) {
    this.store.dispatch(new hostWizardActions.GetHostWizardState())
    this.auth$ = this.store.select('auth')

  }

  ngOnInit() {
    this.store.select('hostWizard').subscribe(result => {
      this.wizard = result
      if (this.stepper) {
        this.stepper.selectedIndex = this.wizard.currentStep
      }
    })
  }
  ngAfterViewInit(): void {

  }
  async logInWithFacebook() {
    this.store.dispatch(new authActions.FacebookLogin())
  }
  async logInWithgoogle() {
    this.store.dispatch(new authActions.GoogleLogin())
  }

}
