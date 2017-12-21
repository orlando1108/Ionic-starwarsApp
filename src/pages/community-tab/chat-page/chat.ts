import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
import { DefaultPage } from '../../../pages/defaultPage';
import { UserLogChat } from '../../../pages/community-tab/userLogChat-page/userLogChat';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Message } from '../../../app/models/message';

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage extends DefaultPage {
    messages = [];
    id = '';
    mail = '';
    message = '';
    username = ""
    constructor(private navCtrl: NavController, private navParams: NavParams, private socket: Socket, public ga: GoogleAnalytics) {

        super("chat", ga);
        this.mail = this.navParams.get('mail');
        this.id = this.navParams.get('id');
        this.username = this.navParams.get('username');
        this.socket.connect();
        this.socket.emit("login", this.mail)
        this.returnLogin().subscribe(result => {
            if (result == true) {

            } else {
                this.navCtrl.push(UserLogChat, { error: "Your are bam" });
            }
        });

        this.getMessages().subscribe((response: Message) => {

            this.messages.push(new Message(response.mail, response.message, response.date, this.username));
        });
        this.lastMessage().subscribe((response: Message[]) => {

            console.log(response)
            this.messages = response;
        });


    }
    connect() {
        this.socket.emit("connect", { mail: this.mail })
    }

    returnLogin() {
        let observable = new Observable(observer => {
            this.socket.on('returnLogin', (data) => {
                observer.next(data);
            });
        })
        return observable;
    }
    lastMessage() {
        let observable = new Observable(observer => {
            this.socket.on('lastMessage', (data) => {
                observer.next(data);
            });
        })
        return observable;
    }
    getMessages() {
        let observable = new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
        })
        return observable;
    }
    sendMessage() {
        this.socket.emit('add-message', new Message(this.mail, this.message, new Date(), this.username));
        this.message = '';
    }


}