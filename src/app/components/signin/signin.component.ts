import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Service1Service} from '../../services/service1.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit {

  prop1: Service1Service;
  prop2: Router;

  form: FormGroup;
  formBuilder: FormBuilder;

  showPassword: boolean;

  constructor(param1: Service1Service, param2: FormBuilder, param3: Router) {
    this.prop1 = param1;
    this.formBuilder = param2;
    this.prop2 = param3;
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

  }

  onSubmit(): void {


    const loginUser = {
      user_id: this.form.get('email').value.trim(),
      user_password: this.form.get('password').value.trim(),
      action: 'login'
    };

    console.log(loginUser);
    this.prop1.loginUser = loginUser;


    this.prop1.login().subscribe(value => {
      console.log(`data -> ${value}`);
    }, error => {
      console.log(`error -> ${error}`);

    });

    this.prop2.navigate(['/maker']);
  }

}
