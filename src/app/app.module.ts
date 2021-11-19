import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AirlineInventoryComponent } from './airline-inventory/airline-inventory.component';
import { FlightInventoryComponent } from './flight-inventory/flight-inventory.component';
import { DiscountComponent } from './discount/discount.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AdminComponent,
    ErrorComponent,
    LoginComponent,
    LogoutComponent,
    AirlineInventoryComponent,
    FlightInventoryComponent,
    DiscountComponent,
    ManageAirlineComponent,
    ManageFlightComponent,
    ManageDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
