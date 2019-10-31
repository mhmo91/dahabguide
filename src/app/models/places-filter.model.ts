export interface IPlacesFilter {
    types: Array<string>
    bedrooms: number
    adultGuests: number
    longTermOnly: boolean
    date: any,
    budget: number

}

export class PlacesFilter implements IPlacesFilter {
    constructor(
        public types = [], public bedrooms = 1, public adultGuests = 1,
        public longTermOnly = false, public date = null, public budget = null
    ) {

    }
}
