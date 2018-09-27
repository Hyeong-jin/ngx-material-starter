import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataviewPageComponent } from './dataview-page.component';

const routes: Routes = [
  // { path: '': redirectTo: '', pathMatch: 'full' },
  { path: '', component: DataviewPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataviewPageRoutingModule { }
