import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountModel } from '../models/DiscountModel';
import { DiscountDataService } from '../service/data/discount-data.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  discounts: DiscountModel[] = [];
  message !: string;

  constructor(private route : Router , private discountDataService : DiscountDataService) { }

  ngOnInit(): void {
    // this.discounts = [
    //   new DiscountModel(1,'ede',100.00)
    // ]
    this.refresh();
  }

  updateDiscount(id: number) {
    this.route.navigate(['manageDiscount',id])
  }
  deleteDiscount(id: number) {
    this.discountDataService.deleteDiscount(id).subscribe(
      response => {
        console.log(response);
        this.message = `Deletion of Discount ${id} is successfull!`
        this.refresh();
      }
    )
  }
  addDiscount() {
    this.route.navigate(['manageDiscount',-1])
  }

  refresh() {
    this.discountDataService.retriveAllDiscount().subscribe(
      response => {
        console.log(response);
        this.discounts = response;
      }
    )
  }

}
