import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularReactiveForm';
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    food: new FormControl(''),

    vehicle1: new FormControl(''),
    vehicle2: new FormControl(''),
    vehicle3: new FormControl('')
  });
  collectdata() {
    console.warn(this.loginForm.value);
  }
}
