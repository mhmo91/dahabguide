import { AngularFirestore } from '@angular/fire/firestore'
import { RentalTypes } from 'src/app/models/booking.model'
import { Component, OnInit, Input } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'dahab-add-new-booking',
  templateUrl: './add-new-booking.component.html',
  styleUrls: ['./add-new-booking.component.scss']
})
export class AddNewBookingComponent implements OnInit {
  rentalTypes = RentalTypes
  addBookingForm: FormGroup
  id: string
  @Input() placeId: string
  @Input() creatorId: string
  constructor(private formBuilder: FormBuilder, private afs: AngularFirestore) {
    this.constructForm()
    this.id = this.afs.createId()
  }

  constructForm() {
    this.addBookingForm = this.formBuilder.group({
      rentalType: [this.rentalTypes.shortTerm, Validators.required],
      fromDate: [null, Validators.required],
      toDate: [null]
    })
  }
  ngOnInit() {
  }

}
