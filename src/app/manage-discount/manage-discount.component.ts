import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirlineModel } from '../models/AirlineModel';
import { DiscountModel } from '../models/DiscountModel';
import { DiscountDataService } from '../service/data/discount-data.service';

@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {

  id!: number;
  discount!: DiscountModel;

  constructor(private activatedRoute : ActivatedRoute , 
    private router : Router , private discountDataService : DiscountDataService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.discount = new DiscountModel(this.id,'',0);
    if(this.id != -1){
      console.log(this.id)
      this.discountDataService.retriveDiscount(this.id).subscribe(
        data => this.discount = data
      )
    }
  }

  saveDiscount(){
    console.log("Inside save Discount")
    if(this.id == -1){
      this.discountDataService.createDiscount(this.discount).subscribe(
        data => {
          console.log("CreateDiscount" + data)
          this.router.navigate(['discount'])
        }
      )
    }
    else{
      this.discountDataService.updateDiscount(this.id,this.discount).subscribe(
        data => {
          console.log("UpdateDiscount" + data)
          this.router.navigate(['discount'])
        }
      )
    }
  }

}
