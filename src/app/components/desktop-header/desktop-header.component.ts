import {Component, Input, OnInit} from '@angular/core';
import {LoginUser} from '../../models/user.model';
import {Service1Service} from '../../services/service1.service';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrls: ['./desktop-header.component.scss']
})
export class DesktopHeaderComponent implements OnInit {

  @Input() loginUser: LoginUser;
  prop1: Service1Service;

  constructor(param1: Service1Service) {
    this.prop1 = param1;
  }

  ngOnInit(): void {

  }

}
