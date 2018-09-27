import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './pages/dashboard-page/dashboard-page.module#DashboardPageModule' },
  { path: 'dataview', loadChildren: './pages/dataview-page/dataview-page.module#DataviewPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
