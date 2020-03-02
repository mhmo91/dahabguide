import { ApiModel } from 'src/app/models/api.model'

export interface IPlaceLocation {
  latitude: number,
  longitude: number
}
export interface IPlace extends ApiModel {
  id?: string
  creatorId: string
  type: string // like apartment, room..
  inside?: string // if the place to be rented is a part of bigger entity like a hostel or apartment
  brandName?: string
  layout: {
    beds: number,
    bedrooms: number,
    bathrooms: number,
    privateGarden: boolean
  }
  location: IPlaceLocation
  photos: Array<any>
  guests?: {
    adults: number,
    children?: number, // less than 12 years old
    Infants?: number // less than 2 years old
  }

  //
  amenities: Array<string>
  facilities: Array<string>
  description: string

  address?: {
    disrtict?: string
    streetAddress?: string
    city?: string
    governorate?: string
    country?: string
  }
  // pricing
  price: {
    longTerm?: boolean
    shortTerm?: boolean
    perNight: number,
    minNights?: number,
    perMonth?: number,
    minMonths?: number
  }
  instantBooking: boolean
  //
  goodDeal?: boolean
}


export class Place implements Partial<IPlace> {
  constructor(
    public type = null,
    public inside = null,
    public brandName = null,
    public layout = {
      beds: 1,
      bedrooms: 1,
      bathrooms: 1,
      privateGarden: false
    },
    public guests = {
      adults: 2,
      children: 2,
      infants: 1
    },
    public location = {
      latitude: null,
      longitude: null
    }
  ) {

  }
}
