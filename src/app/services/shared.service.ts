import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  countprod(mobParts: any) {
    let prodCount = 0;

    for (let mobpart of mobParts) {
      prodCount = prodCount + mobpart.inStock;
    }
    return prodCount;
  }
}
