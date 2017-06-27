import { Injectable } from '@angular/core';

import { IOptionButton } from '../../components/option-buttons/option-button';
import { InviteAFriendPage } from '../invite-a-friend/invite-a-friend';
import { WriteAReviewPage } from '../write-a-review/write-a-review';
import { HaveADrinkPage } from '../have-a-drink/have-a-drink';
import { FindAHappyBarPage } from '../find-a-happy-bar/find-a-happy-bar';

@Injectable()
export class HomeService {
  optionButtons: IOptionButton[] = [
    {
      icon: {
        name: 'md-share',
        bgColor: '#4CAF50'
      },
      text: 'HOME.OPTION-BUTTON-1',
      targetPage: InviteAFriendPage
    },
    {
      icon: {
        name: 'star-half',
        bgColor: '#E91E63'
      },
      text: 'HOME.OPTION-BUTTON-2',
      targetPage: WriteAReviewPage
    },
    {
      icon: {
        name: 'beer',
        bgColor: '#F57C00'
      },
      text: 'HOME.OPTION-BUTTON-3',
      targetPage: HaveADrinkPage
    },
    {
      icon: {
        name: 'search',
        bgColor: '#1976D2'
      },
      text: 'HOME.OPTION-BUTTON-4',
      targetPage: FindAHappyBarPage
    }
  ]

  constructor() { }


}
