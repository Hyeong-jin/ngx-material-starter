import { State, Action, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import * as uuid from 'uuid/v1';

export interface DataviewPageStateModel {
  errors: any | any[];
  searchForm: {
    dirty: boolean,
    status: 'Loading' | 'Loaded' | 'Pending' | 'Success' | 'Error' | 'Default',
    model: {
      name: string;
      weight: number;
      symbol: string;
    }
  };
  data: any[];
  pagenation: {
    size: number,
    index: number
  };
}

@State<DataviewPageStateModel>({
  name: 'dataview',
  defaults: {
    errors: null,
    searchForm: {
      dirty: false,
      status: 'Default',
      model: {
        name: '',
        weight: 0,
        symbol: ''
      }
    },
    data: [],
    pagenation: {
      size: 10,
      index: 0
    }
  }
})
export class DataviewPageState {
}
