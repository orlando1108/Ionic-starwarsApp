import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
//import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {
    messages = [];
    nickname = '';
    message = '';

    constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket) {
        //this.socket.emit('add-message', { text: this.message });
        this.socket.connect();
    }

    sendMessage() {
        this.socket.emit('add-message', { text: this.message });
        this.message = '';
    }


}