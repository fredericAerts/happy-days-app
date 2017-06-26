import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

import { Globalization } from '@ionic-native/globalization';
import { TranslateService } from '@ngx-translate/core';

const availableLanguages = [{
  code: 'en',
  name: 'English'
}, {
  code: 'nl',
  name: 'Dutch'
}];


const defaultLanguage = 'en';

const sysOptions = {
  systemLanguage: defaultLanguage
};

function getSuitableLanguage(language) {
  language = language.substring(0, 2).toLowerCase();
  return availableLanguages.some(x => x.code == language) ? language : defaultLanguage;
}

@Injectable()
export class I18n {
  constructor(private globalization: Globalization, private translate: TranslateService) { }

  initDefaultLanguage() {
    this.translate.setDefaultLang(defaultLanguage);

    if ((<any>window).cordova) {
      this.globalization.getPreferredLanguage().then(result => {
        const language = getSuitableLanguage(result.value);
        this.translate.use(language);
        sysOptions.systemLanguage = language;
      });
    } else {
      let browserLanguage = /* this.translate.getBrowserLang() ||*/ defaultLanguage;
      const language = getSuitableLanguage(browserLanguage);
      this.translate.use(language);
      sysOptions.systemLanguage = language;
    }
  }
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
