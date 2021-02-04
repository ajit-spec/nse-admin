import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../custom-validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;

  showPassword: boolean;

  constructor(param1: FormBuilder) {
    this.formBuilder = param1;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.required,
        CustomValidator.validPass(/[a-z]/g, {nolowercase: true}),
        CustomValidator.validPass(/[A-Z]/g, {nouppercase: true}),
        CustomValidator.validPass(/[0-9]/g, {nodigit: true}),
        CustomValidator.validPass(/[^a-zA-Z\d]/g, {nospecialchar: true}),
        Validators.minLength(8)
      ])],
      confirmpassword: ['', Validators.compose([
        Validators.required,

      ])]
    }, {
      validators: CustomValidator.matchPass
    });

  }

}
