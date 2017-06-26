import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { I18n } from '../providers/i18n/i18n';

import { FirstRunPage } from '../pages/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = FirstRunPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, i18n: I18n) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      i18n.initDefaultLanguage();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

