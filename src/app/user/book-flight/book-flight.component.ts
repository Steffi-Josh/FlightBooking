import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router ,NavigationExtras } from '@angular/router';
import { AirlineDataService } from 'src/app/service/data/airline-data.service';
import { FlightDataService } from 'src/app/service/data/flight-data.service';
import { AirlineModel } from '../models/AirlineModel';
import { BookingModel } from '../models/bookingModel';
import { FlightModel } from '../models/FlightModel';
import { BookingService } from '../service/booking.service';



@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  flights: any;
  searchForm !: FormGroup;
  from !: string
  to !: string
  departureDate !: Date
  arrivalDate !: Date
  submitted : boolean = false
  navigatevalues :any

  constructor(private router: Router, private bookingService: BookingService
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
    this.submitted = true
    this.searchresult();
  }
  


bookFlight(id : number , airlineName : string){
console.log("Inside bookFlight" + id + "" + airlineName)
const navigationExtras: NavigationExtras = {
  state: {
    departureDate: this.departureDate,
    arrivalDate: this.arrivalDate,
    from: this.from,
    to: this.to
  }
};
this.router.navigate(['users/user/addPassengers',id ,airlineName] ,navigationExtras)
}

  searchresult(){
    this.bookingService.retriveFlightByFromAndTo(this.from,this.to).subscribe(
      response => {
        console.log(response);
        
        this.flights = response;
     
        console.log("Inside search result" + this.flights);
      }
    )
  }



}
