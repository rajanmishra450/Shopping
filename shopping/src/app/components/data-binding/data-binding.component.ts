import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{
  Product:any={
    Name:'Samsung TV',
    Price:45000.55,
    Stock:false
  }
  isInvalid = false;
}
