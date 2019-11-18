export interface IBooking {
  loaded: boolean
  id: string
  creatorId: string
  placeId: string
  fromDate: any
  toDate: any

  // cost
  rentalType?: RentalTypes // longterm OR short term
  nightlyRate?: number
  monthlyRate?: number
  serviceFee?: number
}

export enum RentalTypes {
  shortTerm = 'shortTerm',
  longTerm = 'LongTerm'
}
