import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';
import { DiscountModel } from '../models/DiscountModel';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {

  id!: number;
  discount!: DiscountModel;

  constructor(private route : ActivatedRoute , 
    private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.discount = new DiscountModel(this.id,'efdef',100.00);
  }

  saveDiscount(){
    console.log("Inside save Discount")
  }

}
