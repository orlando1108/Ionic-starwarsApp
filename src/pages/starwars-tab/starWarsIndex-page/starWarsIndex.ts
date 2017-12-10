import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsObject } from '../../../pages/starwars-tab/starWarsObject-page/starWarsObject';
import { DefaultPage } from '../../../pages/defaultPage';

@Component({
    selector: 'page-starWarsIndex',
    templateUrl: 'starWarsIndex.html'
})
export class StarWarsIndex extends DefaultPage {
    constructor(public navCtrl: NavController) {
        super("Star Wars Univers");
    }
    pushVehicles() {
        this.navCtrl.push(StarWarsObject);
    }
    ngOnInit() {
    }

}
