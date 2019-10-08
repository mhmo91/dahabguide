import { ApiModel } from './api.model'
import { User as IFbUser } from 'firebase/app'
export interface IUser extends IFbUser, ApiModel {
    uid: string
    email: string
    photoURL: string
    displayName: string
    roles: Array<Role>
    permissions?: Array<Permission>
}

export enum Role {
    Guest = 'GUEST',
    Host = 'HOST'
}

export enum Permission {

}

export class User implements Partial<IUser> {
    constructor(uid) {
        uid = uid ? uid : null
    }
}
