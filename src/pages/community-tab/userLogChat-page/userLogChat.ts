import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';

@Component({
    selector: 'userLogChat',
    templateUrl: 'userLogChat.html',
})
export class UserLogChat extends DefaultPage {
    public mail: any;
    public enterBtnDisabled: boolean;
    constructor(private navCtrl: NavController, private navParams: NavParams, public ga: GoogleAnalytics) {
        //this.socket.emit('add-message', { text: this.message });
        super("LoginChat", ga);
        this.mail = "";
        this.enterBtnDisabled = true;

    }
    mailChange(newValue) {
        this.mail = newValue;
        this.enterBtnDisabled = !this.validateEmail(this.mail);
    }
    enter() {
        this.navCtrl.push(ChatPage);
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }


}