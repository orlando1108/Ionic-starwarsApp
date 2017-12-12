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

import { Starwars } from '../../../app/models/starwars';

import { GoogleAnalytics } from '@ionic-native/google-analytics';


@Component({
    selector: 'page-starWarsObject',
    templateUrl: 'starWarsObject.html'
})
export class StarWarsObject extends DefaultPage {
    /*public listPersonnages: People[] = [];
    public listVaisseaux: Spaceship[] = [];
    public listFilms: Film[] = [];
    public listPlanets: Planet[] = [];
    public listVehicules: Vehicle[] = [];*/

    public starWarsObjectsList: Starwars[] = [];


    constructor(public navCtrl: NavController, private navParams: NavParams, private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        let starWarsObject = navParams.get('starWarsObject');
        this.dataService.getListObject(starWarsObject)
            .subscribe((result) => {
                this.starWarsObjectsList = result;
                console.log('objectsList result' + result);
            }),
            (error) => {
                console.log(error);
            };
    }

    ngOnInit() {
    }

}
