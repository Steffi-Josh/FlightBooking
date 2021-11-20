import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AIRLINE_API_URL } from 'src/app/app.constants';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { FlightModel } from 'src/app/models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class AirlineDataService {

  constructor(private http : HttpClient) { }

  // retriveFlightByFromAndTo(from : string , to : string){
  //   console.log("Inside BookingService - from" + from)
  //   console.log("Inside BookingService - to " + to)
  //   let params =  new HttpParams().set('from',from)
  //                                 .set('To',to)
  //   return this.http.get<FlightModel[]>(`${AIRLINE_API_URL}/fromAndToLocation` ,{params: params})
  // }

  retriveAllAirline(){
    return this.http.get<AirlineModel[]>(`${AIRLINE_API_URL}/getAllAirlines`)
  }

  retriveAirline(id : number){
    return this.http.get<AirlineModel>(`${AIRLINE_API_URL}/getAirlineByID/${id}`)
  }

  updateAirline(id : number , airline : AirlineModel){
    return this.http.put<AirlineModel>(`${AIRLINE_API_URL}/updateAirline/${id}`,airline)
  }

  createAirline(airline : AirlineModel){
    return this.http.post<AirlineModel>(`${AIRLINE_API_URL}/inventory/add`,airline)
  }
}
