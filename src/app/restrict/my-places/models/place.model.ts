import { ApiModel } from 'src/app/models/api.model'

export interface Place extends ApiModel {
  id: string
  type: string // like apartment, room..
  inside?: string // if the place to be rented is a part of bigger entity like a hostel or apartment
  detailes: {
    beds: number,
    bedrooms: number,
    bathrooms: number
  }
  amenities: Array<string>
  facilities: Array<string>
  instantBooking: boolean
  guests: {
    adults: number,
    children: number,
    Infants?: number
  }
  price: {
    night: number,
    minNights: number,
    month: number,
    minMonths: number
  }
  accessibility: boolean
}
