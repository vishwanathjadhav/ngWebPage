import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  @Input() pageName: any;
  @Output() fromChild = new EventEmitter();
  sendToPar(){
    this.fromChild.emit("Enter some data here!!!")
  }
  constructor() {}

  ngOnInit(): void {}
}
