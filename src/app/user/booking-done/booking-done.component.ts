import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-done',
  templateUrl: './booking-done.component.html',
  styleUrls: ['./booking-done.component.css']
})
export class BookingDoneComponent implements OnInit {
  pnr !: string

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.pnr = this.route.snapshot.params['pnr'];
  }

}
