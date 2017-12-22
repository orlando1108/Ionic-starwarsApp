import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';
import { ContactUs} from '../../../pages/community-tab/contactUs-page/contactUs';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AppVersion } from '@ionic-native/app-version';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
    selector: 'page-aboutUs',
    templateUrl: 'aboutUs.html'
})
export class AboutUs extends DefaultPage {

    private version:any;

    constructor(public navCtrl: NavController, public ga: GoogleAnalytics, private app : AppVersion, private platform:Platform) {
        super("About Us", ga)
    }
    pushContactUs(){
        this.navCtrl.push(ContactUs);
    }
    async ngOnInit(){
        if (this.platform.is('cordova')) {            
            const appVersion = await this.app.getVersionNumber();
            this.version = appVersion;
          } else {
            this.version = "X.X.X";
          }
    }
    
}
