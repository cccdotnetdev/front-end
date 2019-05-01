import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.css']
})
export class HeadermenuComponent implements OnInit {
  currentURL: string;
  constructor(public location: Location, router: Router) { }

  ngOnInit() {
    this.currentURL = location.pathname; 
  }

}
