import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightModel } from '../models/FlightModel';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AirlineModel } from '../models/AirlineModel';
import { AirlineDataService } from '../service/data/airline-data.service';
import { FlightDataService } from '../service/data/flight-data.service';

@Component({
  selector: 'app-flight-inventory',
  templateUrl: './flight-inventory.component.html',
  styleUrls: ['./flight-inventory.component.css']
})
export class FlightInventoryComponent implements OnInit {

  flights: FlightModel[] = [];
  message !: string;
  airlineName !: string;
  submitted = false;
 // AirlineList: any = [];
  airlines: AirlineModel[] = [];


  constructor( private route : Router , private airlineDataService : AirlineDataService ,
       private flightDataService : FlightDataService ,private activatedRoute : ActivatedRoute ) { 
   console.log("Inside Cons")
  }

  ngOnInit(): void {
    console.log("Inside Init")
    // this.flights = [
    //   new FlightModel(1,'ede','dada','efdeasf',45,56,'fege','gr','Indigo'),
    //   new FlightModel(2,'sfggg','dxd','dgddgr',45,56,'rgre','gr','GoAir')
    // ]
   
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

  
  // get f(){
  //   return this.form.controls;
  // }
  
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
   this.refresh();
    
  }

  refresh() {
    const aisad  = 'sefsgs';
    console.log("Inside Refresh"+ this.airlineName)
    console.log("Inside Refresh"+ aisad)
    this.flightDataService.retriveFlightByAirlineName(this.airlineName).subscribe(
      response => {
        console.log(response);
        this.flights = response;
      }
    )
  }

  updateFlight(id: number) {
    this.route.navigate(['manageFlight',id])
  }
  deleteFlight(id: number) {
    this.flightDataService.deleteFlight(id).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of Flight ${id} is successfull!`
        this.refresh();
      }
    )
  }
  addFlight() {
    this.route.navigate(['manageFlight',-1,this.airlineName])
  }

}
