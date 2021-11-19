import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';
import { AirlineDataService } from '../service/data/airline-data.service';
import { DiscountDataService } from '../service/data/discount-data.service';

@Component({
  selector: 'app-manage-airline',
  templateUrl: './manage-airline.component.html',
  styleUrls: ['./manage-airline.component.css']
})
export class ManageAirlineComponent implements OnInit {

  id!: number;
  airline!: AirlineModel;

  constructor( private activatedRoute : ActivatedRoute , 
    private router : Router , private airlineDataService : AirlineDataService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.airline = new AirlineModel(this.id,'','','');
    if(this.id != -1){
      console.log(this.id)
      this.airlineDataService.retriveAirline(this.id).subscribe(
        data => this.airline = data
      )
    }

  }

  saveAirline(){
    console.log("Inside save Airline")
    if(this.id == -1){
      this.airlineDataService.createAirline(this.airline).subscribe(
        data => {
          console.log("CreateAirline" + data)
          this.router.navigate(['airlineInventory'])
        }
      )
    }
    else{
      this.airlineDataService.updateAirline(this.id,this.airline).subscribe(
        data => {
          console.log("UpdateAirline" + data)
          this.router.navigate(['airlineInventory'])
        }
      )
    }
  }

}
