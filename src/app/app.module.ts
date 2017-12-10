import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StarWarsService } from './services/starWars.services';
import { MyApp } from './app.component';
import { StarWarsObject } from '../pages/starwars-tab/starWarsObject-page/starWarsObject';
import { StarWarsIndex } from '../pages/starwars-tab/starWarsIndex-page/starWarsIndex';

import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    StarWarsIndex,
    TabsPage,
    StarWarsObject

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StarWarsIndex,
    TabsPage,
    StarWarsObject
  ],
  providers: [
    StarWarsService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
