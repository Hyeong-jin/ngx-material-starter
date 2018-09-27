import { State } from '@ngxs/store';

export interface AppStateModel {
  userid: string;
  username: string;
  useremail: string;
  dashboards: string[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    userid: 'user-id',
    username: 'user-name',
    useremail: 'user-email',
    dashboards: []
  }
})
export class AppState {
}
