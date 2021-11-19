import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightModel } from '../models/FlightModel';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AirlineModel } from '../models/AirlineModel';

@Component({
  selector: 'app-flight-inventory',
  templateUrl: './flight-inventory.component.html',
  styleUrls: ['./flight-inventory.component.css']
})
export class FlightInventoryComponent implements OnInit {

   flights: FlightModel[] = [];
  message !: string;
  airlineName !: string;

  
  

  constructor( private route : Router ) { 
   console.log("Inside Cons")
  }

  ngOnInit(): void {
    console.log("Inside Init")
    this.flights = [
      new FlightModel(1,'ede','dada','efdeasf',45,56,'fege','gr','Indigo'),
      new FlightModel(2,'sfggg','dxd','dgddgr',45,56,'rgre','gr','GoAir')
    ]
    
    
  }

  //dropdoen
  submitted = false;
  AirlineList: any = ['Indigo', 'GoAir']
  
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
    this.airlineName  = this.form.value;
    // console.log("Airline Name" + this.airlineName);
    // if(this.airlineName != null){
    //   const nameairline = this.airlineName
    //   console.log(nameairline)
    //   this.flights = this.flights.filter(function(node) {
    //     return node.airlineName== nameairline;
    // });
    // console.log(this.flights)
    // }
  }

  updateFlight(id: number) {
    this.route.navigate(['manageFlight',id])
  }
  deleteFlight(id: number) {
  }
  addFlight() {
    this.route.navigate(['manageFlight',-1])
  }

}
