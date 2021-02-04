import {Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OtpComponent implements OnInit {

  @ViewChild('timer') timer: ElementRef;
  renderer: Renderer2;

  form: FormGroup;
  formBuilder: FormBuilder;
  resendotp: boolean;

  constructor(param1: FormBuilder, param2: Renderer2) {
    this.formBuilder = param1;
    this.renderer = param2;
  }

  otptimer(time: number): void {
    let a = time;
    const i = setInterval(() => {
      if (a < 0) {
        clearInterval(i);
        this.resendotp = true;
        this.renderer.setStyle(this.timer.nativeElement, 'display', 'none');
      } else {
        this.resendotp = false;
        this.renderer.setStyle(this.timer.nativeElement, 'display', 'block');
        this.timer.nativeElement.textContent = a < 10 ? `00:0${a}` : `00:${a}`;
        a--;
      }
    }, 1000);
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      c1: [null, Validators.compose([
        Validators.required
      ])],
      c2: [null, Validators.compose([
        Validators.required
      ])],
      c3: [null, Validators.compose([
        Validators.required
      ])],
      c4: [null, Validators.compose([
        Validators.required
      ])]
    });

    this.otptimer(30);

  }

  onSubmit(): void {

  }

}
