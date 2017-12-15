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

@Component({
    selector: 'page-starWarsObjectDetail',
    templateUrl: 'starWarsObjectDetail.html'
})

export class StarWarsObjectDetail extends DefaultPage {
    //public searching: boolean = true;
    public selectedItem: any;
    private selectedItem_FilmsList: Film[];
    private selectedItem_PeopleList: People[];
    public objectType:string;

constructor(public navCtrl: NavController, private navParams: NavParams,private dataService: StarWarsService, public ga: GoogleAnalytics) {
        super(navParams.get('title'), ga)
        this.selectedItem = navParams.get('starWarsItem');
        this.objectType = this.selectedItem.constructor.name.toLowerCase();
        this.selectedItem_FilmsList=[];
        this.selectedItem_PeopleList=[];
    }
    ngOnInit(){
      this.selectedItem.associetedFilms= [];
      this.selectedItem.associetedPeople= [];
      if(this.selectedItem_FilmsList.length<1 || this.selectedItem_PeopleList.length <1 ){
        this.selectedItem.getAssociatedObjects(this.dataService);
        this.selectedItem_FilmsList = this.selectedItem.associetedFilms;
        this.selectedItem_PeopleList = this.selectedItem.associetedPeople;
        //console.log('list associée !!!   '+ this.selectedItem_FilmsList );
        //console.log('list associée !!!   '+ this.selectedItem_PeopleList );
      }

    }
  }
