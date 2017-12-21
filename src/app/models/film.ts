import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Specie } from '../models/specie';
import { Planet } from '../models/planet';
import { presentAlert } from '../factory/starWarsFactory';
import { AlertController } from 'ionic-angular';

export class Film extends Starwars {

  public title: string = "";
  public director: string = "";
  public producer: string = "";
  public release_date: string = "";
  public opening_crawl: string = "";
  public urlCharacters: string[] = [];
  public urlPlanets: string[] = [];
  public urlStarships: string[] = [];
  public urlVehicles: string[] = [];
  public urlSpecies: string[] = [];
  public associatedPeople: People[] = [];
  public associatedPlanets: Planet[] = [];
  public associatedStarships: Starship[] = [];
  public associatedVehicles: Vehicle[] = [];
  public associatedSpecies: Specie[] = [];

  constructor() {
    super();
  }

  public jsonToObject(input): Starwars {
    let film = new Film();
    let arrayUrl = input.url.split("/");
    film.id = arrayUrl[arrayUrl.length - 2]
    film.title = input.title;
    film.director = input.director;
    film.producer = input.producer;
    film.release_date = input.release_date;
    film.url = input.url;
    film.opening_crawl = input.opening_crawl;
    film.urlCharacters = input.characters;
    film.urlPlanets= input.planets;
    film.urlStarships= input.starships;
    film.urlVehicles= input.vehicles;
    film.urlSpecies= input.species;
    return film;
  }

  public getAssociatedObjects(dataService: StarWarsService, alertCtrl: AlertController){

  /*  console.log('URLS !!! ' + this.urlPilots);
		console.log('id  '+ this.id);*/
		this.getAssociatedPilots(dataService,alertCtrl);
    this.getAssociatedPlanets(dataService,alertCtrl);
    this.getAssociatedStarships(dataService,alertCtrl);
    this.getAssociatedSpecies(dataService,alertCtrl);
    this.getAssociatedVehicles(dataService,alertCtrl);

}

private getAssociatedPilots(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlCharacters.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associatedPeople.push(result);
				},
        (error) => {
          presentAlert(alertCtrl);
        });
	})

}

private getAssociatedPlanets(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlPlanets.map((elem)=>{
		dataService.getObjectByUrl(new Planet(), elem)
				.subscribe((result) => {
						this.associatedPlanets.push(result);
				},
				(error) => {
						presentAlert(alertCtrl);
				});
	});

}
private getAssociatedStarships(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlStarships.map((elem)=>{
		dataService.getObjectByUrl(new Starship(), elem)
				.subscribe((result) => {
						this.associatedStarships.push(result);
				}),
				(error) => {
						presentAlert(alertCtrl);
				};
	});

}
private getAssociatedSpecies(dataService: StarWarsService,alertCtrl: AlertController){
	this.urlSpecies.map((elem)=>{
		dataService.getObjectByUrl(new Specie(), elem)
				.subscribe((result) => {
						this.associatedSpecies.push(result);
				},
				(error) => {
						presentAlert(alertCtrl);
				});
	});
}
private getAssociatedVehicles(dataService: StarWarsService, alertCtrl: AlertController){
	this.urlVehicles.map((elem)=>{
		dataService.getObjectByUrl(new Vehicle(), elem)
				.subscribe((result) => {
						this.associatedVehicles.push(result);
				},
				(error) => {
						presentAlert(alertCtrl);
				});
	});

}
}
