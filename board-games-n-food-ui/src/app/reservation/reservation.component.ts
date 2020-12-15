import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

import { Reservation } from "./model/reservation";

import { GameService } from "../games/service/game.service";
import { ReservationService } from "./service/reservation.service";


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  gameList: String []

  today : Date
  reservationTime: string
  reservationDate: Date

  reservation : Reservation

  error: any;

  constructor(
    private gameService: GameService,
    public datepipe: DatePipe,
    private reservationService: ReservationService) {

    this.reservationDate = new Date()
    this.today = new Date();
  }

  ngOnInit(): void {
    this.getJuegos()
    this.initForm()
  }

  getJuegos(){
    this.gameService.getGames()
        .subscribe(games => this.gameList = games);
  }

  createReserva(){
    debugger
    this.reservation.reservationDate = this.buildDate()
    if (this.validateReservation()) {
      this.reservationService.putReservation(this.reservation).subscribe(
        success => {
          if (success) {
            debugger
            alert(success)
            this.initForm()
          }
        }, error => (this.error = error)
      )
    }
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      let date = new Date(dateString)
        return date;
    }
    return null;
  }

  private initForm(){
    this.reservation  = {
      titular : "",
      game : "",
      numberPeople : 2,
      reservationDate : ""
    }
  }

  private validateReservation(){
    if (this.reservation.titular == "") {
      return false;
    }
    if (this.reservation.game == "") {
      return false;
    }
    if (this.reservation.numberPeople < 0 && this.reservation.numberPeople > 10) {
      return false;
    }
    if (this.reservation.reservationDate == "") {
      return false;
    }
    return true;
  }

  private buildDate(){
    return this.datepipe.transform(this.reservationDate, 'yyyy-MM-dd-') + this.reservationTime + ":00"
  }


}
