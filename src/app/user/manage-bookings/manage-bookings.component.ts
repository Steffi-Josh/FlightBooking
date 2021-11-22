import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingModel } from '../models/bookingModel';
import { FlightModel } from '../models/FlightModel';
import { BookingService } from '../service/booking.service';
//import * as jsPDF from 'jspdf'; 
import jsPDF from 'jspdf';


@Component({
  selector: 'app-manage-bookings',
  templateUrl: './manage-bookings.component.html',
  styleUrls: ['./manage-bookings.component.css']
})
export class ManageBookingsComponent implements OnInit {
  searchForm !: FormGroup;
  bookingDetails !: any
  pnr !: string
  submitted = false
  message !: string;
  flights: any;
  constructor(private formBuilder: FormBuilder , private bookingService : BookingService , private router : Router ) { 

    this.searchForm = this.formBuilder.group({
      pnrNumber : ''
    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
    console.log(formValues['pnrNumber'])
    //getAllPNRFromService
    this.pnr = formValues['pnrNumber']
    this.bookingService.getBookingDetailsFromPNR(this.pnr).subscribe(
      response => {
        console.log(response);
        this.bookingDetails = response;
      }
    )
    this.submitted = true;
  }

  cancelFlight(id: number) {
    this.bookingService.cancelFlight(id).subscribe(
      response => {
        console.log(response);
        this.message = `Cancellation of Flight ${id} is successfull!`
       // this.refresh(id)
      }
    )
  }

  refresh(id : number){
     
      let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
         
      
  }
 
  @ViewChild('content') content !: ElementRef;

  public SavePDF(): void {  

    const DATA = this.content.nativeElement;
    const doc: jsPDF = new jsPDF("l", "pt", "b1");
    doc.html(DATA, {
       callback: (doc) => {        
         doc.output("dataurlnewwindow");
         doc.save('test.pdf');  
       }
    });
   
  }  


}
