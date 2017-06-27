import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomeService } from './home.service';
import { IOptionButton } from '../../components/option-buttons/option-button';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ HomeService ],
})
export class HomePage {
  optionButtons: IOptionButton[] = this.homeService.optionButtons;

  constructor(public navCtrl: NavController,
    public homeService: HomeService) { }

  navigateTo(targetPage) {
    this.navCtrl.push(targetPage);
  }
}
