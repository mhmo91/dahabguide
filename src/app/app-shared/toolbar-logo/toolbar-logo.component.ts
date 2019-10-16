import { Component, OnInit, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material/icon'

@Component({
  selector: 'dahab-toolbar-logo',
  templateUrl: './toolbar-logo.component.html',
  styleUrls: ['./toolbar-logo.component.scss']
})
export class ToolbarLogoComponent implements OnInit {
  @Input() size = '2.5rem'
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/logo.svg'))
  }

  ngOnInit() {

  }

}
