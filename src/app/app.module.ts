import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Comp1Component} from './components/comp1/comp1.component';
import {MaterialModule} from './modules/material/material.module';
import {Comp2Component} from './components/comp2/comp2.component';
import {LoginComponent} from './components/login/login.component';
import {DesktopHeaderComponent} from './components/desktop-header/desktop-header.component';
import {MakerComponent} from './components/maker/maker.component';
import {SharedModule} from './modules/shared/shared.module';
import {MobileHeaderComponent} from './components/mobile-header/mobile-header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {EditConfirmMakerComponent} from './components/edit-confirm-maker/edit-confirm-maker.component';
import {SigninComponent} from './components/signin/signin.component';
import {OtpComponent} from './components/otp/otp.component';
import {Comp3Component} from './components/comp3/comp3.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    LoginComponent,
    DesktopHeaderComponent,
    MakerComponent,
    MobileHeaderComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EditConfirmMakerComponent,
    SigninComponent,
    OtpComponent,
    Comp3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
