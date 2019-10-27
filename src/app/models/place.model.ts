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
  longTerm?: boolean,
  instantBooking: boolean
  //
  accessibility: boolean
  location: {
    latitude: number,
    longitude: number
  }
  photos: Array<string>
}


export class Place implements Partial<IPlace> {
  constructor(
    public type = null,
    public inside = null,
    public brandName = null,
    public layout = {
      beds: 1,
      bedrooms: 1,
      bathrooms: 1
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
