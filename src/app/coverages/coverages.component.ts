import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coverages',
  templateUrl: './coverages.component.html',
  styleUrls: ['./coverages.component.css']
})
export class CoveragesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ctyps =['Collision','Liability','Comprehensive'];
  limis =['1,000,000','2,000,000','3,000,000'];
  deds =['500','1000'];

  model = {ctyp:this.ctyps[0],limit:this.limis[0],ded:this.deds[0]};
  model1 = {ctyp:this.ctyps[1],limit:this.limis[1],ded:this.deds[1]};
  model2 ={};


}
