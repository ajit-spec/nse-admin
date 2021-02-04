import {Component, OnInit} from '@angular/core';
import {Service1Service} from './services/service1.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {LoginUser} from './models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  prop1: Service1Service;
  breakpointObserver: BreakpointObserver;
  loginUser: LoginUser;
  isLogin: boolean;
  subscription: Subscription;

  constructor(param1: Service1Service, param2: BreakpointObserver) {
    this.prop1 = param1;
    this.breakpointObserver = param2;
  }

  ngOnInit(): void {

    this.breakpointObserver.observe(['(max-width: 1279px)']).subscribe(value => {
      this.prop1.isSmallScreen = value.matches;
    });


  }

}
