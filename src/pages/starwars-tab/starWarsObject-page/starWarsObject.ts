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
//import { FilterPipe } from '../../../tools/filterPipe';
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

  private starWarsObjectsList: any[] = [];
  private starWarsObjectsSearchList: any[] = [];
  public objectsList:any[] = [];
  public shouldShowCancel: boolean;
  public searchInput: any;
  public initialization: boolean = true;
  private searching: boolean;
  private starWarsObject: Starwars;
  public lazyEnabled:boolean;

  constructor(public navCtrl: NavController, private navParams: NavParams, private dataService: StarWarsService, public ga: GoogleAnalytics) {
    super(navParams.get('title'), ga)
    this.starWarsObject = navParams.get('starWarsObject');
    this.shouldShowCancel = true;
    this.lazyEnabled = true;
    this.searching = false;


  }
  ngOnInit(){
    this.dataService.getListObject(this.starWarsObject)
    .subscribe((result) => {
      this.starWarsObjectsList = result;
      this.objectsList = this.starWarsObjectsList;
      this.initialization = false;
    }),
    (error) => {
      console.log(error);
    };
  }
  // go to object detail page
  pushObjectDetail(obj:Starwars, name:string){
    this.navCtrl.push(StarWarsObjectDetail, {
      starWarsItem: obj,
      title: name});
    }
    // lazy loading
    retrieveMoreFromAPI(infiniteScroll){
      this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
      console.log ('enabled ? '+ this.lazyEnabled);
      if(this.lazyEnabled){
        setTimeout(() => {
          this.dataService.getNextPage(this.starWarsObject)
          .subscribe((result) => {
            result.map((e)=>{
              console.log('item list api  ' + e);
              this.searching ? this.starWarsObjectsSearchList.push(e) :this.starWarsObjectsList.push(e);
            });
            (error) => {
              console.log(error);
            };
          });
          console.log('Async operation has ended');
          infiniteScroll.complete();
          this.objectsList = this.searching ? this.starWarsObjectsSearchList :this.starWarsObjectsList;
          //this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
        }, 500);
      }

    }

    //search starwars item
    searchItems(searchEvent){
      this.searching = true;
      this.starWarsObjectsSearchList = [];
      this.dataService.getSearchResult(this.starWarsObject, this.searchInput )
      .subscribe((result) => {
        result.map((e)=>{
          console.log('item list api  ' + e.id);
          this.starWarsObjectsSearchList.push(e);
        });
      }),
      (error) => {
        console.log(error);
      };
      this.objectsList = this.starWarsObjectsSearchList;
      this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
      console.log('enabled lazy ? after search '+ this.lazyEnabled );
    }

    onSearchCanceled_Cleared(searchEvent){
      this.searching = false;
      this.dataService.resetPageInformations();
    }


  }
