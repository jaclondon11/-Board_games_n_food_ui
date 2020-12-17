import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from '../model/reservation';


@Injectable()
export class ReservationService {

  private url = '/api/reserva';  // URL to web api

  constructor(protected http: HttpService) {}

  public save(reservation: Reservation) : Observable<Reservation> {
        return this.http.doPut<Reservation, Reservation>(
          `${environment.endpoint}${this.url}`,
          reservation);
      }

}
