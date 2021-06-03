import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  prodName = 'Mobile';
  prodNames = ['mob', 'lapi', 'book'];
  mobParts = [
    {
      id: 1001,
      name: 'Mobile Screen',
      inStock: 25,
      price: 1200,
    },
    {
      id: 1002,
      name: 'Mobile Headphone',
      inStock: 60,
      price: 1500,
    },
    {
      id: 1003,
      name: 'Mobile Charger',
      inStock: 125,
      price: 1800,
    },
  ];
}