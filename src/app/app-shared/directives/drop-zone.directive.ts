import { Directive, HostListener, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[dahabDropZone]'
})
export class DropzoneDirective {

  @Output() filesDropped = new EventEmitter<FileList>()
  @Output() hovered = new EventEmitter<boolean>()

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault()
    this.filesDropped.emit($event.dataTransfer.files)
    this.hovered.emit(false)
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault()
    this.hovered.emit(true)
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault()
    this.hovered.emit(false)
  }
}

