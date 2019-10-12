import { ApiModel } from 'src/app/models/api.model'
import { IUser } from 'src/app/models/user.model'

export interface IHostWizard extends ApiModel {
    currentStep
    progress
    userInfo: Partial<IUser>
    // steps: IStep[]
}


// export interface IStep {
//     title: string
//     optional?: string
//     data: object
// }
export class HostWizard implements Partial<IHostWizard> {
    constructor(public progress, public loading = false) {

    }
}
