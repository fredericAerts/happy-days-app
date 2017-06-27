import { Injectable } from '@angular/core';

@Injectable()
export class InviteAFriendService {
  shareBlocks = [
    {
      iconName: 'logo-whatsapp',
      text: 'WhatsApp',
      bgColor: '#25d366'
    },
    {
      iconName: 'logo-facebook',
      text: 'Facebook',
      bgColor: '#3b5998'
    },
    {
      iconName: 'mail',
      text: 'Email',
      bgColor: '#E91E63'
    },
    {
      iconName: 'md-text',
      text: 'Text Message',
      bgColor: '#F57C00'
    }
  ]

  constructor() { }
}
