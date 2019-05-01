import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year;
  constructor() { }

  ngOnInit() {
    var _year = new Date();
    var span = document.createElement("span");
    this.year = _year.getFullYear();
  }

}
