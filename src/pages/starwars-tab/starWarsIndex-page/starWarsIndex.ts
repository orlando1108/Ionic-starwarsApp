import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsObject } from '../../../pages/starwars-tab/starWarsObject-page/starWarsObject';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-starWarsIndex',
    templateUrl: 'starWarsIndex.html'
})
export class StarWarsIndex extends DefaultPage {
    constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
        super("Star Wars Univers", ga);
    }
    pushVehicles() {
        this.navCtrl.push(StarWarsObject);
    }
    ngOnInit() {
    }

}
