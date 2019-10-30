import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'not'
})
export class NotPipe implements PipeTransform {

  transform(items: any, ...args: any[]): any {
    let filteredItems = items
    if (Array.isArray(args)) {
      Object.entries(args[0]).forEach((att) => {
        if (Array.isArray(items)) {
          filteredItems = (filteredItems as Array<any>).filter(item => item[att[0]] !== att[1])
        }
      })
    }

    return filteredItems
  }

}
