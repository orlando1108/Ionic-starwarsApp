import { Starwars } from '../models/starwars';

export class Vehicule extends Starwars{
	public name : string = "";
	public cargo_capacity : string = "";
	public cost_in_credits: string = "";
	public crew: string = "";
	public length: string = "";
  public vehicle_class: string = "";
  public passengers: string = "";
  public manufacturer: string = "";
  public model: string = "";
	public films: string[] = [];
  public pilots: string[] = [];
	constructor()
	{
		super();
	}

	public jsonToObject(input) {
	  let vehicule = new Vehicule();
	  let arrayUrl = input.url.split("/");
	  vehicule.id = arrayUrl[arrayUrl.length - 2]
	  vehicule.name = input.name;
	  vehicule.model = input.model;
	  vehicule.manufacturer = input.manufacturer;
	  vehicule.cost_in_credits = input.cost_in_credits;
	  vehicule.url = input.url;
	  vehicule.films = input.films;
	  vehicule.pilots = input.pilots;
	  vehicule.cargo_capacity = input.cargo_capacity;
	  vehicule.crew = input.crew;
	  vehicule.length = input.length;
	  vehicule.vehicle_class = input.vehicle_class;
	  vehicule.passengers = input.passengers;
	  return vehicule;
	}
}
