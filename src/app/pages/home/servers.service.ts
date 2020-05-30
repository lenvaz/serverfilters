import { Injectable } from '@angular/core';
import { MockData } from '../servers/server.const';
import { Subject } from 'rxjs';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';

export interface ServersI {
  Model: string;
  RAM: string;
  HDD: string;
  Location: string;
  Price: string;
}

@Injectable()
export class ServersService {
  private _servers: ServersI[] = MockData;

  private _serverSubject = new Subject<ServersI[]>();

  constructor(
    private modalService: NzModalService,
  ) { }

  get servers() { return this._serverSubject.asObservable(); }

  get serverLocations() {
    const l = this._servers
      .filter((value, index, self) => this.returnUnique(value.Location, index, self.map((s) => s.Location)));
    return l.map((s) => s.Location);
  }

  returnUnique(value: string, index: number, self: string[]) {
    return self.indexOf(value) === index;
  }

  fetchServers() {
    this._serverSubject.next([...this._servers]);
  }

  applyFilter(filter: any) {
    const filteredServers = this._servers.filter((s) => {
      return s.HDD.indexOf(filter.HDD) > -1 ||
        s.HDD.indexOf(filter.HDD_Type) > -1 ||
        s.Location === filter.Location;
    });
    this._serverSubject.next([...filteredServers]);
  }

  filter() {
    const modal = this.modalService.create({
      nzContent: FilterComponent,
      nzComponentParams: {
        locations: this.serverLocations,
      },
      nzOkText: null,
      nzCancelText: null,
    });

    modal.afterClose.subscribe((response) => {
      console.log('FILTER DATA: ----', response);
      this.applyFilter(response);
    });
  }
}
