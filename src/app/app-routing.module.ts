import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Comp1Component} from './components/comp1/comp1.component';
import {LoginComponent} from './components/login/login.component';
import {MakerComponent} from './components/maker/maker.component';
import {CheckerComponent} from './components/checker/checker.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {EditConfirmMakerComponent} from './components/edit-confirm-maker/edit-confirm-maker.component';
import {SigninComponent} from './components/signin/signin.component';
import {OtpComponent} from './components/otp/otp.component';
import {Comp2Component} from './components/comp2/comp2.component';
import {Comp3Component} from './components/comp3/comp3.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
        data: {
          animation: 0
        }
      },
      {
        path: 'otp',
        component: OtpComponent,
        data: {
          animation: 1
        }
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        data: {
          animation: 1
        }
      }
    ]
  },

  {
    path: 'change-password',
    component: ResetPasswordComponent
  },
  {
    path: 'maker',
    component: MakerComponent,
    children: [
      {
        path: '',
        component: Comp1Component
      },
      {
        path: 'rejected-client',
        component: Comp2Component
      },
      {
        path: 'disabled-client',
        component: Comp3Component
      }

    ]
  },
  {
    path: 'maker',
    children: [
      {
        path: 'new-client/:user-id',
        component: EditConfirmMakerComponent
      }
    ]
  },
  {
    path: 'checker',
    component: CheckerComponent,
    loadChildren: () => import('./modules/checker/checker.module').then(m => m.CheckerModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
