import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Table } from "../model/table";

export interface Options {
  headers?: HttpHeaders;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tablesUrl = '/api/mesa';  // URL to web api

  constructor(private http: HttpClient) { }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }



  /** GET heroes from the server */
  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tablesUrl )
  }

  /** GET heroes from the server */
  putTable(code: string): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const table = JSON.stringify({code : code});
    return this.http
      .put<Table>(this.tablesUrl, table, this.createDefaultOptions())
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
