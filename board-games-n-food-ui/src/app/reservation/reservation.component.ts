import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

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
  formError: string

  constructor(
    private router: Router,
    private gameService: GameService,
    public datepipe: DatePipe,
    private reservationService: ReservationService) {
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
    this.reservation.reservationDate = this.buildDate()
    if (this.validateReservation()) {
      this.reservationService.putReservation(this.reservation).subscribe(
        success => {
          if (success) {
            alert(`Reservation made sucessfully with id:  ${success.id}`)
            this.router.navigate(['/']);
          }
        }, error => (this.error = error)
      )
    }else{
      this.formError = this.formError.substring(0, this.formError.length -2)
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
      id : null,
      titular : "",
      game : "",
      numberPeople : 2,
      reservationDate : ""
    }

    // this.reservationDate = new Date()
    this.today = new Date();

  }

  private validateReservation(){
    this.formError = "";
    let isValid = true;
    if (this.reservation.titular == "") {
      this.formError = this.formError + "Titular is required, "
      isValid = false
    }
    if (this.reservation.game == "") {
      this.formError = this.formError + "Game is required, "
      isValid = false
    }
    if (this.reservation.numberPeople < 1 && this.reservation.numberPeople > 10) {
      this.formError = this.formError + "Amout of poeple is required between 1 and 10, "
      isValid = false
    }
    if (this.reservationDate == null || this.reservationTime == null) {
      this.formError = this.formError + "Date is required, "
      isValid = false
    }
    return isValid;
  }

  private buildDate(){
    return this.datepipe.transform(this.reservationDate, 'yyyy-MM-dd-') + this.reservationTime + ":00"
  }


}
