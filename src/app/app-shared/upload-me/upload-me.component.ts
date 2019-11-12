import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core'
import { tap, finalize } from 'rxjs/operators'
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs'
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces'

@Component({
  selector: 'dahab-upload-me',
  templateUrl: './upload-me.component.html',
  styleUrls: ['./upload-me.component.scss']
})
export class UploadMeComponent implements OnInit {

  @Input() file: File
  @Input() saveToPath: string
  @Input() customFileName: string
  fileURL: any
  task: AngularFireUploadTask

  percentage: Observable<number>
  snapshot: Observable<any>
  @Output() guesWhat = new EventEmitter<{
    action: number,
    payload?: string
  }>()

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.generateFileURL(this.file)
    this.startUpload()
  }

  generateFileURL(file: File) {
    if (file) {
      const reader = new FileReader()

      reader.onload = (e: any) => {
        this.fileURL = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
  startUpload() {
    // The storage path
    const path = `${this.saveToPath}/${this.customFileName ? this.customFileName : this.file.name} `

    // Reference to storage bucket
    const ref = this.storage.ref(path)
    // The main task
    this.task = this.storage.upload(path, this.file)

    // Progress monitoring
    this.percentage = this.task.percentageChanges()

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        const downloadUrl = await ref.getDownloadURL().toPromise()
        this.guesWhat.emit({
          action: 1,
          payload: downloadUrl
        })
      }),
    )
  }

  isUploading(snapshot: UploadTaskSnapshot) {
    return snapshot.state === 'running'
  }

  isOnPause(snapshot: UploadTaskSnapshot) {
    return snapshot.state === 'paused'
  }

  uploadedSuccessfully(snapshot: UploadTaskSnapshot) {
    return snapshot.bytesTransferred === snapshot.totalBytes
  }


  uploadingFailed(snapshot: UploadTaskSnapshot) {
    return snapshot.state === 'error'
  }

  uploadProcessActive(snapshot: UploadTaskSnapshot) {
    return snapshot.bytesTransferred < snapshot.totalBytes
  }


  cancelUpload(task) {
    task.cancel()
    this.guesWhat.emit({
      action: 0,
      payload: 'user canceled'
    })

  }

}
