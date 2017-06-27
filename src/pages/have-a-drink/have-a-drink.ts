import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HaveADrinkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-have-a-drink',
  templateUrl: 'have-a-drink.html',
})
export class HaveADrinkPage {
  isConsumed = false;
  today = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  processDrink() {
    this.isConsumed = true;
    console.log('Drink drunk');
  }

}
