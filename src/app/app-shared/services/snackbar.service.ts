import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private matSnackBar: MatSnackBar) { }

  error(message, action?, duration = 5000) {
    this.matSnackBar.open(message, action ? action : null, {
      duration: action ? null : duration,
      verticalPosition: 'bottom',
      panelClass: ['text-white', 'bg-danger'],
      politeness: 'assertive'
    })
  }
  success(message, action?, duration = 5000) {
    this.matSnackBar.open(message, action ? action : null, {
      duration: action ? null : duration,
      verticalPosition: 'bottom',
      panelClass: ['text-white', 'bg-success'],
      politeness: 'assertive'
    })

  }
  warning(message, action?, duration = 5000) {
    this.matSnackBar.open(message, action ? action : null, {
      duration: action ? null : duration,
      verticalPosition: 'bottom',
      panelClass: ['text-white', 'bg-orange'],
      politeness: 'assertive'
    })
  }
  inform(message, action?, duration = 5000) {
    this.matSnackBar.open(message, action ? action : null, {
      duration: action ? null : duration,
      verticalPosition: 'bottom',
      panelClass: ['text-white', 'bg-navy-blue'],
      politeness: 'assertive'
    })
  }

}
