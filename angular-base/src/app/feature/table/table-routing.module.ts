import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTableComponent } from './components/create-table/create-table.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { TableComponent   } from './components/table/table.component';


const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
      {
        path: 'create',
        component: CreateTableComponent
      },
      {
        path: 'list',
        component: ListTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
