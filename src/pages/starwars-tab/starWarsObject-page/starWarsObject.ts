import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { StarWarsService } from '../../../app/services/starWars.services';
/*import { People } from '../../../app/models/people';
import { Spaceship } from '../../../app/models/spaceship';
import { Planet } from '../../../app/models/planet';
import { Film } from '../../../app/models/film';
import { Vehicle } from '../../../app/models/vehicle';*/
import { DefaultPage } from '../../../pages/defaultPage';
import { FilterPipe } from '../../../tools/filterPipe';
import { Starwars } from '../../../app/models/starwars';

import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StarWarsObjectDetail } from '../../../pages/starwars-tab/starWarsObjectDetail-page/starWarsObjectDetail';
//import { Film } from '../../../models/film';

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
    public shouldShowCancel: boolean;
    public searchInput: any;
    public searching: boolean = true;


    constructor(public navCtrl: NavController, private navParams: NavParams, private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        let starWarsObject = navParams.get('starWarsObject');
        this.shouldShowCancel = true;
        //this.searching = true;
        console.log("searching  "+ this.searching  );


        this.dataService.getListObject(starWarsObject)
            .subscribe((result) => {
                this.starWarsObjectsList = result;
                this.searching = false;
            }),
            (error) => {
                console.log(error);
            };
    }
    pushObjectDetail(obj:Starwars, name:string){
      this.navCtrl.push(StarWarsObjectDetail, {
        starWarsItem: obj,
        title: name});
    }


}
