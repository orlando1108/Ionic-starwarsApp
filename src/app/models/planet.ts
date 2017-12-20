import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';

export class Planet extends Starwars {

	public name: string = "";
	public climate: string = "";
	public created: string = "";
	public diameter: string = "";
	public gravity: string = "";
	public population: string = "";
	public terrain: string = "";
	public orbital_period: string = "";
	public urlFilms: string[] = [];
	public urlResidents: string[] = [];
	public associetedPeople: People[]=[];
	public associetedFilms: Film[]=[];

	constructor() {
		super();
	}

	public jsonToObject(input) {
		let planet = new Planet();
		let arrayUrl = input.url.split("/");
		planet.id = arrayUrl[arrayUrl.length - 2]
		planet.name = input.name;
		planet.climate = input.climate;
		planet.created = input.created;
		planet.diameter = input.diameter;
		planet.gravity = input.gravity;
		planet.url = input.url;
		planet.population = input.population;
		planet.associetedFilms = input.films;
		planet.associetedPeople = input.residents;
		planet.terrain = input.terrain;
		planet.orbital_period = input.orbital_period;
		return planet;
	}

	public getAssociatedObjects(dataService: StarWarsService){

  /*  console.log('URLS !!! ' + this.urlPilots);
		console.log('id  '+ this.id);*/
    this.getAssociatedFilms(dataService);
		this.getAssociatedPilots(dataService);

}

private getAssociatedFilms(dataService: StarWarsService){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.associetedFilms.push(result);
					console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
private getAssociatedPilots(dataService: StarWarsService){
	this.urlResidents.map((elem)=>{
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
}
