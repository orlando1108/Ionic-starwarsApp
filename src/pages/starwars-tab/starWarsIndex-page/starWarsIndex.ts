import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsObject } from '../../../pages/starwars-tab/starWarsObject-page/starWarsObject';

@Component({
    selector: 'page-starWarsIndex',
    templateUrl: 'starWarsIndex.html'
})
export class StarWarsIndex {
    constructor(public navCtrl: NavController) {

    }
    pushVehicles() {
        this.navCtrl.push(StarWarsObject);
    }
    ngOnInit() {
    }

}
