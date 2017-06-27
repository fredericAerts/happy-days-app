import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { OptionButtonsComponent } from './option-buttons';

@NgModule({
  declarations: [
    OptionButtonsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    OptionButtonsComponent
  ]
})
export class OptionButtonsComponentModule {}
