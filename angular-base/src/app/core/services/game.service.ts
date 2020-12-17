import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private url = '/api/juegos';  // URL to web api

  constructor(protected http: HttpService) {}

  getGames(): Observable<String[]> {
    return this.http.doGet<String[]>(`${environment.endpoint}${this.url}`)
  }

}
