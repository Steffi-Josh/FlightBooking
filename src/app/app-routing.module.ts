import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AirlineInventoryComponent } from './airline-inventory/airline-inventory.component';
import { DiscountComponent } from './discount/discount.component';
import { ErrorComponent } from './error/error.component';
import { FlightInventoryComponent } from './flight-inventory/flight-inventory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'welcome/:name', component:AdminComponent},
  { path: 'airlineInventory', component: AirlineInventoryComponent },
  { path: 'flightInventory', component: FlightInventoryComponent },
  { path: 'discount', component: DiscountComponent },
  { path: 'manageAirline/:id', component: ManageAirlineComponent },
  { path: 'manageFlight/:id', component: ManageFlightComponent },
  { path: 'manageFlight/:id/:airlineName', component: ManageFlightComponent },
  { path: 'manageDiscount/:id', component: ManageDiscountComponent },
  { path: 'logout', component:LogoutComponent  },
  { path: '**', component:ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
