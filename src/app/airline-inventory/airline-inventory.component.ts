import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';

@Component({
  selector: 'app-airline-inventory',
  templateUrl: './airline-inventory.component.html',
  styleUrls: ['./airline-inventory.component.css']
})
export class AirlineInventoryComponent implements OnInit {

  airlines: AirlineModel[] = [];
  message !: string;

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.airlines = [
      new AirlineModel(1,'ede','dada','efdeasf')
    ]
  }

  updateAirline(id: number) {
    this.route.navigate(['manageAirline',id])
  }
  deleteAirline(id: number) {
  }
  addAirline() {
    this.route.navigate(['manageAirline',-1])
  }
}
