import { IInvalidInitState, IUser } from '@/types'

export function isInvalidInitState(src: IInvalidInitState | IUser | undefined): src is IInvalidInitState {
  return src === undefined || src === 'LOGIN_REQUIRED'
}
