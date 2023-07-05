import { Component, OnInit } from '@angular/core';
import {
  FormControlName,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchControls } from './match-controls';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  signUpForm = this.fb.group(
    {
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required,Validators.minLength(10)]],
      address: ['',Validators.required],
      city: ['',Validators.required],
      password: ['', Validators.required],
      confirmPwd: ['',Validators.required],
      agreement: [false, Validators.required],
    },
    {validator: matchControls('password', 'confirmPwd')}
  );
  submitted: boolean=false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  signUp() {
    this.submitted = true;
    if (!this.signUpForm.valid) {
      alert('Please fill all the required fields to create a super hero!');
      return false;
    } else {
      return console.log(this.signUpForm.value);
    }
  }
  get name() {
    return this.signUpForm.get('fullName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
}
