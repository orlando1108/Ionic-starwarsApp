import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsService } from '../../../app/services/starWars.services';
import { People } from '../../../app/models/people';
import { Spaceship } from '../../../app/models/spaceship';
import { Planet } from '../../../app/models/planet';
import { Film } from '../../../app/models/film';
import { Vehicle } from '../../../app/models/vehicle';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Component({
    selector: 'page-starWarsObject',
    templateUrl: 'starWarsObject.html'
})
export class StarWarsObject extends DefaultPage {
    public listPersonnages: People[] = [];
    public listVaisseau: Spaceship[] = [];
    public listFilm: Film[] = [];
    public listPlanet: Planet[] = [];
    public listVehicules: Vehicle[] = [];

    public listplanet: Planet[] = [];
    constructor(public navCtrl: NavController, private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super("Vehicles", ga)
        this.dataService.getListObject(new Vehicle())
            .subscribe((result) => {
                this.listVehicules = result;
                console.log(result);
            }),
            (error) => {
                console.log(error);
            };
    }

    ngOnInit() {
    }

}
