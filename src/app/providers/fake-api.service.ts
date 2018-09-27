import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as uuid from 'uuid/v1';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService implements InMemoryDbService {
  createDb() {
    const dashboards = [];
    const account = [];
    return {
      account,
      dashboards
    }
  }
}
