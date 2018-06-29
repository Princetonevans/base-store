import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  displayedColumns = ['name', 'phone', 'email', 'address', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  title = 'Orders';
  user = 'Princeton';


  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface PeriodicElement {
  name: string;
  phone: number;
  email: string;
  address: string;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'john doe', email: 'Hydrogen', phone: 1.0079, address: 'H', total: 9.99},
  {name: 'john doe', email: 'Helium', phone: 4.0026, address: 'He', total: 9.99},
  {name: 'john doe', email: 'Lithium', phone: 6.941, address: 'Li', total: 9.99},
  {name: 'john doe', email: 'Beryllium', phone: 9.0122, address: 'Be', total: 9.99},
  {name: 'john doe', email: 'Boron', phone: 10.811, address: 'B', total: 9.99},
  {name: 'john doe', email: 'Carbon', phone: 12.0107, address: 'C', total: 9.99},
  {name: 'john doe', email: 'Nitrogen', phone: 14.0067, address: 'N', total: 9.99},
  {name: 'john doe', email: 'Oxygen', phone: 15.9994, address: 'O', total: 9.99},
  {name: 'john doe', email: 'Fluorine', phone: 18.9984, address: 'F', total: 9.99},
  {name: 'john doe', email: 'Neon', phone: 20.1797, address: 'Ne', total: 9.99},
  {name: 'john doe', email: 'Sodium', phone: 22.9897, address: 'Na', total: 9.99},
  {name: 'john doe', email: 'Magnesium', phone: 24.305, address: 'Mg', total: 9.99},
  {name: 'john doe', email: 'Aluminum', phone: 26.9815, address: 'Al', total: 9.99},
  {name: 'john doe', email: 'Silicon', phone: 28.0855, address: 'Si', total: 9.99},
  {name: 'john doe', email: 'Phosphorus', phone: 30.9738, address: 'P', total: 9.99},
  {name: 'john doe', email: 'Sulfur', phone: 32.065, address: 'S', total: 9.99},
  {name: 'john doe', email: 'Chlorine', phone: 35.453, address: 'Cl', total: 9.99},
  {name: 'john doe', email: 'Argon', phone: 39.948, address: 'Ar', total: 9.99},
  {name: 'john doe', email: 'Potassium', phone: 39.0983, address: 'K', total: 9.99},
  {name: 'john doe', email: 'Calcium', phone: 40.078, address: 'Ca', total: 9.99},
];
