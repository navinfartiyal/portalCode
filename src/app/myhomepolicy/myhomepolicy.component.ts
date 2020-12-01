import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  ctyp: string;
  // position: number;
  occupancy: string;
  restype: string;
  
}


export interface PeriodicElement1 {
  
  cov: string;
  lim: string;
  ded :string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ctyp: 'GOLD', occupancy: 'Owner Occupied', restype: 'Principal'},
  
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  { cov: 'Building', lim: '2,000,000', ded: '900'},
  { cov: 'Personal Property', lim: '2,000,000', ded: 'NONE'},
  { cov: 'Loss Of Use', lim: '2,000', ded: 'NONE'},
  { cov: 'Liability', lim: '2,000', ded: 'NONE'},
  { cov: 'Claims Forgivness', lim: '2,000,000', ded: 'NONE'},
  
];

@Component({
  selector: 'app-myhomepolicy',
  templateUrl: './myhomepolicy.component.html',
  styleUrls: ['./myhomepolicy.component.css']
})
export class MyhomepolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'ctyp', 'occupancy', 'restype'];
  dataSource = ELEMENT_DATA;
  displayedColumns1: string[] = [ 'cov', 'lim', 'ded'];
  dataSource1 = ELEMENT_DATA1;
}
