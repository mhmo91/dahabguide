import { NotPipe } from './not.pipe'

describe('NotPipe', () => {
  it('create an instance', () => {
    const pipe = new NotPipe()
    expect(pipe).toBeTruthy()
  })
})
