import { State, Action, StateContext } from '@ngxs/store';
// import { produce } from 'immer';
import * as uuid from 'uuid/v1';

import { DashboardPageModel } from '../model/dashboard-page.model';
import { LoadDashboards } from '../../../store/app.actions';

export interface DashboardPageStateModel {
  dirty: boolean;
  status: 'Default' | 'Pending' | 'Error' | 'Success' | 'Loading' | 'Loaded';
  errors: any | any[];
  model: DashboardPageModel;
}

@State<DashboardPageStateModel>({
  name: 'dashboardPage',
  defaults: {
    dirty: false,
    status: 'Default',
    errors: null,
    model: {
      selected: null,
      dashboards: []
    }
  }
})
export class DashboardPageState {
  @Action(LoadDashboards)
  loadDashboards(
    { getState, setState, patchState, dispatch }: StateContext<DashboardPageStateModel>
  ) {
    // setState(produce(getState(), draft => {
    //   draft.dirty = false;
    //   draft.status = 'Loading';
    // }));
  }
}
