import { Component, OnInit } from '@angular/core';
import { ServerConstants } from './server.const';
import { ServersService, ServersI } from '../home/servers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  columns: string[] = ServerConstants.listColumns;
  servers: Observable<ServersI[]>;
  constructor(
    private SS: ServersService,
  ) { }

  ngOnInit() {
    this.servers = this.SS.servers; // initialize servers
    setTimeout(() => {
      this.fetchServers();
    });
  }

  fetchServers() {
    this.SS.fetchServers();
  }

  filter() {
    this.SS.filter();
  }

}
