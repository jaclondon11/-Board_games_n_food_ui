import { Component, OnInit } from '@angular/core';
import { TableService } from '../../shared/service/table.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const CODE_MIN_LENGTH = 1;
const CODE_MAX_LENGTH = 100;

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {
  tableForm: FormGroup

  constructor(protected tableService: TableService) { }

  ngOnInit(): void {
    this.buildTableForm();
  }

  create() {
    this.tableService.save(this.tableForm.value)
    .subscribe(success => {
      console.log(success)
      this.buildTableForm();
    });
  }

  private buildTableForm() {
    this.tableForm = new FormGroup({
      code: new FormControl('', [
        Validators.required, Validators.minLength(CODE_MIN_LENGTH),
        Validators.maxLength(CODE_MAX_LENGTH)])
    });
  }

}
