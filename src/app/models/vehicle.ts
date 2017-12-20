import { Starwars } from '../models/starwars';
import { People } from '../models/people';
import { Film } from '../models/film';
import { StarWarsService } from '../services/starWars.services';

export class Vehicle extends Starwars{
	public name : string = "";
	public cargo_capacity : string = "";
	public cost_in_credits: string = "";
	public crew: string = "";
	public length: string = "";
  public vehicle_class: string = "";
  public passengers: string = "";
  public manufacturer: string = "";
  public model: string = "";
	public urlFilms: string[] = [];
  public urlPilots: string[] = [];
	public associetedPeople: People[]=[];
	public associetedFilms: Film[]=[];
	constructor()
	{
		super();
	}

	public jsonToObject(input) {
	  let vehicle = new Vehicle();
	  let arrayUrl = input.url.split("/");
	  vehicle.id = arrayUrl[arrayUrl.length - 2]
	  vehicle.name = input.name;
	  vehicle.model = input.model;
	  vehicle.manufacturer = input.manufacturer;
	  vehicle.cost_in_credits = input.cost_in_credits;
	  vehicle.url = input.url;
	  vehicle.urlFilms = input.films;
	  vehicle.urlPilots = input.pilots;
	  vehicle.cargo_capacity = input.cargo_capacity;
	  vehicle.crew = input.crew;
	  vehicle.length = input.length;
	  vehicle.vehicle_class = input.vehicle_class;
	  vehicle.passengers = input.passengers;
	  return vehicle;
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
