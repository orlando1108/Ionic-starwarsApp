import { Component, OnInit } from '@angular/core';
import { DefaultPage } from '../../../pages/defaultPage';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Starwars } from '../../../app/models/starwars';
import { StarWarsService } from '../../../app/services/starWars.services';

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
    public selectedItem: Starwars;
    public isVehicle: boolean;
    private v

constructor(public navCtrl: NavController, private navParams: NavParams,private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        this.selectedItem = navParams.get('starWarsItem');

        console.log('selectedItem   '+ JSON.stringify(this.selectedItem));
        console.log('name item   '+ this.selectedItem.constructor.name.toLowerCase());
        if(this.selectedItem.constructor.name.toLowerCase() == 'vehicle'){
          this.isVehicle = true;
           =
          //https://swapi.co/api/films/5/

        }
    }

    getAssociatedObjects(){
      this.dataService.getObjectByUrl(this.selectedItem, (Film)this.selectedItem.films[0] )
          .subscribe((result) => {
              this.starWarsObjectsList = result;
              this.searching = false;
          }),
          (error) => {
              console.log(error);
          };

    }
  }
