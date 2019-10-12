import * as hostWizardActions from './actions/host-wizard.actions'
import * as authActions from './../actions/auth.actions'
import { IUser, Role } from './../models/user.model'
import { pipe, Observable } from 'rxjs'
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../reducers'
import * as userActions from './../actions/user.actions'
import { map } from 'rxjs/operators'
import { IHostWizard } from './models/host-wizard'
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IAuthState } from '../models/auth.state'
import { MatVerticalStepper } from '@angular/material/stepper'
import { IHostWizardState } from './reducers'

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
  secondFormGroup: FormGroup
  @ViewChild('stepper', { static: false }) stepper: MatVerticalStepper
  constructor(private store: Store<AppState & IHostWizardState>, private formBuilder: FormBuilder) {
    this.store.dispatch(new hostWizardActions.GetHostWizardState())
    this.store.select('hostWizard').subscribe(result => this.wizard = result)
  }

  ngOnInit() {
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
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
