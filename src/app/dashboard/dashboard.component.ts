import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['name', 'phone', 'email', 'address'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
}
export interface PeriodicElement {
  name: string;
  phone: number;
  email: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'john doe', email: 'Hydrogen', phone: 1.0079, address: 'H'},
  {name: 'john doe', email: 'Helium', phone: 4.0026, address: 'He'},
  {name: 'john doe', email: 'Lithium', phone: 6.941, address: 'Li'},
  {name: 'john doe', email: 'Beryllium', phone: 9.0122, address: 'Be'},
  {name: 'john doe', email: 'Boron', phone: 10.811, address: 'B'},
  {name: 'john doe', email: 'Carbon', phone: 12.0107, address: 'C'},
  {name: 'john doe', email: 'Nitrogen', phone: 14.0067, address: 'N'},
  {name: 'john doe', email: 'Oxygen', phone: 15.9994, address: 'O'},
  {name: 'john doe', email: 'Fluorine', phone: 18.9984, address: 'F'},
  {name: 'john doe', email: 'Neon', phone: 20.1797, address: 'Ne'},
  {name: 'john doe', email: 'Sodium', phone: 22.9897, address: 'Na'},
  {name: 'john doe', email: 'Magnesium', phone: 24.305, address: 'Mg'},
  {name: 'john doe', email: 'Aluminum', phone: 26.9815, address: 'Al'},
  {name: 'john doe', email: 'Silicon', phone: 28.0855, address: 'Si'},
  {name: 'john doe', email: 'Phosphorus', phone: 30.9738, address: 'P'},
  {name: 'john doe', email: 'Sulfur', phone: 32.065, address: 'S'},
  {name: 'john doe', email: 'Chlorine', phone: 35.453, address: 'Cl'},
  {name: 'john doe', email: 'Argon', phone: 39.948, address: 'Ar'},
  {name: 'john doe', email: 'Potassium', phone: 39.0983, address: 'K'},
  {name: 'john doe', email: 'Calcium', phone: 40.078, address: 'Ca'},
];
