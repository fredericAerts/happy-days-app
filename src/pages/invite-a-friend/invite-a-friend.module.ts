import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { InviteAFriendPage } from './invite-a-friend';

import { ShareBlockComponent } from '../../components/share-block/share-block';

@NgModule({
  declarations: [
    InviteAFriendPage,
    ShareBlockComponent
  ],
  imports: [
    TranslateModule,
    IonicPageModule.forChild(InviteAFriendPage),
  ],
  exports: [
    InviteAFriendPage,
  ],
  entryComponents: [
    InviteAFriendPage,
  ]
})
export class InviteAFriendPageModule {}
