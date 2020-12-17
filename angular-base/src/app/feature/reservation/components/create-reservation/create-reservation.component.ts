import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReservationService } from '../../shared/service/reservation.service';
import { GameService } from '@core-service/game.service';
import { Router } from '@angular/router';

const STRING_MIN_LENGTH = 1;
const STRING_MAX_LENGTH = 100;

const PEOPLE_MIN_VALUE = 1;
const PEOPLE_MAX_VALUE = 10;

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  gameList: String []
  reservationForm: FormGroup

  today : Date
  reservationDate: Date

  constructor(
    private gameService: GameService,
    private router: Router,
    protected reservationService: ReservationService
    ,public datepipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getGames();
    this.buildTableForm();
  }

  getGames(){
    this.gameService.getGames()
        .subscribe(games => this.gameList = games);
  }

  private buildTableForm() {
    this.today = new Date();

    this.reservationForm = new FormGroup({
      titular: new FormControl('', [
        Validators.required, Validators.minLength(STRING_MIN_LENGTH),
        Validators.maxLength(STRING_MAX_LENGTH)]),
      game: new FormControl('', [
        Validators.required]),
      numberPeople: new FormControl('', [
        Validators.required, Validators.min(PEOPLE_MIN_VALUE),
        Validators.max(PEOPLE_MAX_VALUE)]),
      reservationDate: new FormControl('', [
        Validators.required]),
      reservationTime: new FormControl('', [
      Validators.required])
    });
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      let date = new Date(dateString)
        return date;
    }
    return null;
  }

  create() {
    console.log(this.reservationForm.value);
    let reservation = {
      id: null,
      titular: this.reservationForm.value.titular,
      game: this.reservationForm.value.game,
      numberPeople: this.reservationForm.value.numberPeople,
      reservationDate: this.buildDate(
        this.reservationForm.value.reservationDate, this.reservationForm.value.reservationTime
        )
    }

    this.reservationService.save(reservation)
    .subscribe(success => {
      if (success) {
        alert(`Reservation made sucessfully with id:  ${success.id}`)
        this.router.navigate(['/']);
      }
    });
  }

  private buildDate(
    reservationDate: String, reservationTime: String
    ){
    // return "2020-12-03-15:00:00";
    return this.datepipe.transform(reservationDate, 'yyyy-MM-dd-') + reservationTime + ":00"
  }

}
