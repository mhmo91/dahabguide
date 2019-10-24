import { ApiModel } from 'src/app/models/api.model'

export interface IPlace extends ApiModel {
  id?: string
  creatorId: string
  type: string // like apartment, room..
  inside?: string // if the place to be rented is a part of bigger entity like a hostel or apartment
  brandName?: string
  layout: {
    beds: number,
    bedrooms: number,
    bathrooms: number
  }
  guests: {
    adults: number,
    children: number, // less than 12 years old
    Infants?: number // less than 2 years old
  }

  //
  amenities: Array<string>
  facilities: Array<string>
  description: string
  //
  price: {
    night: number,
    minNights?: number,
    month?: number,
    minMonths?: number
  }
  instantBooking: boolean
  //
  accessibility: boolean
  location: {
    latitude: string,
    longitude: string
  }
  photos: Array<string>
}
