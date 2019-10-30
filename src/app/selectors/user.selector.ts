import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as userReducer from 'src/app/reducers/user.reducer'
import { IUser } from '../models/user.model'


const userState = createFeatureSelector(userReducer.userFeatureKey)
const selectUserId = createSelector(userState, (user: IUser) => user.uid)


export {
    userState,
    selectUserId
}
