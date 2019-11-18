import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'dahab-host-nav-list',
  templateUrl: './host-nav-list.component.html',
  styleUrls: ['./host-nav-list.component.scss']
})
export class HostNavListComponent implements OnInit {

  links = [{
    id: 'my-places',
    routerLink: ['my-places'],
    label: 'My Places',
    icon: 'house'
  }, {
    id: 'bookings',
    routerLink: ['bookings'],
    label: 'Bookings',
    icon: 'book'
  }]
  constructor() { }

  ngOnInit() {
  }

}
