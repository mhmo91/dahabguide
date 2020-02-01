import { Pipe, PipeTransform } from '@angular/core'
import { IPlaceType } from 'src/app/models/resources.model'

@Pipe({
  name: 'placesTypes'
})
export class PlacesTypesPipe implements PipeTransform {

  transform(placesTypes: Array<IPlaceType>, ...args: any[]): any {
    let response = placesTypes
    if (Array.isArray(args)) {
      Object.entries(args[0]).forEach((v) => {
        response = response.filter((place) => place[v[0]] === v[1])
      })
    }
    return response
  }

}
