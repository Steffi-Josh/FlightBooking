import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AIRLINE_API_URL, BOOKING_API_URL } from 'src/app/app.constants';
import { AirlineModel } from 'src/app/models/AirlineModel';
import { BookingModel } from '../models/bookingModel';
import { FlightModel } from '../models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http : HttpClient) { }

  retriveFlightByFromAndTo(from : string , to : string){
    console.log("Inside BookingService - from" + from)
    console.log("Inside BookingService - to " + to)
    let params =  new HttpParams().set('from',from)
                                  .set('To',to)
    return this.http.get<FlightModel[]>(`${AIRLINE_API_URL}/fromAndToLocation` ,{params: params})
  }

  bookFlight(bookingSched : BookingModel){
    console.log(bookingSched)
    console.log("BookingService - bookingSched" + JSON.stringify(bookingSched))
    return this.http.post<BookingModel>(`${BOOKING_API_URL}/bookTicket`,bookingSched)
  }



}
