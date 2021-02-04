import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckerRoutingModule } from './checker-routing.module';
import {MaterialModule} from '../material/material.module';
import { CheckerComponent } from '../../components/checker/checker.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CheckerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    CheckerRoutingModule
  ]
})
export class CheckerModule { }
