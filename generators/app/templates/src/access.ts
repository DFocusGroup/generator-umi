import { IInvalidInitState, IUser } from '@/types'
import { isString, isNotEmpty } from './helpers/object'

export interface IAccessState {
  canReadDashboardAnalysis: boolean
  canReadDashboardMonitor: boolean
  [index: string]: boolean
}

function turnFieldOn(initState: IAccessState, field: string) {
  if (isNotEmpty(initState[field])) {
    initState[field] = true
  }
}

export default function(initState: IInvalidInitState | IUser): IAccessState | IInvalidInitState {
  if (isString(initState)) {
    return initState as IInvalidInitState
  }

  const finalState = { canReadDashboardAnalysis: false, canReadDashboardMonitor: false }

  if (initState.permissions.includes('VIEW_DASHBOARD_ANALYSIS')) {
    turnFieldOn(finalState, 'canReadDashboardAnalysis')
  }
  if (initState.permissions.includes('VIEW_DASHBOARD_MONITOR')) {
    turnFieldOn(finalState, 'canReadDashboardMonitor')
  }

  return finalState
}
