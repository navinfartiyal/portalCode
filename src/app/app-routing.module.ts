import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverComponent } from './driver/driver.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { PremiumComponent } from './premium/premium.component';

const routes: Routes = [
  { path: 'driver', component: DriverComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'premium', component: PremiumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
