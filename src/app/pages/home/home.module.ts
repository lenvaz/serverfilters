import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { ServersComponent } from '../servers/servers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { ServersService } from './servers.service';


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [ServersComponent],
  exports: [ServersComponent],
  providers: [
    ServersService,
  ]
})
export class HomeModule { }
