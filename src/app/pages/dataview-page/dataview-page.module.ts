import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataviewPageRoutingModule } from './dataview-page-routing.module';
import { DataviewPageComponent } from './dataview-page.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    DataviewPageRoutingModule,
    MaterialModule
  ],
  declarations: [DataviewPageComponent]
})
export class DataviewPageModule { }
