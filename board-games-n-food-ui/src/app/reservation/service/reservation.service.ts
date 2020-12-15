import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Reservation } from '../model/reservation';

import { Observable, throwError as observableThrowError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

export interface Options {
  headers?: HttpHeaders;
}
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = '/api/reserva';  // URL to web api

  constructor(private http: HttpClient) { }

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  putReservation(reservation: Reservation): Observable<Reservation> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const reservationJson = JSON.stringify(reservation);
    return this.http
      .put<Reservation>(this.url, reservationJson, this.createDefaultOptions())
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
