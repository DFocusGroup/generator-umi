export interface IAccessState {
  canReadDashboardAnalysis: boolean
  canReadDashboardMonitor: boolean
  canReadAdminUserManagement: boolean
  [index: string]: boolean
}
