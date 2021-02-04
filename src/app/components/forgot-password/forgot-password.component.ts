import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [
    trigger('animation1', [
      state('state1', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(10rem)'
        }),
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;
  formBuilder: FormBuilder;
  emailSent: boolean;

  constructor(param2: FormBuilder) {
    this.formBuilder = param2;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

}
