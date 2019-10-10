import { ApiModel } from 'src/app/models/api.model'

export interface IHostWizard extends ApiModel {
    currentStep
    progress
    steps: IStep[]
}


export interface IStep {
    title: string
    optional?: string
    data: object
}
export class HostWizard implements Partial<IHostWizard> {
    constructor(public progress) {

    }
}
