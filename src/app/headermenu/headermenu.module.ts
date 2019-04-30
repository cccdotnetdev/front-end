import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadermenuComponent } from './headermenu/headermenu.component';

@NgModule({
  declarations: [HeadermenuComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeadermenuComponent
  ]
})
export class HeadermenuModule { }
