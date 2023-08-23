import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Component, Pipe } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { CrudMovieComponent } from '../movie/crud-movie/crud-movie.component';
import { CrudCustomerComponent } from './crud-customer/crud-customer.component';
import { DataServiceService } from 'src/app/service/data-service.service';
import { UpdatecusComponent } from './updatecus/updatecus.component';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import * as moment from 'moment';
import { Table } from 'primeng/table';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
// import { pipe } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  id?: Number;
  p!: number;
  searchText: string = '';
  newdatacus: any = {
    id: 1,
    name: '',
    phone: '',
    address: '',
    dateOfBirth: '',
  };

  constructor(
    private _dialog: MatDialog,
    private dataService: DataServiceService
  ) {
    // this.updatePagedItems();
  }

  ngOnInit(): void {
    this.dataService.createUserSuccess.subscribe((value) => {
      console.log(value);
      if (value) {
        this.datacustomer();
      }
    });
    this.datacustomer();
  }
  // form add(post api)
  openaddcustomer() {
    this._dialog.open(CrudCustomerComponent);
  }
  // get api
  datacustomer() {
    this.dataService.customerService(0, 9999).subscribe((res) => {
      this.products = res.data;
      this.products = this.products.map((item: any) => {
        return {
          ...item,
          dateOfBirth: moment(item.dateOfBirth).format('l'),
        };
      });
    });
  }

  openupdatecus(customer: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = customer;
    this._dialog.open(UpdatecusComponent, dialogConfig);
  }
  // delete api
  deletecus(data: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    this._dialog.open(DeleteCustomerComponent,dialogConfig);
  }
 

  // itemdata: any[] = [];
  // searchTerm: any = '';
  // search(): void {
  //   this.dataService.searchItems(this.searchTerm).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  products: any[] = [];

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Tên' },
    { field: 'phone', header: 'Số điện thoại' },
    { field: 'dateOfBirth', header: 'Ngày sinh' },
    { field: 'address', header: 'Địa chỉ' },
  ];

  clear(table: Table) {
    table.clear();
  }

  filterTable(table: Table, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}
