import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage  = 'Invalid Credentials';
  userName  = 'admin';
  password  = 'admin';
  invalidCred: boolean = false;

  constructor(private router : Router , private basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    (this.basicAuthService.authenticate(this.userName, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.userName])
      },
      error => {
        console.log(error)
        this.invalidCred = true

      }
    )
    );

  }

}
