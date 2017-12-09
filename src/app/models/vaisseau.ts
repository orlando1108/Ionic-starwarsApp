import { Starwars } from '../models/starwars';

export class Vaisseau extends Starwars{
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
	  let vaisseau = new Vaisseau();
	  let arrayUrl = input.url.split("/");
	  vaisseau.id = arrayUrl[arrayUrl.length - 2]
	  vaisseau.name = input.name;
	  vaisseau.model = input.model;
	  vaisseau.manufacturer = input.manufacturer;
	  vaisseau.cost_in_credits = input.cost_in_credits;
	  vaisseau.url = input.url;
	  vaisseau.films = input.films;
	  vaisseau.pilots = input.pilots;
	  return vaisseau;
	}
}
