import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StarWarsService } from './services/starWars.services';
import { ChatService } from './services/chat.service';

import { MyApp } from './app.component';
import { StarWarsObject } from '../pages/starwars-tab/starWarsObject-page/starWarsObject';
import { StarWarsObjectDetail } from '../pages/starwars-tab/starWarsObjectDetail-page/starWarsObjectDetail';
import { StarWarsIndex } from '../pages/starwars-tab/starWarsIndex-page/starWarsIndex';
import { CommunityIndex } from '../pages/community-tab/communityIndex-page/communityIndex';
import { ChatPage } from '../pages/community-tab/chat-page/chat';
import { UserLogChat } from '../pages/community-tab/userLogChat-page/userLogChat';
import { EventPage } from '../pages/community-tab/event-page/event';
import { AboutUs } from '../pages/community-tab/aboutUs-page/aboutUs';
import { ContactUs } from '../pages/community-tab/contactUs-page/contactUs';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { FilterPipe } from '../tools/filterPipe';
import { Config } from './config';

const config: SocketIoConfig = { url: Config.AssosApiUrl, options: {} };

@NgModule({
  declarations: [
    MyApp,
    StarWarsIndex,
    TabsPage,
    StarWarsObject,
    CommunityIndex,
    ChatPage,
    UserLogChat,
    EventPage,
    AboutUs,
    FilterPipe,
    StarWarsObjectDetail,
    ContactUs,
  ],
  exports: [
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StarWarsIndex,
    TabsPage,
    StarWarsObject,
    CommunityIndex,
    ChatPage,
    UserLogChat,
    StarWarsObjectDetail,
    EventPage,
    AboutUs,
    ContactUs
  ],
  providers: [
    StarWarsService,
    ChatService,
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
