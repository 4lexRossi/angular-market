/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-shop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarList = [ 
    {id:1, index: 'home'},
    {id:2, index:'contact'},
    {id:3, index:'chuck' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
