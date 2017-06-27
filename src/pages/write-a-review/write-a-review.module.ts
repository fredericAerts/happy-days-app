import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WriteAReviewPage } from './write-a-review';

@NgModule({
  declarations: [
    WriteAReviewPage,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(WriteAReviewPage),
  ],
  exports: [
    WriteAReviewPage
  ],
  entryComponents: [
    WriteAReviewPage,
  ]
})
export class WriteAReviewPageModule {}
