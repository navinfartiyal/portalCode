import { Component, OnInit } from '@angular/core';
import {vehicle} from 'src/app/vehicle/vehicle';
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  constructor() {
 
    
  }

  ngOnInit(): void {
  }

  

  models = ['cx-2','cx-3','cx-4'];
  years = ['2010', '2011',
            '2012', '2013'];
  makes =['Mazda']

  model = new vehicle( this.years[0], this.makes[0],this.models[0]);

  model1 ={km:'10,000'}

  submitted = false;

  onSubmit() { this.submitted = true; }

 

}
