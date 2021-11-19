import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';

@Component({
  selector: 'app-manage-airline',
  templateUrl: './manage-airline.component.html',
  styleUrls: ['./manage-airline.component.css']
})
export class ManageAirlineComponent implements OnInit {

  id!: number;
  airline!: AirlineModel;

  constructor( private route : ActivatedRoute , 
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.airline = new AirlineModel(this.id,'efdef','efewf','ewfege');

  }

  saveAirline(){
    console.log("Inside save Airline")
  }

}
