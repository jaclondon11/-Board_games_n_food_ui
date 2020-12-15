import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Table } from "./model/table";

import { TableService } from "../tables/service/table.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @Output() close = new EventEmitter();

  error: any;
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

  addTable(): void {
    if (this.code) {
      this.tableService.putTable(this.code).subscribe(success => {
        if (success) {
          this.getTables()
          this.clearForm()
        }
      }, error => (this.error = error));
    }
  }

  clearForm(): void {
    this.code = ""
    this.error = null;
  }

  goBack(savedTable: Table = null): void {
    this.close.emit(savedTable);
  }

}
