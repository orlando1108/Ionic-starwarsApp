import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { StarWarsService } from '../../../app/services/starWars.services';
import { People } from '../../../app/models/people';
import { Spaceship } from '../../../app/models/spaceship';
import { Planet } from '../../../app/models/planet';
import { Film } from '../../../app/models/film';
import { Vehicle } from '../../../app/models/vehicle';
import { DefaultPage } from '../../../pages/defaultPage';
import { FilterPipe } from '../../../tools/filterPipe';
import { Starwars } from '../../../app/models/starwars';
import { Event } from '../../../app/models/event';

import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-event',
    templateUrl: 'event.html'
})
export class EventPage extends DefaultPage {
    public starWarsObjectsList: Starwars[] = [];
    public shouldShowCancel: boolean;
    public searchInput: any;
    public test: string;
    public searching: boolean = true;
    public monevent = new Event();
    public monevent2 = new Event();
    public listEvent: Event[] = [];

    constructor(public navCtrl: NavController, private navParams: NavParams, private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super("event", ga);
        //this.searching = true;
        console.log("searching  "+ this.searching  );

        this.monevent.id = 3;
        this.monevent.title = "Diffusion the last jedi";
        this.monevent.desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.";
        this.monevent.date = "11 decembre 2017";
        this.listEvent.push(this.monevent);

        this.monevent2.id = 4;
        this.monevent2.title = "test2 title";
        this.monevent2.desc = "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.";
        this.monevent2.date = "12 decembre 2017";
        this.listEvent.push(this.monevent2);
    }

    viewMore(id) {
      var result = this.listEvent.filter(function(obj) {
        return obj.id == id;
      });
      result[0].visible = true;
      console.log(result);
    }

    viewLess(id) {
      var result = this.listEvent.filter(function(obj) {
        return obj.id == id;
      });
      result[0].visible = false;
      console.log(result);
    }

    ngOnInit() {
    }
}
