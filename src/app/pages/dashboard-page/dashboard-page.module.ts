import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    MaterialModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardPageModule { }
