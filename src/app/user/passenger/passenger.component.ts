import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  searchForm !: FormGroup;
  bookingSched : any

  constructor(private formBuilder: FormBuilder) { 
    this.searchForm = this.formBuilder.group({
      bookerName: '',
      email: '',
      seats: '',
      passName: '',
      passAge: '',
      meal: '',
      gender: ''
     
      
    });
  }

  ngOnInit(): void {
  }

  handleSearch(formValues: any) {
  console.log(formValues)
  }

}
