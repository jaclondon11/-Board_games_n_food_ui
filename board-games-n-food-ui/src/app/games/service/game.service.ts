import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Options {
  headers?: HttpHeaders;
}
@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = '/api/juegos';  // URL to web api

  constructor(private http: HttpClient) { }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getGames(): Observable<String[]> {
    return this.http.get<String[]>(this.url )
  }

}
