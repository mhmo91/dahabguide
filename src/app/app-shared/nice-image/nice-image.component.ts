import { Component, OnInit, Input } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'dahab-nice-image',
  templateUrl: './nice-image.component.html',
  styleUrls: ['./nice-image.component.scss']
})
export class NiceImageComponent implements OnInit {
  @Input() size = '4rem'
  @Input() icon = 'nemo'
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'sunny-beach',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nice-svg/sunny-beach.svg'))
    iconRegistry.addSvgIcon(
      'nemo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nice-svg/nemo.svg'))

    iconRegistry.addSvgIcon(
      'cactus',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nice-svg/cactus.svg'))

  }

  ngOnInit() {
  }

}
