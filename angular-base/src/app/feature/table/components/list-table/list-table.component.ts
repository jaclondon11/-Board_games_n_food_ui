import { Component, OnInit } from '@angular/core';

import { Table } from '@table/shared/model/table';

import { TableService } from '../../shared/service/table.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  public tablesList: Table[];

  constructor(protected tableService: TableService) { }

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    this.tableService.listAll()
      .subscribe(tables => this.tablesList = tables);;
  }

}
