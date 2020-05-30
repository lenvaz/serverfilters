import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from '../servers/servers.component';

const routes: Routes = [
  { path: '', redirectTo: 'servers' },
  { path: 'servers', component: ServersComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
