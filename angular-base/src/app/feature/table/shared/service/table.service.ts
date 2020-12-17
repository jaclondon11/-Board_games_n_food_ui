import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Table } from '../model/table';

@Injectable()
export class TableService {

  private tablesUrl = '/api/mesa';  // URL to web api

  constructor(protected http: HttpService) {}

  public save(table: Table) {
    return this.http.doPut<Table, boolean>(
      `${environment.endpoint}${this.tablesUrl}`,
      table);
  }

  public listAll() {
    return this.http.doGet<Table[]>(`${environment.endpoint}${this.tablesUrl}`);
  }
}
