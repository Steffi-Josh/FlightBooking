import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AirlineDataService } from 'src/app/service/data/airline-data.service';
import { FlightDataService } from 'src/app/service/data/flight-data.service';
import { FlightModel } from '../models/FlightModel';
import { BookingService } from '../service/booking.service';



@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  flights: FlightModel[] = [];
  searchForm !: FormGroup;
  from !: string
  to !: string
  departureDate !: Date
  arrivalDate !: Date

  constructor(private router: Router, private airlineDataService: AirlineDataService,
    private flightDataService: FlightDataService, private bookingService: BookingService
    , private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      from: '',
      to: '',
      departureDate: new Date(),
      arrivalDate: new Date
    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
    this.from = formValues['from'];
    this.to = formValues['to']
    this.arrivalDate = formValues['arrivalDate']
    this.departureDate = formValues['departureDate']
    console.log("From Place " + this.from)
    console.log("To Place" + this.to)
    console.log("DepartureDate" + this.departureDate)
    console.log("ArrivalDate" + this.arrivalDate)
  }

}
