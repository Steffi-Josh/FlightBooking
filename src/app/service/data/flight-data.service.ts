import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AIRLINE_API_URL } from 'src/app/app.constants';
import { FlightModel } from 'src/app/models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class FlightDataService {

  constructor(private http : HttpClient) { }

  retriveAllFlights(){
    return this.http.get<FlightModel[]>(`${AIRLINE_API_URL}/getAllFlights`)
  }

  retriveFlightByAirlineName( airlineName : string){
   // const nameairline = airlineName
    console.log(airlineName)
    let params =  new HttpParams().set('airlineName',airlineName)
    return this.http.get<FlightModel[]>(`${AIRLINE_API_URL}/getFlightByAirlineName`, {params: params})
    //return this.http.get<FlightModel[]>(`${AIRLINE_API_URL}/getFlightByAirlineName/${nameairline}`)
  }

  retriveFlight(id : number){
    return this.http.get<FlightModel>(`${AIRLINE_API_URL}/getFlightByID/${id}`)
  }

  updateFlight(id : number , flight : FlightModel){
    return this.http.put<FlightModel>(`${AIRLINE_API_URL}/updateFlightById/${id}`,flight)
  }

  createAirline(airline : FlightModel , airlineName : string){
    return this.http.post<FlightModel>(`${AIRLINE_API_URL}/inventory/addFlight`,[airline ,airlineName])
  }
}
function paramValue(arg0: string, paramValue: any) {
  throw new Error('Function not implemented.');
}

