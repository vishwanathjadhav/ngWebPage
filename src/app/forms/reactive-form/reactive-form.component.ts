import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  formObj = new FormGroup({
    uNameObj: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passObj: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('uNameObj');
  }
}
