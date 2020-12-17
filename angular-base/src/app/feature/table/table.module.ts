import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { TableRoutingModule } from './table-routing.module';
import { CreateTableComponent } from './components/create-table/create-table.component';
import { TableComponent } from './components/table/table.component';
import { TableService } from './shared/service/table.service';
import { ListTableComponent } from './components/list-table/list-table.component';


@NgModule({
  declarations: [
    TableComponent,
    CreateTableComponent,
    ListTableComponent
  ],
  imports: [
    TableRoutingModule,
    SharedModule
  ],
  providers: [TableService]
})

export class TableModule { }
