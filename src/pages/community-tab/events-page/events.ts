import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
//import { Observable } from 'rxjs/Observable';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-events',
    templateUrl: 'events.html',
})
export class EventsPage extends DefaultPage {
 
    constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
        super("events", ga)
    }


}