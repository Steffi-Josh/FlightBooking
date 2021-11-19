import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AIRLINE_API_URL } from 'src/app/app.constants';
import { DiscountModel } from 'src/app/models/DiscountModel';

@Injectable({
  providedIn: 'root'
})
export class DiscountDataService {

  constructor(private http : HttpClient) { }

  retriveAllDiscount(){
    return this.http.get<DiscountModel[]>(`${AIRLINE_API_URL}/discount/getAllDiscount`)
  }
  deleteDiscount(id : number){
    return this.http.delete(`${AIRLINE_API_URL}/discount/deleteDiscount/${id}`)
  }

  retriveDiscount(id : number){
    return this.http.get<DiscountModel>(`${AIRLINE_API_URL}/discount/getDiscountById/${id}`)
  }

  updateDiscount(id : number , discount : DiscountModel){
    return this.http.put<DiscountModel>(`${AIRLINE_API_URL}/discount/updateDiscount/${id}`,discount)
  }

  createDiscount(discount : DiscountModel){
    return this.http.post<DiscountModel>(`${AIRLINE_API_URL}/discount/createDiscount`,discount)
  }
}
