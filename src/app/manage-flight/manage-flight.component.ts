import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightModel } from '../models/FlightModel';

@Component({
  selector: 'app-manage-flight',
  templateUrl: './manage-flight.component.html',
  styleUrls: ['./manage-flight.component.css']
})
export class ManageFlightComponent implements OnInit {

  id!: number;
  flight!: FlightModel;

  constructor(private route : ActivatedRoute , 
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.flight = new FlightModel(this.id,'efdef','efewf','ewfege',23234,242,'sfefe','regreg','erger');
  }

  saveFlight(){
    console.log("Inside save Flight")
  }

}
