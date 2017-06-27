import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { HomePage } from './home';

import { OptionButtonsComponent } from '../../components/option-buttons/option-buttons';

@NgModule({
  declarations: [
    HomePage,
    OptionButtonsComponent
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage,
  ],
  entryComponents: [
    HomePage,
  ]
})
export class HomePageModule {}
