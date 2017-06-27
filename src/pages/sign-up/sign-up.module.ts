import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { SignUpPage } from './sign-up';


@NgModule({
  declarations: [
    SignUpPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(SignUpPage),
  ],
  exports: [
    SignUpPage
  ],
  entryComponents: [
    SignUpPage
  ]
})
export class SignUpPageModule {}
