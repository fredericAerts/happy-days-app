import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { UserProvider } from '../../providers/user/user';

import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN.ERROR-MESSAGE').subscribe((value) => {
      this.loginErrorString = value;
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.userProvider.login(this.account).subscribe((resp) => {
      this.navCtrl.setRoot(HomePage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      this.navCtrl.setRoot(HomePage, {}, { // TODO: Remove this when you add your login endpoint
        animate: true,
        direction: 'forward'
      });
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}







