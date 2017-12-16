import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserLogChat } from '../../../pages/community-tab/userLogChat-page/userLogChat';
import { EventPage } from '../../../pages/community-tab/event-page/event';
import { AboutUs } from '../../../pages/community-tab/aboutUs-page/aboutUs';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-communityIndex',
    templateUrl: 'communityIndex.html'
})
export class CommunityIndex extends DefaultPage {
    constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
        super("assos", ga)
    }
    pushChat() {
        this.navCtrl.push(UserLogChat);
    }
    pushEvent() {
        this.navCtrl.push(EventPage);
    }
    pushAboutUs() {
        this.navCtrl.push(AboutUs);
    }
    ngOnInit() {
    }

}
