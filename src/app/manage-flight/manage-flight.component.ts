import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightModel } from '../models/FlightModel';
import { FlightDataService } from '../service/data/flight-data.service';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.css']
})
export class ManageFlightComponent implements OnInit {

  id!: number;
  airlineName!: string;
  flight!: FlightModel;

  constructor(private route : ActivatedRoute , 
    private router : Router ,  private flightDataService : FlightDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.airlineName = this.route.snapshot.params['airlineName'];
    console.log("airlineName " + this.airlineName)
    this.flight = new FlightModel(this.id,'','','',0,0,'','','');
    if(this.id != -1){
      console.log(this.id)
      this.flightDataService.retriveFlight(this.id).subscribe(
        data => this.flight = data
      )
    }
  }

  saveFlight(){
    console.log("Inside save Flight")
    if(this.id == -1){
      this.flightDataService.createFlight(this.flight, this.airlineName).subscribe(
        data => {
          console.log("Createflight" + data)
          this.router.navigate(['flightInventory'])
        }
      )
    }
    else{
      this.flightDataService.updateFlight(this.id,this.flight).subscribe(
        data => {
          console.log("Updateflight" + data)
          this.router.navigate(['flightInventory'])
        }
      )
    }
  }

}
