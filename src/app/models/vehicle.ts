import { Starwars } from '../models/starwars';

export class Vehicle extends Starwars {
	public name: string = "";
	public cargo_capacity: string = "";
	public cost_in_credits: string = "";
	public crew: string = "";
	public length: string = "";
	public vehicle_class: string = "";
	public passengers: string = "";
	public manufacturer: string = "";
	public model: string = "";
	public films: string[] = [];
	public pilots: string[] = [];

	constructor() {
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
		vehicle.films = input.films;
		vehicle.pilots = input.pilots;
		vehicle.cargo_capacity = input.cargo_capacity;
		vehicle.crew = input.crew;
		vehicle.length = input.length;
		vehicle.vehicle_class = input.vehicle_class;
		vehicle.passengers = input.passengers;
		return vehicle;
	}
}
