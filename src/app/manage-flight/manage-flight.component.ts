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
  mealtypes: any = ['veg', 'non-veg'] ; 
  mealType !: string;
  scheduledDatesList : any = ['Daily','WeekDays','Weekend'];
  scheduledDates !: string;

  constructor(private route : ActivatedRoute , 
    private router : Router ,  private flightDataService : FlightDataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.airlineName = this.route.snapshot.params['airlineName'];
    console.log("airlineName " + this.airlineName)
    this.flight = new FlightModel(this.id,'','','',0,0,'','','',false);
    if(this.id != -1){
      console.log(this.id)
      this.flightDataService.retriveFlight(this.id).subscribe(
        data => this.flight = data
      )
    }
  }

  onChange (event : any){
    console.log("Inside selectChangeHandler - mealtype " + event.target.value)
      this.flight.mealType =  event.target.value;
      console.log("Inside selectChangeHandler " +this.flight.mealType)
  }

  selectChangeHandler (event : any){
    console.log("Inside selectChangeHandler - scheduledDates " +  event.target.value)
    this.flight.scheduledDates = event.target.value;
    console.log("Inside selectChangeHandler - scheduledDates " + this.flight.scheduledDates)
}

  saveFlight(){
    console.log("Inside save Flight")
    if(this.id == -1){
     // this.flight.mealType = this.mealType;
    //  this.flight.scheduledDates = this.scheduledDates;
      console.log("Create Flight - mealtype" + this.flight.mealType)
      this.flightDataService.createFlight(this.flight, this.airlineName).subscribe(
        data => {
          console.log("Createflight" + data)
          this.router.navigate(['flightInventory'])
        }
      )
    }
    else{
     // this.flight.mealType = this.mealType;
     // this.flight.scheduledDates = this.scheduledDates;
      this.flightDataService.updateFlight(this.id,this.flight).subscribe(
        data => {
          console.log("Updateflight" + data)
          this.router.navigate(['flightInventory'])
        }
      )
    }
  }

}
