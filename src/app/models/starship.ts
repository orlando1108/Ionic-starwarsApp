import { Starwars } from '../models/starwars';
import { StarWarsService } from '../services/starWars.services';
import { People } from '../models/people';
import { Film } from '../models/film';

export class Starship extends Starwars{
	public name : string = "";
	public model : string = "";
	public manufacturer: string = "";
	public cost_in_credits: string = "";
	public urlFilms: string[] = [];
  public urlPilots: string[] = [];
	public associetedPeople: People[]=[];
	public associetedFilms: Film[]=[];
	constructor()
	{
		super();
	}

	public jsonToObject(input) {
	  let starship = new Starship();
	  let arrayUrl = input.url.split("/");
	  starship.id = arrayUrl[arrayUrl.length - 2]
	  starship.name = input.name;
	  starship.model = input.model;
	  starship.manufacturer = input.manufacturer;
	  starship.cost_in_credits = input.cost_in_credits;
	  starship.url = input.url;
	  starship.urlFilms = input.films;
	  starship.urlPilots = input.pilots;
	  return starship;
	}

	public getAssociatedObjects(dataService: StarWarsService){

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
	this.urlPilots.map((elem)=>{
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
