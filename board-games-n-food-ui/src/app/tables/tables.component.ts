import { Component, OnInit } from '@angular/core';
import { Table } from "./table";

import { TableService } from "../tables/table.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables: Table[];

  code :string;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.getTables();
  }

  getTables(): void {
    this.tableService.getTables()
        .subscribe(tables => this.tables = tables);
  }

  addTable() {
    if (this.code) {
      this.tables.push({ id: parseInt(this.code), code: this.code });
    }
  }

}
