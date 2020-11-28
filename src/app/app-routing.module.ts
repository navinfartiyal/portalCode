import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PremiumComponent } from './premium/premium.component';
import { CoveragesComponent } from './coverages/coverages.component';

const routes: Routes = [
  { path: 'driver', component: DriverComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'coverages', component: CoveragesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
