import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountModel } from '../models/DiscountModel';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  discounts: DiscountModel[] = [];
  message !: string;

  constructor(private route : Router) { }

  ngOnInit(): void {
    this.discounts = [
      new DiscountModel(1,'ede',100.00)
    ]
  }

  updateDiscount(id: number) {
    this.route.navigate(['manageDiscount',id])
  }
  deleteDiscount(id: number) {
  }
  addDiscount() {
    this.route.navigate(['manageDiscount',-1])
  }

}
