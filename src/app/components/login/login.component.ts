import {Component, OnInit} from '@angular/core';
import {Service1Service} from '../../services/service1.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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


}
