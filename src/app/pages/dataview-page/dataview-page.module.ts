import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

import { DataviewPageRoutingModule } from './dataview-page-routing.module';
import { DataviewPageComponent } from './dataview-page.component';
import { MaterialModule } from '../../material/material.module';
import { DataviewPageState } from './store/dataview-page.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataviewPageRoutingModule,
    MaterialModule,
    NgxsModule.forFeature([DataviewPageState]),
    NgxsFormPluginModule
  ],
  declarations: [DataviewPageComponent]
})
export class DataviewPageModule { }
