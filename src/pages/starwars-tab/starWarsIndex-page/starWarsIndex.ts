import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StarWarsObject } from '../../../pages/starwars-tab/starWarsObject-page/starWarsObject';
import { DefaultPage } from '../../../pages/defaultPage';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Vehicle } from '../../../app/models/vehicle';
import { People } from '../../../app/models/people';
import { Starship } from '../../../app/models/starship';
import { Planet } from '../../../app/models/planet';
import { Film } from '../../../app/models/film';
import { Specie } from '../../../app/models/specie';

@Component({
  selector: 'page-starWarsIndex',
  templateUrl: 'starWarsIndex.html'
})
export class StarWarsIndex extends DefaultPage {
  constructor(public navCtrl: NavController, public ga: GoogleAnalytics) {
    super("Star Wars Univers", ga);
  }
  pushVehicles() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new Vehicle(),
      title: "Vehicles"
    });
  }
  pushStarShips() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new Starship(),
      title: "Starships"
    });
  }
  pushPlanets() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new Planet(),
      title: "Planets"
    });
  }
  pushFilms() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new Film(),
      title: "Films"
    });
  }
  pushSpecies() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new Specie(),
      title: "Species"
    });
  }
  pushPeoples() {
    this.navCtrl.push(StarWarsObject, {
      starWarsObject: new People(),
      title: "Peoples"
    });
  }
  ngOnInit() {
  }

}
