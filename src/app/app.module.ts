import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DriverComponent } from './driver/driver.component';
import { AppRoutingModule } from './app-routing.module';
import { PremiumComponent } from './premium/premium.component';
import { CoveragesComponent } from './coverages/coverages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MaterialModule } from './material-module';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { MyinsuranceComponent } from './myinsurance/myinsurance.component';
import { MyautopolicyComponent } from './myautopolicy/myautopolicy.component';
import { MyhomepolicyComponent } from './myhomepolicy/myhomepolicy.component';


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.dots
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    }),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MaterialModule,
    NgWizardModule.forRoot(ngWizardConfig)
      ],
  declarations: [
    AppComponent,
    VehicleComponent,
    DriverComponent,
    PremiumComponent,
    CoveragesComponent,
    MyinsuranceComponent,
    MyautopolicyComponent,
    MyhomepolicyComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


