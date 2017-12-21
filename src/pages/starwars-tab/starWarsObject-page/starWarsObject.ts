import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { StarWarsService } from '../../../app/services/starWars.services';
import { DefaultPage } from '../../../pages/defaultPage';
import { Starwars } from '../../../app/models/starwars';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { StarWarsObjectDetail } from '../../../pages/starwars-tab/starWarsObjectDetail-page/starWarsObjectDetail';
import { AlertController } from 'ionic-angular';
import { presentAlert } from '../../../app/factory/starWarsFactory';

@Component({
  selector: 'page-starWarsObject',
  templateUrl: 'starWarsObject.html'
})
export class StarWarsObject extends DefaultPage {

  private starWarsObjectsList: any[] = [];
  private starWarsObjectsSearchList: any[] = [];
  public objectsList:any[] = [];
  public shouldShowCancel: boolean;
  public searchInput: any;
  public initialization: boolean = true;
  private searching: boolean;
  private starWarsObject: Starwars;
  public lazyEnabled:boolean;
  private alert: any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController, private navParams: NavParams, private dataService: StarWarsService, public ga: GoogleAnalytics) {
    super(navParams.get('title'), ga)
    this.starWarsObject = navParams.get('starWarsObject');
    this.shouldShowCancel = true;
    this.lazyEnabled = true;
    this.searching = false;
  }

  ngOnInit(){
    this.dataService.getListObject(this.starWarsObject)
    .subscribe(
      (result) => {
        this.starWarsObjectsList = result;
        this.objectsList = this.starWarsObjectsList;
        this.initialization = false;
        this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
      },
      (error) => {
            presentAlert(this.alertCtrl);
        });
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
      if(this.lazyEnabled){
        setTimeout(() => {
          this.dataService.getNextPage(this.starWarsObject)
          .subscribe(
            (result) => {
              console.log('RESULT', result)
               result.map((e)=>{
                 console.log(' data x map !!! ');
               this.searching ? this.starWarsObjectsSearchList.push(e) :this.starWarsObjectsList.push(e);
               });
            },
            (error) => {
              presentAlert(this.alertCtrl);
            },
            () => {
              infiniteScroll.complete();
              this.objectsList = this.searching ? this.starWarsObjectsSearchList :this.starWarsObjectsList;
            })
          }, 500);
      }
    }

    //search starwars item
    searchItems(searchEvent){
      this.searching = true;
      this.starWarsObjectsSearchList = [];
      this.dataService.getSearchResult(this.starWarsObject, this.searchInput )
      .subscribe(
        (result) => {
          result.map((e)=>{
          this.starWarsObjectsSearchList.push(e);
          });
        },
        (error) => {
        presentAlert(this.alertCtrl);
        },
        ()=>{
          this.objectsList = this.starWarsObjectsSearchList;
          this.lazyEnabled = this.dataService.isThereMoreDataToLoad();
        }
    );

    }

    onSearchCanceled_Cleared(searchEvent){
      this.searching = false;
      this.dataService.resetPageInformations();
    }

  /*  presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Starwars Alert',
        subTitle: '\n The Dark Side has blocked your request. Please wait Rebel Alliance to continue or try again later !',
        buttons: ['Dismiss']
      });
      alert.present();
    }*/

  }
