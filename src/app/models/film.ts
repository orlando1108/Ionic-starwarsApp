import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Starship } from '../models/starship';
import { Vehicle } from '../models/vehicle';
import { Specie } from '../models/specie';
import { Planet } from '../models/planet';

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
  public associetedPeople: People[] = [];
    public associetedPlanets: People[] = [];
      public associetedStarships: People[] = [];
        public associetedVehicles: People[] = [];
          public associetedSpecies: People[] = [];

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

  public getAssociatedObjects(dataService: StarWarsService){

  /*  console.log('URLS !!! ' + this.urlPilots);
		console.log('id  '+ this.id);*/
		this.getAssociatedPilots(dataService);
    this.getAssociatedPlanets(dataService);
    this.getAssociatedStarships(dataService);
    this.getAssociatedSpecies(dataService);
    this.getAssociatedVehicles(dataService);

}

private getAssociatedPilots(dataService: StarWarsService){
	this.urlCharacters.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associetedPeople.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}

private getAssociatedPlanets(dataService: StarWarsService){
	this.urlPlanets.map((elem)=>{
		dataService.getObjectByUrl(new Planet(), elem)
				.subscribe((result) => {
						this.associetedPlanets.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
private getAssociatedStarships(dataService: StarWarsService){
	this.urlStarships.map((elem)=>{
		dataService.getObjectByUrl(new Starship(), elem)
				.subscribe((result) => {
						this.associetedStarships.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
private getAssociatedSpecies(dataService: StarWarsService){
	this.urlSpecies.map((elem)=>{
		dataService.getObjectByUrl(new Specie(), elem)
				.subscribe((result) => {
						this.associetedSpecies.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});
}
private getAssociatedVehicles(dataService: StarWarsService){
	this.urlVehicles.map((elem)=>{
		dataService.getObjectByUrl(new Vehicle(), elem)
				.subscribe((result) => {
						this.associetedVehicles.push(result);
						console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
}
