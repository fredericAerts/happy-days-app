import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { HaveADrinkPage } from './have-a-drink';

import { DrinkToggleComponent } from '../../components/drink-toggle/drink-toggle';

@NgModule({
  declarations: [
    HaveADrinkPage,
    DrinkToggleComponent,
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(HaveADrinkPage),
  ],
  exports: [
    HaveADrinkPage
  ],
  entryComponents: [
    HaveADrinkPage,
  ]
})
export class HaveADrinkPageModule {}
