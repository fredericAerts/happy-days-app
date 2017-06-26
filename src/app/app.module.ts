import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { I18n, createTranslateLoader } from '../providers/i18n/i18n';
import { UserProvider } from '../providers/user/user';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    SignUpPage,
    LoginPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    SignUpPage,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globalization,
    I18n,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ApiProvider
  ]
})
export class AppModule {}
