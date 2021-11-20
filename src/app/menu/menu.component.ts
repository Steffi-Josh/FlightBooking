import { Component, OnInit } from '@angular/core';
import { BasicAuthService } from '../service/basic-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

}
