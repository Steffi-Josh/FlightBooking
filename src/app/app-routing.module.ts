import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AirlineInventoryComponent } from './airline-inventory/airline-inventory.component';
import { BlockAirlineComponent } from './block-airline/block-airline.component';
import { DiscountComponent } from './discount/discount.component';
import { ErrorComponent } from './error/error.component';
import { FlightInventoryComponent } from './flight-inventory/flight-inventory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageAirlineComponent } from './manage-airline/manage-airline.component';
import { ManageDiscountComponent } from './manage-discount/manage-discount.component';
import { ManageFlightComponent } from './manage-flight/manage-flight.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'welcome/:name', component:AdminComponent ,canActivate : [RouteGuardService] },
  { path: 'airlineInventory', component: AirlineInventoryComponent ,canActivate : [RouteGuardService] },
  { path: 'flightInventory', component: FlightInventoryComponent ,canActivate : [RouteGuardService] },
  { path: 'discount', component: DiscountComponent ,canActivate : [RouteGuardService] },
  { path: 'manageAirline/:id', component: ManageAirlineComponent ,canActivate : [RouteGuardService] },
  { path: 'manageFlight/:id', component: ManageFlightComponent ,canActivate : [RouteGuardService] },
  { path: 'manageFlight/:id/:airlineName', component: ManageFlightComponent ,canActivate : [RouteGuardService] },
  { path: 'manageDiscount/:id', component: ManageDiscountComponent,canActivate : [RouteGuardService]  },
  { path: 'blockAirline', component: BlockAirlineComponent,canActivate : [RouteGuardService]  },
  { path: 'logout', component:LogoutComponent  ,canActivate : [RouteGuardService] },
  { path: "users", loadChildren: ()=>import("./user/user.module").then(m=>m.UserModule)},
  { path: '**', component:ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  UserModule: any
 }
