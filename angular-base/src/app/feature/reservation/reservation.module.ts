import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { ReservationService } from './shared/service/reservation.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
     ReservationComponent,
     CreateReservationComponent
  ],
  imports: [
    ReservationRoutingModule,
    SharedModule
    ],
  providers : [
    ReservationService,
    DatePipe
  ]
})

export class ReservationModule { }
