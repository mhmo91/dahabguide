import { Dictionary } from '@ngrx/entity'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as userSelectors from './user.selector'
import { IBooking } from '../models/booking.model'
import * as bookingReducer from '../reducers/booking.reducer'


const getBookingsFeature = createFeatureSelector(bookingReducer.bookingsFeatureKey)

const isLoading = createSelector(getBookingsFeature, (bookingsState: bookingReducer.IBookingsState) => bookingsState.loading)

const selectAllBookings = createSelector(getBookingsFeature, bookingReducer.selectAll)
const selectBookingsFilter = createSelector(getBookingsFeature,
    (
        (BookingsFeature: bookingReducer.IBookingsState) => BookingsFeature.bookingsFilter
    ))

// select booking by the booking id
const getBookingById = createSelector(
    selectAllBookings,
    (bookings: Array<IBooking>, props: { id: string }) =>
        bookings.find(p => p.id === props.id)
)

// select all bookings by creator id
const getBookingsByCreatorId = createSelector(
    selectAllBookings,
    (bookings: Array<IBooking>, props: { creatorId: string }) => bookings.filter(booking => booking.creatorId === props.creatorId)
)

// select all bookings for authenticated users
const myCreatedBookings = createSelector(
    selectAllBookings,
    userSelectors.selectUserId,
    (bookings: Array<IBooking>, creatorId: string) => bookings.filter((booking) => booking.creatorId === creatorId)
)

// select current active booking
const getCurrentBooking = createSelector(getBookingsFeature, (bookingState: bookingReducer.IBookingsState) => {
    return bookingState.currentBooking
})


export {
    getBookingsFeature, selectAllBookings, getBookingById,
    getBookingsByCreatorId, myCreatedBookings,
    getCurrentBooking, isLoading, selectBookingsFilter
}

