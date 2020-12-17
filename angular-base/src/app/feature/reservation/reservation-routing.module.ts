import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
// import { ListTableComponent } from './components/list-table/list-table.component';
import { ReservationComponent   } from './components/reservation/reservation.component';


const routes: Routes = [
  {
    path: '',
    component: ReservationComponent,
    children: [
      {
        path: 'create',
        component: CreateReservationComponent
      },
      // {
      //   path: 'list',
      //   component: ListTableComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
