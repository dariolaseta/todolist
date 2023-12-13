import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ListComponent } from './view/list/list.component';
import { TrashcanComponent } from './view/trashcan/trashcan.component';
import { ErrorComponent } from './view/error/error.component';

const routes: Routes = [
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "dashboard", component: DashboardComponent},
  {path: "list", component: ListComponent},
  {path: "deleted-items", component: TrashcanComponent},
  {path: "error", component: ErrorComponent},
  {path: '**', pathMatch: 'full', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
