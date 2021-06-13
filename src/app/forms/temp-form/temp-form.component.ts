import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
})
export class TempFormComponent {
  showData(unameVar: any) {
    console.log(' unameVar : ', unameVar);
  }
}
