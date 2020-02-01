import { Pipe, PipeTransform } from '@angular/core'
import { IPlaceType } from 'src/app/models/resources.model'
import { IPlace } from 'src/app/models/place.model'
import { IPlacesFilter } from '../../models/places-filter.model'

@Pipe({
  name: 'places'
})
export class PlacesPipe implements PipeTransform {

  transform(places: IPlace[], filter: IPlacesFilter): any {
    let filterPlaces = places
    console.log(filter)
    if (filter) {
      filterPlaces = places.filter((place) => {
        let match = true
        if (match && Array.isArray(filter.types) && filter.types.length > 0) { // filter by types
          match = filter.types.includes(place.type)
        }
        if (match && filter.longTermOnly) {
          match = place.price && place.price.longTerm
        }
        return match
      })
    }
    return filterPlaces
  }

}
