import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { IPlace, Place } from 'src/app/models/place.model'
import { Observable } from 'rxjs'
import { IPlaceWizard, IPlaceWizardState } from '../place-wizard-state/place-wizard.reducer'
import { AppState } from 'src/app/reducers'
import { Store, select } from '@ngrx/store'
import { placesSelector } from 'src/app/selectors'
import * as placeWizardActions from '../place-wizard-state/place-wizard.actions'
@Component({
  selector: 'dahab-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.scss']
})
export class EditPlaceComponent implements OnInit {


  creatorId: string // get current userId incase if this is an attempt to add
  place: Partial<IPlace>
  placeWizard$: Observable<IPlaceWizard>
  constructor(private store: Store<AppState & IPlaceWizardState & any>, private activatedRoute: ActivatedRoute) {
    this.place = new Place()

    this.activatedRoute.params.subscribe((res) => {
      this.store.pipe(select(placesSelector.getPlaceById, { id: res.id })).subscribe(p => {
        this.place = p
      })
    })
    this.placeWizard$ = this.store.select('placeWizard')

  }

  ngOnInit() {
    this.store.dispatch(new placeWizardActions.InitPlaceUpdateWizard())
  }

  updatePlaceWizard(ev) {
    this.store.dispatch(new placeWizardActions.UpdatePlaceWizard({ currentWizardStep: ev.selectedIndex }))
  }

}
