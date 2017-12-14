import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-contactUs',
    templateUrl: 'contactUs.html'
})
export class ContactUs extends DefaultPage {
    constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
        super("Contact Us", ga)
    }

    sendContactForm(){
        alert("coucou");
    }

}
