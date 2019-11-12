import { Injectable } from '@angular/core'
import { Image } from '@ks89/angular-modal-gallery'

@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  constructor() { }

  /**
   * create array of images Object from array of urls
   * @param imagesUrl array of images urls, required
   */
  createImagesArray(imagesUrl: Array<string>) {
    // return in case of invalid param
    if (!Array.isArray(imagesUrl)) { return [] }
    return imagesUrl.map((imgUrl, i) => {
      const tmpImg = new Image(i,
        { // plain
          img: imgUrl,
          alt: `image ${i}`,
          ariaLabel: `image ${i}`
        }
      )
      return tmpImg
    })
  }
}
