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
import { Spaceship } from '../../../app/models/spaceship';
import { Planet } from '../../../app/models/planet';

@Component({
    selector: 'page-starWarsObjectDetail',
    templateUrl: 'starWarsObjectDetail.html'
})

export class StarWarsObjectDetail extends DefaultPage {
    /*public listPersonnages: People[] = [];
    public listVaisseaux: Spaceship[] = [];
    public listFilms: Film[] = [];
    public listPlanets: Planet[] = [];
    public listVehicules: Vehicle[] = [];*/

  /*  public starWarsObjectsList: Starwars[] = [];
    public shouldShowCancel: boolean;
    public searchInput: any;*/
    public searching: boolean = true;
    public selectedItem: any;
    public isVehicle: boolean;
    private vehicle_FilmsList: Film[] = [];
    private vehicle_PilotsList: People[] = [];

    public vehicule: Vehicle;
    //private filmsList: Film[] = [];

constructor(public navCtrl: NavController, private navParams: NavParams,private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        this.selectedItem = navParams.get('starWarsItem');

      //  console.log('selectedItem   '+ JSON.stringify(this.selectedItem));
      //  console.log('name item   '+ this.selectedItem.constructor.name.toLowerCase());
        if(this.selectedItem.constructor.name.toLowerCase() == 'vehicle'){
          this.isVehicle = true;
          this.vehicule = this.selectedItem;
          //https://swapi.co/api/films/5/
          //this.getAssociatedObjects(new Film(), this.vehicule.films[0]  );

        }

    }

    ngOnInit(){
      this.vehicule.getAssociatedObjects(this.dataService);
      this.vehicle_FilmsList = this.vehicule.films;
      this.vehicle_PilotsList = this.vehicule.pilots;
      

    }



  }
