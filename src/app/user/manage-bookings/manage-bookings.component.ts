import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingModel } from '../models/bookingModel';
import { FlightModel } from '../models/FlightModel';
import { BookingService } from '../service/booking.service';
// import jsPDF from 'jspdf';
// const pdfMakeX = require('pdfmake/build/pdfmake.js');
// const pdfFontsX = require('pdfmake-unicode/dist/pdfmake-unicode.js');
// pdfMakeX.vfs = pdfFontsX.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';

// declare module 'pdfmake/build/pdfmake.js';
// declare module 'pdfmake/build/vfs_fonts.js';

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

  // @ViewChild('pdfTable', { static: false })
  // pdfTable!: ElementRef;

  // SavePDF(){
  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element: any, renderer: any) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.fromHTML(pdfTable.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');
  // }

  // SavePDF(){
  //   var prepare: any[]=[];
  //   this.bookingDetails.forEach((e: { bookerEmailId: any; from: any; to: any; price: any; departureDate: any; returnDate: any; })=>{
  //     var tempObj =[];
  //     tempObj.push(e.bookerEmailId);
  //     tempObj.push(e.from);
  //     tempObj.push(e.to);
  //     tempObj.push(e.price);
  //     tempObj.push(e.departureDate);
  //     tempObj.push(e.returnDate);
  //     prepare.push(tempObj);
  //   });
  //   const doc = new jsPDF();
  //   doc.autoTable({
  //       head: [['bookerEmailId','','from','','to','','price','','departureDate','','returnDate']],
  //       body: prepare
  //   });
  //   doc.save('BOOKING' + '.pdf');

  // }

  SavePDF(){
    
  }

}
