import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';
import { AirlineDataService } from '../service/data/airline-data.service';

@Component({
  selector: 'app-airline-inventory',
  templateUrl: './airline-inventory.component.html',
  styleUrls: ['./airline-inventory.component.css']
})
export class AirlineInventoryComponent implements OnInit {

  airlines: AirlineModel[] = [];
  message !: string;

  constructor(private router : Router , private airlineDataService : AirlineDataService ) { }

  ngOnInit(): void {
    // this.airlines = [
    //   new AirlineModel(1,'ede','dada','efdeasf')
    // ]
    this.refresh();
  }

  refresh() {
    this.airlineDataService.retriveAllAirline().subscribe(
      response => {
        console.log(response);
        this.airlines = response;
      }
    )
  }

  updateAirline(id: number) {
    this.router.navigate(['manageAirline',id])
  }
  // deleteAirline(id: number) {
  // }
  addAirline() {
    this.router.navigate(['manageAirline',-1])
  }
}
