import { Component, OnInit } from '@angular/core';
import { DefaultPage } from '../../../pages/defaultPage';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Starwars } from '../../../app/models/starwars';
import { StarWarsService } from '../../../app/services/starWars.services';
import { Film } from '../../../app/models/film';
import { People } from '../../../app/models/people';
import { Starship } from '../../../app/models/starship';
import { Vehicle } from '../../../app/models/vehicle';
import { Specie } from '../../../app/models/specie';
import { Planet } from '../../../app/models/planet';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'page-starWarsObjectDetail',
    templateUrl: 'starWarsObjectDetail.html'
})

export class StarWarsObjectDetail extends DefaultPage {
    //public searching: boolean = true;
    public selectedItem: any;
    private selectedItem_FilmsList: Film[];
    private selectedItem_PeopleList: People[];
    public selectedItem_PlanetsList: Planet[] = [];
    public selectedItem_StarshipsList: Starship[] = [];
    public selectedItem_VehiclesList: Vehicle[] = [];
    public selectedItem_SpeciesList: Specie[] = [];
    public objectType:string;

constructor(public navCtrl: NavController,private alertCtrl: AlertController, private navParams: NavParams,private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        this.selectedItem = navParams.get('starWarsItem');
        this.objectType = this.selectedItem.constructor.name.toLowerCase();
        /*this.selectedItem_FilmsList=[];
        this.selectedItem_PeopleList=[];*/
    }
    ngOnInit(){
      this.selectedItem.associatedFilms= [];
      this.selectedItem.associatedPeople= [];
      this.selectedItem.associatedSpecies= [];
      this.selectedItem.associatedVehicles= [];
      this.selectedItem.associatedStarships= [];
      this.selectedItem.associatedPlanets= [];

        this.selectedItem.getAssociatedObjects(this.dataService, this.alertCtrl);
        this.selectedItem_FilmsList = this.selectedItem.associatedFilms;
        this.selectedItem_PeopleList = this.selectedItem.associatedPeople;
        this.selectedItem_SpeciesList = this.selectedItem.associatedSpecies;
        this.selectedItem_VehiclesList = this.selectedItem.associatedVehicles;
        this.selectedItem_StarshipsList = this.selectedItem.associatedStarships;
        this.selectedItem_PlanetsList = this.selectedItem.associatedPlanets;

    }

    goToAssociatedObjectDetail(obj:Starwars, name:string){
      this.navCtrl.push(StarWarsObjectDetail, {
        starWarsItem: obj,
        title: name});
      }
  }
