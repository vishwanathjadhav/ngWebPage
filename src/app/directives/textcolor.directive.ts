import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextcolor]'
})
export class TextcolorDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
  }
}