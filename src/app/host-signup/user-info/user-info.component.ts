import { Observable } from 'rxjs'
import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core'
import { Store } from '@ngrx/store'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IHostWizardState } from '../reducers'
import { IHostWizard } from '../models/host-wizard'
import { UpdateUser } from 'src/app/actions/user.actions'
import { Role, IUser } from 'src/app/models/user.model'
import { AppState } from 'src/app/reducers'

@Component({
  selector: 'dahab-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserInfoComponent implements OnInit, OnChanges {
  userFormGroup: FormGroup
  wizard: Partial<IHostWizard>
  user$: Observable<IUser>
  constructor(public store: Store<AppState & IHostWizardState>, private formBuilder: FormBuilder) {
    this.userFormGroup = this.formBuilder.group({
      displayName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required]
    })
    this.user$ = this.store.select('user')
  }

  ngOnInit() {
    this.store.select('hostWizard').subscribe((hostWizardState => {
      this.wizard = hostWizardState
      const user = hostWizardState.userInfo
      if (user) {
        this.userFormGroup.patchValue(user)
      }
    }))
  }

  ngOnChanges(changes) {
  }

  onSubmit() {
    const roles: Array<Role> = [Role.Host]
    this.store.dispatch(new UpdateUser({ uid: this.wizard.userInfo.uid, ...this.userFormGroup.value, roles }))

  }

}
