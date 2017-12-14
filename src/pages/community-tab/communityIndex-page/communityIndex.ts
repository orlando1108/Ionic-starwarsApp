import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';
import { EventsPage} from '../../../pages/community-tab/events-page/events';
import { AboutUs} from '../../../pages/community-tab/aboutUs-page/aboutUs';
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
    pushEvents(){
        this.navCtrl.push(EventsPage);
    }
    pushChat() {
        this.navCtrl.push(ChatPage);
    }
    pushAboutUs(){
        this.navCtrl.push(AboutUs);
    }
    ngOnInit() {
    }

}
