import { IInvalidInitState, IUser } from '@/types'

export function isInvalidInitState(src: IInvalidInitState | IUser): src is IInvalidInitState {
  return src === 'LOGIN_REQUIRED'
}
