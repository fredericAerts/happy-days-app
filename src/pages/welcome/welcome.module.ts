import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WelcomePage } from './welcome';

@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(WelcomePage),
  ],
  exports: [
    WelcomePage
  ],
  entryComponents: [
    WelcomePage,
  ]
})
export class WelcomePageModule {}
