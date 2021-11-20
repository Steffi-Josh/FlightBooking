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

  getBookingDetailsFromPNR(pnr : string){
    console.log("Inside BookingService - getBookingDetailsFromPNR" + pnr)
    return this.http.get<BookingModel>(`${BOOKING_API_URL}/searchByPnr/${pnr}`)
  }

  bookFlight(bookingSched : BookingModel){
    console.log(bookingSched)
    console.log("BookingService - bookingSched" + JSON.stringify(bookingSched))
    return this.http.post<BookingModel>(`${BOOKING_API_URL}/bookTicket`,bookingSched)
  }

  getBookingDetailsFromEmailId(emailId : string){
    console.log("Inside BookingService - getBookingDetailsFromPNR" + emailId)
    return this.http.get<BookingModel>(`${BOOKING_API_URL}/searchByEmailId/${emailId}`)
  }

  cancelFlight(id : number){
    return this.http.delete(`${BOOKING_API_URL}/cancelTicket/${id}`)
  }




}
