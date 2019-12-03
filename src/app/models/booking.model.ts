import { ApiModel } from './api.model'

export interface IBooking extends ApiModel {
  loaded?: boolean
  id: string
  creatorId: string
  placeId: string
  fromDate: any
  toDate?: any
  stayPeriod: string

  // cost
  rentalType: RentalTypes // longterm OR short term
  nightlyRate?: number
  monthlyRate?: number
  serviceFee?: number
}

export enum RentalTypes {
  shortTerm = 'shortTerm',
  longTerm = 'LongTerm'
}
