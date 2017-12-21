import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Observable } from 'rxjs/Observable';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { ChatPage } from '../../../pages/community-tab/chat-page/chat';
import { ChatService } from '../../../app/services/chat.service';
import { Request, ErrorRequest, SuccesRequest } from '../../../app/models/request';

@Component({
    selector: 'userLogChat',
    templateUrl: 'userLogChat.html',
})
export class UserLogChat extends DefaultPage {
    public mail: string;
    public username: string;
    public enterBtnDisabled: boolean;
    public error: string = "";
    constructor(private navCtrl: NavController, private navParams: NavParams, public ga: GoogleAnalytics, public chatService: ChatService) {
        super("LoginChat", ga);
        this.mail = "";
        this.enterBtnDisabled = true;
        this.error = "";
        if (this.navParams.get('error')) {
            this.error = this.navParams.get('error');
        }
    }
    updateInput(newValue, input) {
        if (input === "mail") {
            this.mail = newValue;
            this.enterBtnDisabled = !this.validateEmail(this.mail);
        } else {
            this.username = newValue;
        }
    }
    enter() {
        this.chatService.connect(this.mail, this.username).subscribe((result: any) => {
            if (result.statut == 200) {
                if (!result.content.insertId) {
                    this.navCtrl.push(ChatPage, { id: result.content.Id, mail: result.content.Mail, username: result.content.Username });
                } else {
                    this.navCtrl.push(ChatPage, { id: result.content.insertId, mail: this.mail, username: this.username });

                }
            } else {
                this.error = result.exception;
            }
        }, (error) => {
          console.log(error);
          this.error = error; })
        //
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }


}
