import { IPlaceWizard, IPlaceWizardState } from '../place-wizard-state/place-wizard.reducer'
import { AppState } from 'src/app/reducers'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { AngularFirestore } from '@angular/fire/firestore'
import { IPlace, Place } from 'src/app/models/place.model'
import { Observable } from 'rxjs'
import * as fromPlaceWizard from '../place-wizard-state/place-wizard.actions'
import * as fromUserState from 'src/app/reducers/user.reducer'

@Component({
  selector: 'dahab-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {

  creatorId: string // get current userId incase if this is an attempt to add
  place: Partial<IPlace>
  placeWizard$: Observable<IPlaceWizard>
  constructor(private store: Store<AppState & IPlaceWizardState>, private afs: AngularFirestore) {
    this.place = new Place()
    console.log(this.place)
    this.place.id = this.afs.createId()
    this.store.select(fromUserState.selectUserId).subscribe((res: any) => {
      this.place.creatorId = res
    })
    this.placeWizard$ = this.store.select('placeWizard')
  }

  ngOnInit() {
    this.store.dispatch(new fromPlaceWizard.AddNewPlaceInit())
  }

}
