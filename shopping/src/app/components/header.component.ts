import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <div>
        <h2>{{title}}</h2>
        <p>Online Shopping</p>
    </div>`,
    styles:['h2{background-color:red; color:white; text-align:center}','p{color:blue}']
})

export class HeaderComponent {
  title:string = 'Amazon Shopping';
}