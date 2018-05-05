import { Component } from '@angular/core';
import { AsSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { AsTranslationLoaderService } from './core/services/translation-loader.service';

import { AsNavigationService } from './core/components/navigation/navigation.service';
import { AsNavigationModel } from './navigation/navigation.model';
import { locale as navigationEnglish } from './navigation/i18n/en';
import { locale as navigationTurkish } from './navigation/i18n/tr';

@Component({
    selector   : 'as-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(
        private asNavigationService: AsNavigationService,
        private asSplashScreen: AsSplashScreenService,
        private translate: TranslateService,
        private translationLoader: AsTranslationLoaderService
    )
    {
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Use a language
        this.translate.use('en');

        // Set the navigation model
        this.asNavigationService.setNavigationModel(new AsNavigationModel());

        // Set the navigation translations
        this.translationLoader.loadTranslations(navigationEnglish, navigationTurkish);
    }
}
