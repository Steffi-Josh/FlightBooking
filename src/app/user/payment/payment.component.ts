import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountDataService } from 'src/app/service/data/discount-data.service';
import { BookingModel } from '../models/bookingModel';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  pnr !: string
  cost !: number
  submitted = false
  searchForm !: FormGroup;
  bookingSched !: BookingModel;
  discounts !: any
  discountAmount !: number
  finalCost !: number

  constructor(private formBuilder: FormBuilder ,private activatedRoute : ActivatedRoute , 
    private route: Router , private discountDataService : DiscountDataService , private bookingService : BookingService) { 

      const navigation = this.route.getCurrentNavigation();
    if(navigation !=null){
      const state = navigation.extras.state as {
        bookingSched: BookingModel,
      };
      console.log("PaymentComponent- NavigationBar " + "BookingModel " + state.bookingSched )
     
      this.bookingSched= state.bookingSched
      console.log("PaymentComponent" + "BookingModel " + this.bookingSched)

    }
    this.searchForm = this.formBuilder.group({
      costId: '',
      discountId : '',
      finalCostId : ''
    });
    }

  ngOnInit(): void {
    this.cost = this.activatedRoute.snapshot.params['cost'];

    this.discountDataService.retriveAllDiscount().subscribe(
      response => {
        console.log(response);
        this.discounts = response;
      }
    )
    
  }

  onChange (event : any){
    console.log("Inside onChange - DiscountCode " + event.target.value)
      this.discountAmount =  event.target.value;
      console.log("Inside onChange " +this.discountAmount)
      this.finalCost =  this.cost - this.discountAmount
      console.log("Inside onChange - final cost to pay " +this.finalCost)
  }

  handleSearch() {
    console.log(this.finalCost)
    this.bookingSched.price = this.finalCost
    console.log("PaymentComponent - handleSearch - price"  + this.bookingSched.price)
    console.log( "PaymentComponent - handleSearch - bookingSched"  +  this.bookingSched)
      this.bookingService.bookFlight(this.bookingSched).subscribe(
      data => {
        console.log("bookFlight" + data.pnr)
        this.pnr  = data.pnr;
        this.route.navigate(['users/user/bookingsuccessful',this.pnr])
      }
    )
  }

}
