import { ApiModel } from 'src/app/models/api.model'
import { IUser } from 'src/app/models/user.model'
import { CdkStep } from '@angular/cdk/stepper'

export interface IHostWizard extends ApiModel {
    currentStep
    progress
    userInfo: Partial<IUser>
    steps?: Partial<CdkStep>[]
}


// export interface IStep {
//     title: string
//     optional?: string
//     data: object
// }
export class HostWizard implements Partial<IHostWizard> {
    constructor(public progress, public loading = false, public userInfo = {}) {

    }
}
