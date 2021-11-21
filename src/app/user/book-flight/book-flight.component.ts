import { Component, OnInit , Pipe, PipeTransform} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router ,NavigationExtras } from '@angular/router';
import { BookingService } from '../service/booking.service';



@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})


export class BookFlightComponent implements OnInit {

  flights: any;
  searchForm !: FormGroup;
  from !: string
  to !: string
  departureDate !: Date
  arrivalDate !: Date
  submitted : boolean = false
  navigatevalues :any
  flightCost !: number
  filterargs = {active: false};

 


  constructor(private router: Router, private bookingService: BookingService
    , private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      from: '',
      to: '',
      departureDate: new Date(),
      arrivalDate: new Date
    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
    this.from = formValues['from'];
    this.to = formValues['to']
    this.arrivalDate = formValues['arrivalDate']
    this.departureDate = formValues['departureDate']
   
    console.log("From Place " + this.from)
    console.log("To Place" + this.to)
    console.log("DepartureDate" + this.departureDate)
    console.log("ArrivalDate" + this.arrivalDate)
    this.submitted = true
    this.searchresult();
  }
  


bookFlight(id : number , airlineName : string , cost : number){
console.log("Inside bookFlight" + id + "" + airlineName)
const navigationExtras: NavigationExtras = {
  state: {
    departureDate: this.departureDate,
    arrivalDate: this.arrivalDate,
    from: this.from,
    to: this.to,
    cost : cost
  }
};
this.router.navigate(['users/user/addPassengers',id ,airlineName] ,navigationExtras)
}

  searchresult(){
    this.bookingService.retriveFlightByFromAndTo(this.from,this.to).subscribe(
      response => {
        console.log(response);
        
        this.flights = response;
     
        console.log("Inside search result" + this.flights);
       // this.flightCost = this.flights.price;
        console.log("Inside search result" + this.flightCost);
      }
    )
  }



}
