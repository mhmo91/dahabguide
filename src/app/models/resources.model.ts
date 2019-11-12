import { ApiModel } from './api.model'

export interface IPlaceType {
    name_en: string
    id: string
    canBeBooked?: boolean
    standAlone?: boolean
}

export interface IAmenity {
    name_en: string
    id: string
    icon: string
}

export interface IFacility {
    name_en: string
    id: string
}

export interface IResources extends ApiModel {
    placesTypes: Array<IPlaceType>
    amenities: Array<IAmenity>
    facilities: Array<IFacility>
}

export class Resources implements IResources {
    constructor(
        public placesTypes: Array<IPlaceType> = [],
        public amenities: Array<IAmenity> = [],
        public facilities: Array<IFacility> = []
    ) {

    }
}
