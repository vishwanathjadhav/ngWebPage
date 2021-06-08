import { Component, OnInit } from '@angular/core';
import { MOBPARTS } from './../../data/mobparts.mock';
import { SharedService } from './../../services/shared.service';
import { MobParts } from './../../model/mobparts.model';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  prodCount: any;
  mobParts: MobParts[] = [];

  ngOnInit(): void {
    console.log('Calling init the constructor...!');
    this.mobParts = MOBPARTS;
    this.prodCount = this.sharedService.countprod(this.mobParts);
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('Calling Destroy the constructor...!');
  }
  downCount(mobpart: any) {
    if (mobpart.quantity > 0) {
      mobpart.quantity = mobpart.quantity - 1;
    }
  }

  upCount(mobpart: any) {
    if (mobpart.quantity < mobpart.inStock) {
      mobpart.quantity = mobpart.quantity + 1;
    }
  }
}
