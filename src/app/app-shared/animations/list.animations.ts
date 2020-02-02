import { trigger, transition, style, animate, query, stagger } from '@angular/animations'

const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('10ms', style({ opacity: 0 }))]
  )
])
const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('50ms', animate('500ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('100ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
])

export { fadeAnimation, listAnimation }
