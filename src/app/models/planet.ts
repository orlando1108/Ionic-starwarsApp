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
	public associatedPeople: People[]=[];
	public associatedFilms: Film[]=[];

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
		planet.urlFilms = input.films;
		planet.urlResidents = input.residents;
		planet.terrain = input.terrain;
		planet.orbital_period = input.orbital_period;
		return planet;
	}

	public getAssociatedObjects(dataService: StarWarsService){

  /* console.log('URLS !!!'+ this.urlResidents);
	 console.log('URLS !!!'+ this.urlFilms);*/
	 this.getAssociatedResidents(dataService);
    this.getAssociatedFilms(dataService);

		/*console.log(' final list residents !!!'+ this.associatedResidents.length);
 	 console.log('final list films !!!'+ this.associatedFilms.length);*/

}

private getAssociatedFilms(dataService: StarWarsService){
	this.urlFilms.map((elem)=>{
		 dataService.getObjectByUrl(new Film(), elem)
				.subscribe((result) => {
					this.associatedFilms.push(result);
					//console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
private getAssociatedResidents(dataService: StarWarsService){
	this.urlResidents.map((elem)=>{
		dataService.getObjectByUrl(new People(), elem)
				.subscribe((result) => {
						this.associatedPeople.push(result);
					//	console.log('RESULT !!! ' + JSON.stringify(result));
				}),
				(error) => {
						console.log(error);
				};
	});

}
}
