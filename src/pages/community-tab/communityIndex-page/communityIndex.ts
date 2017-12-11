import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';
import { DefaultPage } from '../../../pages/defaultPage';
@Component({
    selector: 'page-communityIndex',
    templateUrl: 'communityIndex.html'
})
export class CommunityIndex {
    constructor(public navCtrl: NavController) {

    }
    pushChat() {
        this.navCtrl.push(ChatPage);
    }
    ngOnInit() {
    }

}
