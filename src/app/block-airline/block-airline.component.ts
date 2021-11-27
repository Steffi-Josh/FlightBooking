import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';
import { FlightModel } from '../models/FlightModel';
import { AirlineDataService } from '../service/data/airline-data.service';
import { FlightDataService } from '../service/data/flight-data.service';

@Component({
  selector: 'app-block-airline',
  templateUrl: './block-airline.component.html',
  styleUrls: ['./block-airline.component.css']
})
export class BlockAirlineComponent implements OnInit {

  airlines: AirlineModel[] = [];
  submitted = false;
  airlineName !: string;
  flights: FlightModel[] = [];
  message !: string;
  unblock = false;
  active !: any

  
  constructor(private route : Router , private airlineDataService : AirlineDataService ,
    private flightDataService : FlightDataService ,private activatedRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.airlineDataService.retriveAllAirline().subscribe(
      response => {
        console.log(response);
        this.airlines = response;
      }
    )
  }

  form = new FormGroup({
    airlineName : new FormControl('', Validators.required)
  });

  airlineSubmit(){
    this.submitted = true;
    console.log(this.submitted + "Airline Submitted");
    console.log(this.form.value);
   
    var stringify = JSON.stringify(this.form.value)
    console.log(stringify + "stringify");
    let parsed = JSON.parse(stringify);
   console.log(parsed.airlineName);

   this.airlineName  = parsed.airlineName;
   console.log(this.airlineName);
   this.getBlockedFlights();
   //this.unblock = false
    
  }

  unblockFlight(flightId : number){
    this.flightDataService.unblockFlight(flightId).subscribe(
      data => {
        console.log("Updateflight" + data)
        console.log(data)
        console.log(data.active)
        this.active  = data.active
      //  this.unblock = true
      this.refreshPage()
      }
    )
  }

  refreshPage(){
    this.flightDataService.retriveFlightByAirlineName(this.airlineName).subscribe(
      response => {
        console.log(response);
        this.flights = response;
      
      }
    )
} 

  getBlockedFlights(){
    console.log("Inside Refresh"+ this.airlineName)
    this.flightDataService.getBlockedFlights(this.airlineName).subscribe(
      response => {
        console.log(response);
        this.flights = response;
        this.active  = true
      }
    )
  }

}
