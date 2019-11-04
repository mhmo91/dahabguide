import { AngularFireUploadTask } from '@angular/fire/storage'
import { of, EMPTY } from 'rxjs'
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces'

export let angularFireStorageSpy = jasmine.createSpyObj('AngularFirestorage', ['ref', 'upload'])
angularFireStorageSpy.upload =
    (): Partial<AngularFireUploadTask> => {
        return {
            percentageChanges: () => {
                return of(Math.random() * 100)
            },
            snapshotChanges: () => {
                return of()
            }
        }
    }
