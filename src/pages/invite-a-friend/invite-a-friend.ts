import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { InviteAFriendService } from './invite-a-friend.service';

/**
 * Generated class for the InviteAFriendPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-invite-a-friend',
  templateUrl: 'invite-a-friend.html',
  providers: [ InviteAFriendService ]
})
export class InviteAFriendPage {
  shareBlocks = this.inviteAFriendService.shareBlocks;

  constructor(public inviteAFriendService: InviteAFriendService) { }

}
