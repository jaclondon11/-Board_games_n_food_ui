export class Reservation {
  id: number;
  titular: string;
  game: string;
  numberPeople : number;
  reservationDate : string;

  constructor(id: number, titular: string, game: string, numberPeople: number, reservationDate: string) {
      this.id = id;
      this.titular = titular;
      this.game = game;
      this.numberPeople = numberPeople;
      reservationDate = reservationDate;
  }
}

