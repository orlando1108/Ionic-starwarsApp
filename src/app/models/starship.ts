import { Starwars } from '../models/starwars';

export class Starship extends Starwars{
	public name : string = "";
	public model : string = "";
	public manufacturer: string = "";
	public cost_in_credits: string = "";
	public films: string[] = [];
  public pilots: string[] = [];
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
	  starship.films = input.films;
	  starship.pilots = input.pilots;
	  return starship;
	}
}
