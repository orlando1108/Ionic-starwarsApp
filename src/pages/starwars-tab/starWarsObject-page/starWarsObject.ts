import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsService } from '../../../app/services/starWars.services';
import { People } from '../../../app/models/people';
import { Spaceship } from '../../../app/models/spaceship';
import { Planet } from '../../../app/models/planet';
import { Film } from '../../../app/models/film';
import { Vehicle } from '../../../app/models/vehicle';
@Component({
    selector: 'page-starWarsObject',
    templateUrl: 'starWarsObject.html'
})
export class StarWarsObject {
    public listPersonnages: People[] = [];
    public listVaisseau: Spaceship[] = [];
    public listFilm: Film[] = [];
    public listPlanet: Planet[] = [];
    public listVehicules: Vehicle[] = [];

    public listplanet: Planet[] = [];
    constructor(public navCtrl: NavController, private dataService: StarWarsService) {
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
