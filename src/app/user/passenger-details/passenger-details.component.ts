import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassengerModel } from '../models/bookingModel';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  passengerDetails !: any
  passengerDetailsDummy !: any


  constructor( private activatedroute: ActivatedRoute ,private router: Router
    ) { 
      const navigation = this.router.getCurrentNavigation();
      if(navigation != null){
    
          console.log(navigation.extras.state);
 
       
      }
     
    }

  ngOnInit(): void {
    console.log(history.state);
    this.passengerDetails = history.state.data
    console.log(this.passengerDetails);
           
    
  }

}
