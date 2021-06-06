import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offer',
})
export class OfferPipe implements PipeTransform {
  // name: string="ALEX";
  transform(value: any): any {
    return value / 2;
  }
}