import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor() { }

  lprovince =['ON','QC','BC'];
  lclass =['G','G1','G2']

  model = {name :'Boby',lname :'Davison',licnum:'1234-123',licclass:this.lclass[0],licstate:this.lprovince[0]}

  ngOnInit(): void {
  }

}
