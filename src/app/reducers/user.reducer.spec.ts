import { reducer, defaultUser } from './user.reducer'

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any

      const result = reducer(defaultUser, action)

      expect(result).toEqual({ ...defaultUser })
    })
  })
})
