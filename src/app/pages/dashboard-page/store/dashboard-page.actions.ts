import { DashboardPageStateModel } from './dashboard-page.state';

export class InitializeDashboard {
  static readonly type = '[DashboardPage] Initialize dashboard page';
  constructor(public payload: DashboardPageStateModel) {}
}
