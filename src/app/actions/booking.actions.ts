import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { IBooking } from '../models/booking.model'

export enum BookingActionTypes {
  LoadBookingsInit = '[Booking] inititate Load Bookings',
  LoadBookings = '[Booking] Load Bookings',
  InitAddBooking = '[Booking] Initiate Add Booking',
  AddBooking = '[Booking] Add Booking',
  AddBookingSuccess = '[Booking] Add Booking succeeded',
  AddBookingFailure = '[Booking] Add Booking failed',
  UpsertBooking = '[Booking] Upsert Booking',
  UpdateBooking = '[Booking] Update Booking',
  DeleteBooking = '[Booking] Delete Booking',
  DeleteBookings = '[Booking] Delete Bookings',
  ClearBookings = '[Booking] Clear Bookings'
}

export class LoadBookingsInit implements Action {
  readonly type = BookingActionTypes.LoadBookingsInit
}

export class LoadBookings implements Action {
  readonly type = BookingActionTypes.LoadBookings
  constructor(public payload: { bookings: IBooking[], subscribed?: boolean }) { }
}

export class InitAddBooking implements Action {
  readonly type = BookingActionTypes.InitAddBooking
}
export class AddBooking implements Action {
  readonly type = BookingActionTypes.AddBooking

  constructor(public payload: { booking: IBooking }) { }
}

export class AddBookingSuccess implements Action {

  readonly type = BookingActionTypes.AddBookingSuccess

  constructor(public payload: { booking: IBooking }) { }
}
export class AddBookingFailure implements Action {
  readonly type = BookingActionTypes.AddBookingFailure

  constructor(public payload: { booking: IBooking }) { }
}


export class UpsertBooking implements Action {
  readonly type = BookingActionTypes.UpsertBooking

  constructor(public payload: { booking: IBooking }) { }
}



export class UpdateBooking implements Action {
  readonly type = BookingActionTypes.UpdateBooking

  constructor(public payload: { booking: Update<IBooking> }) { }
}



export class DeleteBooking implements Action {
  readonly type = BookingActionTypes.DeleteBooking

  constructor(public payload: { id: string }) { }
}

export class DeleteBookings implements Action {
  readonly type = BookingActionTypes.DeleteBookings

  constructor(public payload: { ids: string[] }) { }
}

export class ClearBookings implements Action {
  readonly type = BookingActionTypes.ClearBookings
}

export type BookingActions =
  LoadBookings
  | InitAddBooking
  | AddBookingSuccess
  | AddBookingFailure
  | LoadBookingsInit
  | AddBooking
  | UpsertBooking
  | UpdateBooking
  | DeleteBooking
  | DeleteBookings
  | ClearBookings
