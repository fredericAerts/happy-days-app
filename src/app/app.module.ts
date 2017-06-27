import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Globalization } from '@ionic-native/globalization';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';

import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { HomePageModule } from '../pages/home/home.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InviteAFriendPageModule } from '../pages/invite-a-friend/invite-a-friend.module';
import { WriteAReviewPageModule } from '../pages/write-a-review/write-a-review.module';
import { HaveADrinkPageModule } from '../pages/have-a-drink/have-a-drink.module';
import { FindAHappyBarPageModule } from '../pages/find-a-happy-bar/find-a-happy-bar.module';

import { MyApp } from './app.component';

import { I18n, createTranslateLoader } from '../providers/i18n/i18n';
import { UserProvider } from '../providers/user/user';
import { ApiProvider } from '../providers/api/api'

@NgModule({
  declarations: [
    MyApp
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
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    SignUpPageModule,
    LoginPageModule,
    HomePageModule,
    InviteAFriendPageModule,
    WriteAReviewPageModule,
    HaveADrinkPageModule,
    FindAHappyBarPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
