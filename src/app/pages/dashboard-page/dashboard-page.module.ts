import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { MaterialModule } from '../../material/material.module';
import { NgxsModule } from '@ngxs/store';
import { DashboardPageState } from './store/dashboard-page.state';

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MaterialModule,
    NgxsModule.forFeature([DashboardPageState])
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule { }
