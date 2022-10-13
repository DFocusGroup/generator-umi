import { IInvalidInitState, IUser, IAccessState } from '@/types';
import { isString, isNotEmpty } from '@/utils';

function turnFieldOn(initState: IAccessState, field: keyof IAccessState) {
  if (isNotEmpty(initState[field])) {
    initState[field] = true;
  }
}

export default function (
  initState: IInvalidInitState | IUser,
): IAccessState | IInvalidInitState {
  if (isString(initState)) {
    return initState as IInvalidInitState;
  }

  const finalState = {
    canReadDashboardAnalysis: false,
    canReadDashboardMonitor: false,
    canReadAdminContactsManagement: false,
  };

  if (!initState.permissions) {
    return finalState;
  }

  if (initState.permissions.includes('VIEW_DASHBOARD_ANALYSIS')) {
    turnFieldOn(finalState, 'canReadDashboardAnalysis');
  }
  if (initState.permissions.includes('VIEW_DASHBOARD_MONITOR')) {
    turnFieldOn(finalState, 'canReadDashboardMonitor');
  }
  if (initState.permissions.includes('VIEW_ADMIN_USER_MANAGEMENT')) {
    turnFieldOn(finalState, 'canReadAdminContactsManagement');
  }

  return finalState;
}
