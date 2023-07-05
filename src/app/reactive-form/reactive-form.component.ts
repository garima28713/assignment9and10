import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  signUpForm = new FormGroup(
    {
      fullName: new FormControl<string>(''),
      email: new FormControl<string>(''),
      phoneNo: new FormControl<number>(0),
      address: new FormControl<string>(''),
      city: new FormControl<string>(''),
      password: new FormControl<string>(''),
      confirmPwd: new FormControl<string>(''),
      agreement: new FormControl<boolean>(false)
    }
  );

  signUp(){
    console.log(this.signUpForm.value)
  }
}
