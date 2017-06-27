import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { FindAHappyBarPage } from './find-a-happy-bar';

@NgModule({
  declarations: [
    FindAHappyBarPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(FindAHappyBarPage),
  ],
  exports: [
    FindAHappyBarPage,
  ],
  entryComponents: [
    FindAHappyBarPage,
  ]
})
export class FindAHappyBarPageModule {}
