import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking-done',
  templateUrl: './booking-done.component.html',
  styleUrls: ['./booking-done.component.css']
})
export class BookingDoneComponent implements OnInit {
  pnr !: string
  cost !: number
  submitted = false
  searchForm !: FormGroup;

  constructor(private formBuilder: FormBuilder ,private activatedRoute : ActivatedRoute , private route: Router ) { 
    
  }

  ngOnInit(): void {
   this.pnr = this.activatedRoute.snapshot.params['pnr'];
   //this.cost = 2000

  }

  handleSearch(formValues: any) {
    console.log(formValues)
   // this.bookingSched.bookerName  = formValues['bookerName']
  }

}
