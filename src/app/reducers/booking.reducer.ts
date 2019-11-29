import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { IBooking } from '../models/booking.model'
import { BookingActions, BookingActionTypes } from '../actions/booking.actions'

export const bookingsFeatureKey = 'bookings'

export interface IBookingsState extends EntityState<IBooking> {
  // additional properties
  bookingsFilter?
  loading?
  subscribed?
  currentBooking?: Partial<IBooking>
}
export const adapter: EntityAdapter<IBooking> = createEntityAdapter<IBooking>()

export const initialState: IBookingsState = adapter.getInitialState({
  // additional entity state properties
  subscribed: false
})

export function reducer(
  state = initialState,
  action: BookingActions
): IBookingsState {
  switch (action.type) {
    case BookingActionTypes.InitAddBooking: {
      return { ...state, currentBooking: {} }
    }

    case BookingActionTypes.AddBooking: {
      return { ...state, currentBooking: { ...action.payload.booking, saving: true } }
    }


    case BookingActionTypes.AddBookingSuccess: {
      return adapter.addOne(action.payload.booking, {
        ...state, currentBooking: { ...state.currentBooking, saving: false, error: action.payload.booking.error }
      })
    }

    case BookingActionTypes.UpsertBooking: {
      return adapter.upsertOne(action.payload.booking, state)
    }


    case BookingActionTypes.UpdateBooking: {
      return adapter.updateOne(action.payload.booking, state)
    }

    case BookingActionTypes.DeleteBooking: {
      return adapter.removeOne(action.payload.id, state)
    }

    case BookingActionTypes.DeleteBookings: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case BookingActionTypes.LoadBookingsInit:
      return { ...state, loading: state.subscribed ? false : true }

    case BookingActionTypes.LoadBookings: {
      return adapter.addAll(action.payload.bookings,
        {
          ...state,
          subscribed: action.payload.subscribed ? action.payload.subscribed : state.subscribed
        })
    }

    case BookingActionTypes.ClearBookings: {
      return adapter.removeAll(state)
    }

    default: {
      return state
    }
  }
}


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()
