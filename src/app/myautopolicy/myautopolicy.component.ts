import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  VIN: string;
  // position: number;
  purchaseprice: string;
  annualkm: string;
  
}


export interface PeriodicElement1 {
  
  cov: string;
  lim: string;
  ded :string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { VIN: '34556677', purchaseprice: '10,0079', annualkm: '10,000'},
  
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  { cov: 'Liability', lim: '2,000,000', ded: '500'},
  { cov: 'Collission', lim: '2,000,000', ded: '500'},
  { cov: 'Accident Benefits', lim: 'Included', ded: 'Included'},
  { cov: 'Family Protection', lim: '2,000,000', ded: 'NONE'}
  
];

@Component({
  selector: 'app-myautopolicy',
  templateUrl: './myautopolicy.component.html',
  styleUrls: ['./myautopolicy.component.css']
})
export class MyautopolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'VIN', 'purchaseprice', 'annualkm'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = [ 'cov', 'lim', 'ded'];
  dataSource1 = ELEMENT_DATA1;

}
