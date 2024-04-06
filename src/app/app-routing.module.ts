import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RapportComponent } from './rapport/rapport.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'rapport', component: RapportComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
