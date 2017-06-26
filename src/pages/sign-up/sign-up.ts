import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home'
import { UserProvider } from '../../providers/user/user';

import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGN-UP.ERROR-MESSAGE').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.userProvider.signup(this.account).subscribe((resp) => {
      this.navCtrl.setRoot(HomePage, {}, {
        animate: true,
        direction: 'forward'
      });
    }, (err) => {
      this.navCtrl.setRoot(HomePage, {}, { // TODO: Remove this when you add your signup endpoint
        animate: true,
        direction: 'forward'
      });
      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
