import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'CybercomCreation3';
  currentURL: string;
  moduleName: string;
  constructor(private location: Location,private route : ActivatedRoute) { }
  ngOnInit() {
    this.currentURL = location.pathname; 
    this.route.paramMap
          .subscribe(params => {
            this.moduleName = params.get('modulename');
        });
        console.log(this.moduleName);
  }
}





