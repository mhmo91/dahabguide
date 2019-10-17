import { ApiModel } from 'src/app/models/api.model'

export interface Place extends ApiModel {
  id: string
  placeType: string
  amenities: Array<any>
  facilities: Array<any>

}
