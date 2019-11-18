import { Action } from '@ngrx/store'
import { Update } from '@ngrx/entity'
import { IBooking } from '../models/booking.model'

export enum BookingActionTypes {
  LoadBookingsInit = '[Booking] inititate Load Bookings',
  LoadBookings = '[Booking] Load Bookings',
  AddBooking = '[Booking] Add Booking',
  UpsertBooking = '[Booking] Upsert Booking',
  AddBookings = '[Booking] Add Bookings',
  UpsertBookings = '[Booking] Upsert Bookings',
  UpdateBooking = '[Booking] Update Booking',
  UpdateBookings = '[Booking] Update Bookings',
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

export class AddBooking implements Action {
  readonly type = BookingActionTypes.AddBooking

  constructor(public payload: { booking: IBooking }) { }
}

export class UpsertBooking implements Action {
  readonly type = BookingActionTypes.UpsertBooking

  constructor(public payload: { booking: IBooking }) { }
}

export class AddBookings implements Action {
  readonly type = BookingActionTypes.AddBookings

  constructor(public payload: { bookings: IBooking[] }) { }
}

export class UpsertBookings implements Action {
  readonly type = BookingActionTypes.UpsertBookings

  constructor(public payload: { bookings: IBooking[] }) { }
}

export class UpdateBooking implements Action {
  readonly type = BookingActionTypes.UpdateBooking

  constructor(public payload: { booking: Update<IBooking> }) { }
}

export class UpdateBookings implements Action {
  readonly type = BookingActionTypes.UpdateBookings

  constructor(public payload: { bookings: Update<IBooking>[] }) { }
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
  | LoadBookingsInit
  | AddBooking
  | UpsertBooking
  | AddBookings
  | UpsertBookings
  | UpdateBooking
  | UpdateBookings
  | DeleteBooking
  | DeleteBookings
  | ClearBookings
