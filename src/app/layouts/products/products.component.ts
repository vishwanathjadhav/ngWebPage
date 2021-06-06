import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  title = 'Hello Angular';

  mobParts = [
    {
      id: 1001,
      name: 'Mobile Screen',
      inStock: 0,
      price: 1200,
      country: 'India',
    },
    {
      id: 1002,
      name: 'MOBILE HEADPHONES',
      inStock: 60,
      price: 1500,
      country: 'Germany',
    },
    {
      id: 1003,
      name: 'mobile charger',
      inStock: 125,
      price: 1800,
      country: '',
    },
  ];
}