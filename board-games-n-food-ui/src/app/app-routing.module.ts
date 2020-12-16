import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables.component';

import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'reservation', component: ReservationComponent },
  { path: 'tables', component: TablesComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
