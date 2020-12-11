import { Injectable } from '@angular/core';

import { Table } from "./table";

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tablesUrl = '/api/mesa';  // URL to web api

  constructor(private httpClient: HttpClient) { }



  /** GET heroes from the server */
  getTables(): Observable<Table[]> {
    return this.httpClient.get<Table[]>(this.tablesUrl )
  }

  /** GET heroes from the server */
  putTables(code: string): Observable<any> {
    const body = JSON.stringify({code : code});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.httpClient.post<any>(body, {'headers':headers})
  }
}
