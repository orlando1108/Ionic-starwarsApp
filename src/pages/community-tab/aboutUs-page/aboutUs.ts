import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';
import { ContactUs} from '../../../pages/community-tab/contactUs-page/contactUs';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { version } from '../../../app/factory/starWarsFactory';

@Component({
    selector: 'page-aboutUs',
    templateUrl: 'aboutUs.html'
})
export class AboutUs extends DefaultPage {

    private version:string;
    
    constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
        super("About Us", ga)
        this.version = version;
    }
    pushContactUs(){
        this.navCtrl.push(ContactUs);
    }

}
