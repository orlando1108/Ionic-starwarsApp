import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
//import { Observable } from 'rxjs/Observable';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage extends DefaultPage {
    messages = [];
    nickname = '';
    message = '';

    constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket, public ga: GoogleAnalytics) {
        //this.socket.emit('add-message', { text: this.message });
        super("chat", ga);
        this.socket.connect();
    }

    sendMessage() {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    }


}